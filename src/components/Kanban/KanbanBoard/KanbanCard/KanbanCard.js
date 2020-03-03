import React from 'react';
import classes from './KanbanCard.module.css';
import { FaPencilAlt } from "react-icons/fa";

const kanbanCard = (props) => {
    
    const dragStart = e => {
        
        console.log(e);
        e.persist();
        e.dataTransfer.setData('card_id', e.target.id);

        setTimeout(() => {
            e.target.style.display = 'none';
        },0)

    }

    const dragOver = e => {
        e.stopPropagation();
    }
    
    return (
        <div id={'card_'+props.task.id} className={classes.KanbanItem} 
            draggable={true}
            onDragStart={dragStart}
            onDragOver={dragOver}> 
            <header className={classes.itemHeader}>{props.task.title}<FaPencilAlt size={10} onClick={props.edit} /></header>
            <p>{props.task.description}</p>
        </div>
    );
}

export default kanbanCard;