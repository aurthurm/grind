import React, { useEffect, useState } from 'react';
import { Gantt, Task, EventOption, StylingOption, ViewMode, DisplayOption } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";
import { ViewSwitcher } from './ViewSwitcher';
import useSchemeStore from '../../stores/schemes';
import useBoardStore from '../../stores/board';

export function getStartEndDateForProject(tasks: Task[], projectId: string) {
    const projectTasks = tasks.filter(t => t.project === projectId);
    let start = projectTasks[0].start;
    let end = projectTasks[0].end;
  
    for (let i = 0; i < projectTasks.length; i++) {
      const task = projectTasks[i];
      if (start.getTime() > task.start.getTime()) {
        start = task.start;
      }
      if (end.getTime() < task.end.getTime()) {
        end = task.end;
      }
    }
    return [start, end];
}

const currentDate = new Date();

const GantChart = () => {
    const scheme = useSchemeStore((state) => state.scheme);
    const posters = useBoardStore((state) => state.board?.posters);
    const [loading, setLoading] = useState(true);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [view, setView] = useState<ViewMode>(ViewMode.Day);
    const [isChecked, setIsChecked] = useState(true);

    useEffect(() => {
      const _tasks: Task[] = [];
      // Add project
      _tasks.push({
        start: new Date(scheme?.startDate),
        end: new Date(scheme?.endDate),
        name: scheme?.title ?? "",
        id: scheme?._id ?? "",
        progress: 0,
        type: "project",
        hideChildren: false,
        displayOrder: 1,
      });
      // Add Tasks
      posters?.forEach(p => {
        p.errands?.forEach((errand, index) => {
          _tasks.push({
            start: new Date(errand?.startDate),
            end: new Date(errand?.endDate),
            name: errand?.title ?? '',
            id: errand?._id ?? '',
            progress: errand.progress ?? 0,
            type: "task",
            dependencies: [],
            project: scheme?._id ?? "",
            displayOrder: index + 2,
            isDisabled: false,
          });
        })
      })
      //
      console.log(_tasks);
      setTasks(_tasks);
      setLoading(false);
    },[])

    if(loading) {
      return (<>Loading Gnatt</>)
    }

    let columnWidth = 65;
    if (view === ViewMode.Year) {
      columnWidth = 350;
    } else if (view === ViewMode.Month) {
      columnWidth = 300;
    } else if (view === ViewMode.Week) {
      columnWidth = 250;
    }

    const handleTaskChange = (task: Task) => {
        console.log("On date change Id:" + task.id);
        let newTasks = tasks.map(t => (t.id === task.id ? task : t));
        if (task.project) {
          const [start, end] = getStartEndDateForProject(newTasks, task.project);
          const project = newTasks[newTasks.findIndex(t => t.id === task.project)];
          if (
            project.start.getTime() !== start.getTime() ||
            project.end.getTime() !== end.getTime()
          ) {
            const changedProject = { ...project, start, end };
            newTasks = newTasks.map(t =>
              t.id === task.project ? changedProject : t
            );
          }
        }
        setTasks(newTasks);
      };
    
      const handleTaskDelete = (task: Task) => {
        const conf = window.confirm("Are you sure about " + task.name + " ?");
        if (conf) {
          setTasks(tasks.filter(t => t.id !== task.id));
        }
        return conf;
      };
    
      const handleProgressChange = async (task: Task) => {
        setTasks(tasks.map(t => (t.id === task.id ? task : t)));
        console.log("On progress change Id:" + task.id);
      };
    
      const handleDblClick = (task: Task) => {
        alert("On Double Click event Id:" + task.id);
      };
    
      const handleClick = (task: Task) => {
        console.log("On Click event Id:" + task.id);
      };
    
      const handleSelect = (task: Task, isSelected: boolean) => {
        console.log(task.name + " has " + (isSelected ? "selected" : "unselected"));
      };
    
      const handleExpanderClick = (task: Task) => {
        setTasks(tasks.map(t => (t.id === task.id ? task : t)));
        console.log("On expander click Id:" + task.id);
      };

    return (
        <>
      <div className="Wrapper">
        <ViewSwitcher
            onViewModeChange={viewMode => setView(viewMode)}
            onViewListChange={setIsChecked}
            isChecked={isChecked}
        />
        <Gantt
            tasks={tasks}
            viewMode={view}
            onDateChange={handleTaskChange}
            onDelete={handleTaskDelete}
            onProgressChange={handleProgressChange}
            onDoubleClick={handleDblClick}
            onClick={handleClick}
            onSelect={handleSelect}
            onExpanderClick={handleExpanderClick}
            listCellWidth={isChecked ? "155px" : ""}
            // ganttHeight={300}
            columnWidth={columnWidth}
        />
        </div>
        </>
    )
};

export default GantChart