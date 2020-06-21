import React from 'react'

//import Aux from '../../../hoc/_Aux/_Aux';

const drag = (props) => {
    const dragStart = e => {
        const strObj = JSON.stringify(props.dataItem);
        e.dataTransfer.setData('drag_item', strObj);
    }
    return (
        <div id={props.id} draggable onDragStart={dragStart} className={props.classes}>
            {props.children}
        </div>
    )
}
export default drag;