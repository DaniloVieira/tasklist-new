import React from 'react';

import classes from './KanbanSection.module.css';
import KanbanCard from '../KanbanCard/KanbanCard';
import Drop from '../../../UI/DragDrop/Drop';
import Drag from '../../../UI/DragDrop/Drag'


const kanbanSection = (props) => {

    // TODO pass the draged item to parent component as long as the section from and the section to   
    const itemDroped = (task, order) => {
        console.log('[ITEM DROPED]', task, order);
        const updatedTask = {
            ...task,
            status: props.title
        }
        props.itemDroped(updatedTask)
    };

    const itemsToRender = props.tasks
        .map(task => {
            return (
                <div key={task.id} className={classes.dragble_card}>
                    <Drag  dataItem={task} >                    
                        <KanbanCard taskId={task.id} task={task} key={task.title} edit={() => props.clickEditItem(true, task)} />
                    </Drag>
                    <Drop order={task.order} onItemDropped={itemDroped} 
                        initialClass={classes.drop_zone_initial}
                        enterClass={classes.drop_zone_enter}>
                    </Drop>                  
                </div>
            )
        });

    return (
            <div className={classes.KanbanSection}>
                <header className={classes.sectionHeader}>{props.title}</header>
                <Drop onItemDropped={itemDroped} 
                    initialClass={classes.drop_zone_initial}
                    enterClass={classes.drop_zone_enter}>
                </Drop>
                <div className={classes.sectionItems}>
                    {itemsToRender}
                </div>
            </div>
        
    );
}

export default kanbanSection;