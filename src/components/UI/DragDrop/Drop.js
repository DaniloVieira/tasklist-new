import React, {useState} from 'react';

const Drop = (props) => {

    const [isOver, setIsOver] = useState(false);
    //const [style, setStyle] = useState([props.initialClass]);

    const dragOver = (e) => {
        e.preventDefault();
    }

    const drop = (e) => {
        e.preventDefault();
        const strObj = e.dataTransfer.getData('drag_item');
        const droppedItem = JSON.parse(strObj);
        console.log('[DROP]',  droppedItem);
        if (droppedItem) {
            props.onItemDropped(droppedItem);
            setIsOver(false)
        }
    }

    const dragEnter = () => {
        setIsOver(true);
        //applyStyle();
    }

    const dragLeave = () => {
        setIsOver(false);
        //applyStyle();
    }

    // const applyStyle = () => {
    //     const aux = [];
    //     console.log('[applyStyle]', isOver);
    //     if(isOver){
    //        aux.push(props.enterClass);
    //     }else{
    //         aux.pop();
    //     }
    //     setStyle(aux);
    // }

    

    return (
        <div id={props.id} 
            onDragOver={dragOver} 
            onDrop={drop}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            className={isOver ? props.enterClass : props.initialClass}>                
            {props.children}
        </div>
    );

}

export default Drop