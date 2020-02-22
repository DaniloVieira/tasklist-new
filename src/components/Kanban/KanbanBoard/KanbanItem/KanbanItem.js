import React from 'react';
import classes from './KanbanItem.module.css';
import { FaPencilAlt } from "react-icons/fa";

const kanbanItem = (props) => {
    return (
        <div className={classes.KanbanItem}> 
            <header className={classes.itemHeader}>{props.title}<FaPencilAlt size={10} onClick={props.edit} /></header>
            <p>{props.content}</p>
        </div>
    );
}

export default kanbanItem;