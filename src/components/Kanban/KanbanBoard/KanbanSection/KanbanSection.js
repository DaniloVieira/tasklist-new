import React from 'react';

import classes from './KanbanSection.module.css';
import KanbanCard from '../KanbanCard/KanbanCard';


const kanbanSection = (props) => {

    const drop = e => {
        console.log(e.dataTransfer);
        e.persist();
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');
        const card = document.getElementById(card_id);
        card.style.display = 'block';
        e.target.appendChild(card);
    }

    const dragOver = e => {
        e.preventDefault();
    }

    const itemsToRender = props.tasks
        .map(task => {
            return <KanbanCard taskId={task.id} task={task} key={task.title} edit={() => props.clickEditItem(true, task)}/>
        })
    return (
        <div className={classes.KanbanSection}>
            <header className={classes.sectionHeader}>{props.title}</header>
            <div  className={classes.sectionItems} onDrop={drop} onDragOver={dragOver} >                
                 {itemsToRender}
            </div>
        </div>
    );
}

export default kanbanSection;