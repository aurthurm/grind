import React, { useState } from 'react';
import useBoardStore from '../../../../stores/board';
import {
    DndContext,
    KeyboardSensor,
    closestCorners,
    PointerSensor,
    useSensor,
    useSensors,
  } from "@dnd-kit/core";
  import { horizontalListSortingStrategy, SortableContext, sortableKeyboardCoordinates, useSortable } from "@dnd-kit/sortable";
import { IPoster } from '../../../../models/poster';
import { Button } from 'antd';
import Poster from './Poster';
import ItemCard from './ItemCard';
import PosterForm from '../../../forms/PosterForm';
import { CSS } from "@dnd-kit/utilities";

const KhabBan2 = () => {
    const boardStore = useBoardStore();
    const posters = useBoardStore((state) => state.board?.posters);
    const [openPosterForm, setOpenPosterForm] = useState(false);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
          coordinateGetter: sortableKeyboardCoordinates
        })
    );

    function handleDragEnd(event: any) {
        console.log("de");
        const { over, active } = event;
        if(!over) return;

        // console.log("de active ", active);
        // console.log("de over ", over);

        if (active.id === over.id) return;

        const activeContainer = active.data.current.sortable?.containerId;
        const overContainer = over.data.current?.sortable?.containerId || over.id;

        if (!overContainer || !activeContainer) return;

        if (activeContainer !== overContainer) { 
            boardStore.switchErrandPoster(active.data.current.index, activeContainer, overContainer);
        }
    }

    function handleDragOver(event: any) {
        console.log("do");
        const { over, active } = event
        if (!over?.id) {
          return;
        }

        // console.log("do active ", active);
        // console.log("do over ", over);

        const activeContainer = active.data.current.sortable?.containerId;
        const overContainer = over.data.current?.sortable?.containerId;
        
        if (!overContainer || !activeContainer) return;

        if (activeContainer !== overContainer) {
            boardStore.switchErrandPoster(active.data.current.index, activeContainer, overContainer);
        } else {
            // sort wihin container
            if(active.id === over.id) return;
            boardStore.switchErrandPosition(over.data.current.fromIndex, active.data.current.index, over.data.current.index);
        }
    }

    if(!posters) return;

    return (
        <>
            <Button type="primary" className="text-blue-500 mb-4" onClick={() => setOpenPosterForm(true)}>Add Poster</Button>
            <div className="flex justify-start gap-4">
                <DndContext 
                sensors={sensors} 
                collisionDetection={closestCorners}
                onDragEnd={handleDragEnd}  
                onDragOver={handleDragOver}>

                    <SortableContext id={"thisitit"} items={posters?.map(p => p?._id)} strategy={horizontalListSortingStrategy}>
                        {posters?.map((poster: IPoster, pIndex: number) => {
                            return (
                                <SortablePoster key={poster._id} poster={poster}>
                                    <Poster poster={poster} index={pIndex} >
                                        {poster?.errands?.map((errand, index) => (
                                            <ItemCard 
                                            key={errand?._id}
                                            errand={errand}
                                            poster={poster}
                                            posterIndex={pIndex}
                                            index={index}
                                            ></ItemCard>
                                        ))}
                                    </Poster>
                                </SortablePoster>
                            )
                        })}
                    </SortableContext>

                    {/* <DragOverlay>{"activeId" ? <ItemCard id={"activeId"} /> : null}</DragOverlay> */}
                    <Button type="primary" className="text-blue-500 mb-4" onClick={() => setOpenPosterForm(true)}>Add Poster</Button>
                </DndContext>
            </div>
            <PosterForm open={openPosterForm} setOpen={setOpenPosterForm} />
        </>
    )
};

export default KhabBan2


const SortablePoster = ({ poster, children }: any) => {    
    const { setNodeRef, attributes, listeners, transition, transform, isDragging } = useSortable({ id: "main" , data: {
        type: "poster"
    } });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
        opacity: isDragging ? 0.5 : 1 , 
        background: "lightgreen",
        textAlign: "center",
        margin: 10, 
        padding: 5
    } as any

    return (
        <div className="p-2 bg-red-900" ref={setNodeRef} {...attributes} {...listeners} style={style}> 
          {children}
        </div>
    )
  };