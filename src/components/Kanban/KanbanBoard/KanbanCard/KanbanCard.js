import React from 'react';
import classes from './KanbanCard.module.css';
import { FaPencilAlt } from "react-icons/fa";

const kanbanCard = (props) => {

    return (
        <div className={classes.KanbanItem}> 
            <header className={classes.itemHeader}>{[props.task.title, props.task.order+'o'].join(' - ')}<FaPencilAlt size={10} onClick={props.edit} /></header>
            <p>{props.task.description}</p>
        </div>
    );
}
export default kanbanCard;