import React from 'react';
import classes from './KanbanBoard.module.css'

import KanbanSection from './KanbanSection/KanbanSection';

//TOOD add dynamicaly kanban section



const kanbanBoard = (props) => {

    const sectionsToRender = props.sections
        .map(section => {
            const tasks = props.tasks.filter((tsk) => {
                return tsk.status === section.title;                
            });
            return (
                <KanbanSection key={section.title} title={section.title} tasks={tasks}/>
            );
        });

    return (

        <div className={classes.KanbanBoard}>
            <header><h1>KanbanBoard</h1></header>
            <div className={classes.ColumnGroup}>
                {sectionsToRender}               
            </div>
            <button>ADD SECTION</button>
        </div>
    );
}

export default kanbanBoard;