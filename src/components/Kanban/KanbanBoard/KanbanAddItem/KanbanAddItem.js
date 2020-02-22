import React, { Component } from 'react';

import Aux from '../../../../hoc/_Aux/_Aux';
import Button from '../../../UI/Button/Button';

class KanbanAddItem extends Component {

    state = {
        item:{
            title: '',
            status: 'TO DO',
            description: ''
        }
    }

    handleChange = (event, field)  => {
        const item = {...this.state.item};
        item[field] = event.target.value;
        this.setState({item: item });
    }

    handleAddItem = () => {
        this.props.submitSectionHandler(this.state.item);
        this.setState({item:{
            title: '',
            status: 'TO DO',
            description: ''
        }});    
    }

    render(){
        let  options = [];
        this.props.statusList.map(status => (options.push(<option key={status} value={status} >{status}</option>)))

        return(
            <Aux>
                <label htmlFor="itemTittleIpt">
                    Title
                    <input id="itemTittleIpt" type="text" value={this.state.item.title} onChange={(event) => this.handleChange(event, 'title')} />
                </label>
                <br/>
                <label htmlFor="sectionStatusSel">
                    Status
                    <select id="sectionStatusSel" defaultValue={this.state.item.status} onChange={(event) => this.handleChange(event, 'status')}>
                        {options}    
                    </select>
                </label>
                <br/>
                <label htmlFor="itemDesctxtA">
                    Descrition
                    <textarea id="itemDesctxtA" rows="4" cols="50" value={this.state.item.descrition} onChange={(event) => this.handleChange(event, 'description')}></textarea>                   
                </label>
                <br/>
                <Button btnType="Success" clicked={this.handleAddItem}>ADD</Button>
            </Aux>
        );
    }
}

export default KanbanAddItem;