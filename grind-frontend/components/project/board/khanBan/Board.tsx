import React, { useState } from 'react';
import useBoardStore from '../../../../stores/board';
import {
    DndContext,
    KeyboardSensor,
    closestCorners,
    PointerSensor,
    useSensor,
    useSensors,
    DragOverlay
  } from "@dnd-kit/core";
  import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { IPoster } from '../../../../models/poster';
import { Button } from 'antd';
import Poster from './Poster';
import ItemCard from './ItemCard';
import PosterForm from '../../../forms/PosterForm';

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

    return (
        <>
            <Button type="primary" className="text-blue-500 mb-4" onClick={() => setOpenPosterForm(true)}>Add Poster</Button>
            <div className="flex justify-start gap-4">
                <DndContext 
                sensors={sensors} 
                collisionDetection={closestCorners}
                onDragEnd={handleDragEnd}  
                onDragOver={handleDragOver}>
                    {posters?.map((poster: IPoster, pIndex: number) => {
                        return (
                            <Poster poster={poster} index={pIndex} key={poster._id}>
                                {poster?.errands?.map((errand, index) => (
                                    <ItemCard 
                                    key={errand?._id}
                                    errand={errand}
                                    poster={poster}
                                    posterIndex={pIndex}
                                    index={index}
                                    />
                                ))}
                            </Poster>
                        )
                    })}
                    <Button type="primary" className="text-blue-500 mb-4" onClick={() => setOpenPosterForm(true)}>Add Poster</Button>
                </DndContext>
            </div>
            <PosterForm open={openPosterForm} setOpen={setOpenPosterForm} />
        </>
    )
};

export default KhabBan2