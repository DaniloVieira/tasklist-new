import React from 'react';

import classes from './KanbanSection.module.css';
import KanbanCard from '../KanbanCard/KanbanCard';


const kanbanSection = (props) => {
    const itemsToRender = props.tasks
        .map(task => {
            return <KanbanCard task={task} key={task.title} edit={() => props.clickEditItem(true, task)}/>
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