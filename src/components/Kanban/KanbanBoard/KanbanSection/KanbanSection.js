import React from 'react';

import classes from './KanbanSection.module.css';
import KanbanCard from '../KanbanCard/KanbanCard';
import Drop from '../../../UI/DragDrop/Drop';
import Drag from '../../../UI/DragDrop/Drag'


const kanbanSection = (props) => {

    // TODO pass the draged item to parent component as long as the section from and the section to   
    const itemDroped = (task) => {
        const updatedTask = {
            ...task,
            status: props.title
        }
        props.itemDroped(updatedTask)
    };

    
    const itemsToRender = props.tasks
        .map((task, i) => {
            return (
                <div key={task.id} className={classes.DragableCard}>                                                          
                    <Drop order={task.order} onItemDropped={itemDroped} 
                        initialClass={[classes.DropZoneInitial, classes.DropZoneTransition].join(' ')}
                        enterClass={[classes.DropZoneEnter, classes.DropZoneTransition].join(' ')}>                            
                    </Drop>                    
                    <Drag  dataItem={task} >                    
                        <KanbanCard taskId={task.id} task={task} key={task.title} edit={() => props.clickEditItem(true, task)} />
                    </Drag>                    
                </div>
            )
        });

    const getLastOrder = () => {
        const lastTaks = [...props.tasks].pop();
        return lastTaks === undefined ? 999 : lastTaks.order + 1
    } 
    
    
    
    return (
            <div className={classes.KanbanSection}>
                <header className={classes.sectionHeader}>{props.title}</header>                
                <div className={classes.sectionItems}>
                    {itemsToRender}
                    <Drop order={getLastOrder()} onItemDropped={itemDroped}
                        initialClass={classes.DropZoneInitialDefault}
                        enterClass={[classes.DropZoneInitialDefault, classes.DropZoneEnterDefault].join(' ')}>
                            <div style={props.tasks.length === 0 ? null : {height: '100px'}}
                             className={[classes.active, classes.DropZoneTransition].join(' ')}></div>
                    </Drop>
                </div>
            </div>
        
    );
}

export default kanbanSection;