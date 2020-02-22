import React, { Component } from 'react';
import Aux from '../../hoc/_Aux/_Aux';
import KanbanBoard from './KanbanBoard/KanbanBoard';
import Modal from '../UI/Modal/Modal';
import KanbanAddSection from '../Kanban/KanbanBoard/KanbanAddSection/KanbanAddSection';
import KanbanAddItem from '../Kanban/KanbanBoard/KanbanAddItem/KanbanAddItem';

class Kanban extends Component {

    state = {
        sections: [
            {title: 'TO DO', order: 0},
            {title: 'DOING', order: 1},
            {title: 'DONE', order: 2},
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
        ],
        showModalAddSection: false,
        showModalAddItem: false,

        task: { 
            title: '',
            status: '',
            description: ''
        }

    }

    getStatusList(){
        let statusList = [];
         this.state.sections
            .map(sec => (statusList.push(sec.title)));

        return statusList
    }

    toggleSectionModalHandler = (show) =>{
        this.setState({showModalAddSection: show});
    }

    toggleItemModalHandler = (show) =>{
        this.setState({showModalAddItem: show});
    }

    submitItemHandler = (item) => {
        let items = [item, ...this.state.tasks];
        //items.push(...this.state.tasks);
        this.setState({tasks: items})
        this.toggleItemModalHandler(false);
    }

    submitSectionHandler = (section) => {
        let sections = [...this.state.sections];        
        //sections.push(section);
        let isValid = sections.find(sec => sec.title === section.title) === undefined;
        if(isValid){
            let sectionsAux = sections.splice(section.order, sections.length-section.order, section);
            sectionsAux.map((sec) => {
                sec.order = sec.order+1;
                return sections.push(sec);    
            });        
            this.setState({sections: sections});
            this.toggleSectionModalHandler(false);
        }else{
            alert('There\'s already a section with this title!!!' );
        }
    }
    
    render(){

        return (
            <Aux>
                <Modal show={this.state.showModalAddSection} modalClosed={() => this.toggleSectionModalHandler(false)}>
                    <KanbanAddSection submitSectionHandler={this.submitSectionHandler} totalSections={this.state.sections.length}/>
                </Modal>
                <Modal show={this.state.showModalAddItem} modalClosed={() => this.toggleItemModalHandler(false)}>
                    <KanbanAddItem submitSectionHandler={this.submitItemHandler} statusList={this.getStatusList()}/>
                </Modal>
                <KanbanBoard sections={this.state.sections} tasks={this.state.tasks} showModalSection={() => this.toggleSectionModalHandler(true)} showModalKanbanItem={() => this.toggleItemModalHandler(true)}/>
            </Aux>
        )
    }
}

export default Kanban;