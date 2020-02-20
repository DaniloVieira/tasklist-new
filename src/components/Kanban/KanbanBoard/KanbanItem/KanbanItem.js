import React from 'react';
import classes from './KanbanItem.module.css';

const kanbanItem = (props) => {
    return (
        <div className={classes.KanbanItem}>
            <header className={classes.itemHeader}>{props.title}</header>
            <p>{props.content}</p>
        </div>
    );
}

export default kanbanItem;