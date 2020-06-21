import React from 'react'

//import Aux from '../../../hoc/_Aux/_Aux';

const drag = (props) => {
    const dragStart = e => {
        //TODO move this bloco to another component?
       const task = {
           ...props.dataItem,
            order: props.order
        }
       //const strObj = JSON.stringify(props.dataItem);
       const strObj = JSON.stringify(task);       
       console.log('[DRAG]',strObj);
       e.dataTransfer.setData('drag_item', strObj);
    }
    return (
        <div id={props.id} draggable onDragStart={dragStart} className={props.classes}>
            {props.children}
        </div>
    )
}
export default drag;