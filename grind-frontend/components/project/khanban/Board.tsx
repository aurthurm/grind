import React, { useState } from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import ErrandCard from './ErrandCard';
import KhabBanColumn from './Column';
import { COLUMNS } from './ItemTypes';


const { todo, doing, pending, done } = COLUMNS;

const tasks = [
    {id: 1, name: 'Errand 1', column: todo},
    {id: 2, name: 'Errand 2', column: doing},
    {id: 3, name: 'Errand 3', column: todo},
    {id: 4, name: 'Errand 4', column: pending},
    {id: 4, name: 'Errand 5', column: todo},
    {id: 5, name: 'Errand 6', column: done},
    {id: 6, name: 'Errand 7', column: pending},
    {id: 7, name: 'Errand 8', column: done},
];

const KhabBan = () => {
    const [items, setItems] = useState(tasks);

    const moveCardHandler = (dragIndex: number, hoverIndex: number) => {
        console.log("dragIndex: " , dragIndex, " hoverIndex: ", hoverIndex)
        const dragItem = items[dragIndex];
        console.log("dragItem: " , dragItem)
        if (dragItem) {
          setItems((prevState) => {
            const coppiedStateArray = [...prevState];
            // remove item by "hoverIndex" and put "dragItem" instead
            const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragItem);
            // remove item by "dragIndex" and put "prevItem" instead
            coppiedStateArray.splice(dragIndex, 1, prevItem[0]);
            return coppiedStateArray;
          });
        }
    };

    const returnItemsForColumn = (columnName: string) => {
        return items?.filter((item) => item.column === columnName)
          .map((item, index) => (
            <ErrandCard 
            id={item.id} 
            key={index} 
            data={item} 
            name={item.name}
            currentColumnName={item.column}
            setItems={setItems}
            index={index}
            moveCardHandler={moveCardHandler}
            />
        ));
    };

    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <div className="flex justify-start gap-4">
                    {Object.entries(COLUMNS).map((data: any, index: number) => {
                        return (
                            <KhabBanColumn key={data[1]} title={data[1]} >
                                <div>
                                    {returnItemsForColumn(data[1])}
                                </div>
                            </KhabBanColumn>
                        )
                    })}
                </div>
            </DndProvider>
        </>
    )
};

export default KhabBan