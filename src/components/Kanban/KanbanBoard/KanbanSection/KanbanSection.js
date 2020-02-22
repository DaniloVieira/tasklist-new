import React from 'react';

import classes from './KanbanSection.module.css';
import KanbanItem from '../KanbanItem/KanbanItem';


const kanbanSection = (props) => {
    const itemsToRender = props.tasks
        .map(task => {
            return <KanbanItem task={task} key={task.title} edit={() => props.clickEditItem(true, task)}/>
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