import React, {useState} from 'react';

const Drop = (props) => {

    const [counter, setCounter] = useState(0);
    
    const dragOver = (e) => {
        e.preventDefault();
    }

    const drop = (e) => {
        e.preventDefault();
        const droppedItem = {...JSON.parse(e.dataTransfer.getData('drag_item'))};
        const updatedOrder = props.order !== undefined ? props.order : droppedItem.order;        
        console.log('[drop]', droppedItem)
        if (droppedItem) {
            props.onItemDropped(
                {
                    ...droppedItem,
                    order: updatedOrder
                }
            );
            setCounter(0);
        }
    }

    const dragEnter = () => {
        setCounter(counter+1);
    }

    const dragLeave = () => {
        setCounter(counter-1);
    }
    
    return (
        <div id={props.id} 
            onDragOver={dragOver} 
            onDrop={drop}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            className={counter === 0 ? props.initialClass : props.enterClass}>    
            {props.children}
        </div>
    );

}

export default Drop