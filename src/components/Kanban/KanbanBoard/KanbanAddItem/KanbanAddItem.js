import React, { Component } from 'react';

import Aux from '../../../../hoc/_Aux/_Aux';
import Button from '../../../UI/Button/Button';

class KanbanAddItem extends Component {

    newTask = {
        id: null,
            title: '',
            status: 'TO DO',
            description: ''
    } 

    state = {
        task: {...this.newTask}
    }

    handleAddItem = () => {
        this.props.submitItemHandler(this.state.task);
        this.setState({task: this.newTask });
    }

    handleChange = (event, field)  => {
        const task = {...this.state.task};
        task[field] = event.target.value;
        this.setState({task: task });
    }

    render(){
        let  options = [];
        this.props.statusList.map(status => (options.push(<option key={status} value={status} >{status}</option>)))

        return(
            <Aux>
                <label htmlFor="itemTittleIpt">
                    Title
                    <input id="itemTittleIpt" type="text" value={this.state.task.title} onChange={(event) => this.handleChange(event, 'title')} />
                </label>
                <br/>
                <label htmlFor="sectionStatusSel">
                    Status
                    <select id="sectionStatusSel" defaultValue={this.state.task.status} onChange={(event) => this.handleChange(event, 'status')}>
                        {options}    
                    </select>
                </label>
                <br/>
                <label htmlFor="itemDesctxtA">
                    Descrition
                    <textarea id="itemDesctxtA" rows="4" cols="50" value={this.state.task.description} onChange={(event) => this.handleChange(event, 'description')}></textarea>                   
                </label>
                <br/>
                
                {this.state.task.title}
                <br/>
                <Button btnType="Success" clicked={this.handleAddItem}>ADD</Button>
            </Aux>
        );
    }
}

export default KanbanAddItem;