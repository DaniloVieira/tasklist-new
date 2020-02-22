import React from 'react';

import classes from './KanbanSection.module.css';
import KanbanItem from '../KanbanItem/KanbanItem';


const kanbanSection = (props) => {
    const itemsToRender = props.tasks
        .map(task => {
            return <KanbanItem key={task.title} title={task.title} content={task.description} status={task.status} edit={props.clickEditItem}/>
        })
    return (
        <div className={classes.KanbanSection}>
            <header className={classes.sectionHeader}>{props.title}</header>
            <div className={classes.sectionItems}>                
                 {itemsToRender}
            </div>
        </div>
    );
}

export default kanbanSection;