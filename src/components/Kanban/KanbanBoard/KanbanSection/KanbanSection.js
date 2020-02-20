import React from 'react';

import classes from './KanbanSection.module.css';
import KanbanItem from '../KanbanItem/KanbanItem';

//TODO adicionar dinamicamente itens do kanban -tarefas-

const kanbanSection = (props) => {
    const itemsToRender = props.tasks
        .map(task => {
            return <KanbanItem title={task.title} content={task.description} status={task.status}/>
        })
    return (
        <div className={classes.KanbanSection}>
            <header className={classes.sectionHeader}>{props.title}</header>
            <div className={classes.sectionItems}>
                {/* <KanbanItem title="Task0" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut eleifend ex, ut imperdiet lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut eleifend ex, ut imperdiet lectus."/>
                <KanbanItem title="Task1" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut eleifend ex, ut imperdiet lectus."/>
                <KanbanItem title="Task2" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut eleifend ex, ut imperdiet lectus."/>
                <KanbanItem title="Task3" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut eleifend ex, ut imperdiet lectus."/>
                 */}
                 {itemsToRender}
            </div>
        </div>
    );
}

export default kanbanSection;