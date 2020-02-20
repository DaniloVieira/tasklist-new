import React, { Component } from 'react';
import Aux from '../../hoc/_Aux/_Aux';
import KanbanBoard from './KanbanBoard/KanbanBoard';

class Kanban extends Component {

    state = {
        sections: [
            {title: 'TO DO'},
            {title: 'DOING'},
            {title: 'DONE'},
        ],
        tasks:[
            { 
                title: 'TASK0',
                status: 'TO DO',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut eleifend ex, ut imperdiet lectus.'
            },
            { 
                title: 'TASK1',
                status: 'DOING',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut eleifend ex, ut imperdiet lectus.'
            },
            { 
                title: 'TASK4',
                status: 'DONE',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut eleifend ex, ut imperdiet lectus.'
            },
            { 
                title: 'TASK5',
                status: 'TO DO',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut eleifend ex, ut imperdiet lectus.'
            }
        ]
    }

    addSectionModalHandler = () =>{
        //TODO set state to show new section modal.
    }
    
    render(){

        return (
            <Aux>
                <KanbanBoard sections={this.state.sections} tasks={this.state.tasks}/>
            </Aux>
        )
    }
}

export default Kanban;