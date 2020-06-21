import React from 'react';
import classes from './KanbanBoard.module.css'

import KanbanSection from './KanbanSection/KanbanSection';

//TOOD add dynamicaly kanban section
const kanbanBoard = (props) => {

    const itemDroped = (task) => {
        props.itemDroped(task)
    }
    const sectionsToRender = props.sections
        .map(section => {
            const tasks = props.tasks.filter((tsk) => {
                return tsk.status === section.title;
            });
            return (
                <KanbanSection key={section.title} title={section.title} order={section.order} tasks={tasks} clickEditItem={props.showModalKanbanItem} itemDroped={itemDroped} />
            );
        });

    return (

        <div className={classes.KanbanBoard}>
            <header><h1>KanbanBoard</h1></header>
            <div className={classes.ColumnGroup}>
                {sectionsToRender}
            </div>
            <button onClick={props.showModalSection}>ADD SECTION</button>
            <button onClick={props.showModalKanbanItem}>ADD ITEM</button>
        </div>
    );
}

export default kanbanBoard;