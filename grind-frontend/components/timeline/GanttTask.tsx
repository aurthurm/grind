import React, { useState } from 'react';
import { Gantt, Task, EventOption, StylingOption, ViewMode, DisplayOption } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";
import { ViewSwitcher } from './ViewSwitcher';

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

let data: Task[] = [
    {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
        name: "Some Project",
        id: "ProjectSample",
        progress: 25,
        type: "project",
        hideChildren: false,
        displayOrder: 1,
      },
      {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
        end: new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          2,
          12,
          28
        ),
        name: "Idea",
        id: "Task 0",
        progress: 45,
        type: "task",
        project: "ProjectSample",
        displayOrder: 2,
      },
      {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
        name: "Research",
        id: "Task 1",
        progress: 25,
        dependencies: ["Task 0"],
        type: "task",
        project: "ProjectSample",
        displayOrder: 3,
      },
      {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
        name: "Discussion with team",
        id: "Task 2",
        progress: 10,
        dependencies: ["Task 1"],
        type: "task",
        project: "ProjectSample",
        displayOrder: 4,
      },
      {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
        name: "Developing",
        id: "Task 3",
        progress: 2,
        dependencies: ["Task 2"],
        type: "task",
        project: "ProjectSample",
        displayOrder: 5,
      },
      {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
        name: "Review",
        id: "Task 4",
        type: "task",
        progress: 70,
        dependencies: ["Task 2"],
        project: "ProjectSample",
        displayOrder: 6,
      },
      {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
        name: "Release",
        id: "Task 6",
        progress: currentDate.getMonth(),
        type: "milestone",
        dependencies: ["Task 4"],
        project: "ProjectSample",
        displayOrder: 7,
      },
      {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
        name: "Party Time",
        id: "Task 9",
        progress: 0,
        isDisabled: true,
        type: "task",
      },
];

const GantChart = () => {
    const [tasks, setTasks] = useState<Task[]>(data);
    const [view, setView] = useState<ViewMode>(ViewMode.Day);
    const [isChecked, setIsChecked] = useState(true);

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