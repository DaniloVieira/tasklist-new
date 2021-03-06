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
                id: 1,
                order: 3,
                title: 'TASK0',
                status: 'TO DO',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut eleifend ex, ut imperdiet lectus.'
            },
            { 
                id: 2,
                order: 2,
                title: 'TASK1',
                status: 'TO DO',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut eleifend ex, ut imperdiet lectus.'
            },
            { 
                id: 3,
                order: 1,
                title: 'TASK4',
                status: 'TO DO',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut eleifend ex, ut imperdiet lectus.'
            },
            { 
                id: 4,
                order: 5,
                title: 'TASK5',
                status: 'TO DO',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut eleifend ex, ut imperdiet lectus.'
            },
            { 
                id: 5,
                order: 4,
                title: 'TASK6',
                status: 'TO DO',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut eleifend ex, ut imperdiet lectus.'
            },
            { 
                id: 6,
                order: 6,
                title: 'TASK7',
                status: 'DOING',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut eleifend ex, ut imperdiet lectus.'
            }
        ],
        showModalAddSection: false,
        showModalAddItem: false
    }

    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            tasks: this.sortTasks(this.state.tasks)
        }
    }

    sortTasks(tasks) {
        return [...tasks].sort((a, b) => a.order-b.order);
    }

    // componentDidMount() {
    //     console.log('[componentDidMount]');
    // }
    
    // componentDidUpdate(){
    //     console.log('[componentDidUpdate]');
    // }
    
    itemDroped = (task) => {
        const updatedTasks = [...this.state.tasks];
        const taskIndex = updatedTasks.findIndex( t => t.id === task.id);
        updatedTasks.splice(taskIndex, 1);
        updatedTasks.splice(task.order-1, 0, task);  
        const reordered = updatedTasks.map((t, i) => ({...t, order: i+1}));
        this.setState({tasks: reordered});
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

    toggleItemModalHandler = (show, selectedTask) =>{
        if(selectedTask !== undefined){
            this.setState({task: selectedTask});            
        }
        this.setState({showModalAddItem: show});
    }

    submitItemHandler = (task) => {
        let tasks;
        if(task.id === null){
            tasks = [task, ...this.state.tasks];
            task.id = tasks.length + 1;            
        } else {
            const taskIndex = this.state.tasks.findIndex(tsk => tsk.id === task.id);
            tasks = [...this.state.tasks];
            tasks[taskIndex] = task;
        }
        this.setState({tasks: tasks});
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
    
    handleChange = (event, field)  => {
        const task = {...this.state.task};
        task[field] = event.target.value;
        this.setState({task: task });
    }
    
    render(){
        return (
            <Aux>
                <Modal show={this.state.showModalAddSection} modalClosed={() => this.toggleSectionModalHandler(false)}>
                    <KanbanAddSection submitSectionHandler={this.submitSectionHandler} totalSections={this.state.sections.length}/>
                </Modal>
                <Modal show={this.state.showModalAddItem} modalClosed={() => this.toggleItemModalHandler(false)}>
                    <KanbanAddItem task={this.state.task} submitItemHandler={this.submitItemHandler} statusList={this.getStatusList()} handleChange={this.handleChange}/>
                </Modal>
                <KanbanBoard 
                    sections={this.state.sections} 
                    tasks={this.state.tasks} 
                    showModalSection={() => this.toggleSectionModalHandler(true)} 
                    showModalKanbanItem={this.toggleItemModalHandler}
                    itemDroped={this.itemDroped}/>
            </Aux>
        )
    }
}

export default Kanban;