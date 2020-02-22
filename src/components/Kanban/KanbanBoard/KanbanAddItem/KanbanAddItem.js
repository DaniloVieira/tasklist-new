import React, { Component } from 'react';

import Aux from '../../../../hoc/_Aux/_Aux';
import Button from '../../../UI/Button/Button';

class KanbanAddItem extends Component {    

    // state = {
    //     item:{
    //         title: '',
    //         status: 'TO DO',
    //         description: ''
    //     }

    //     //item: this.props.task
    // }

    // componentWillReceiveProps(){
    //     console.log(this.props.task);
    // }
    // componentDidUpdate(){
    //     console.log('[componentDidUpdate] '+this.props.task);
    //     //this.setState({item: this.props.task });
    // }
    // componentDidMount(){
    //     console.log('[componentDidMount] '+this.props.task);
    //     this.setState({item: this.props.task });
    // }


    // handleChange = (event, field)  => {
    //     const item = {...this.state.item};
    //     item[field] = event.target.value;
    //     this.setState({item: item });
    // }

    handleAddItem = () => {
        this.props.submitItemHandler(this.props.task);
        // this.setState({item:{
        //     title: '',
        //     status: 'TO DO',
        //     description: ''
        // }});    
    }

    render(){
        let  options = [];
        this.props.statusList.map(status => (options.push(<option key={status} value={status} >{status}</option>)))

        return(
            <Aux>
                <label htmlFor="itemTittleIpt">
                    Title
                    <input id="itemTittleIpt" type="text" value={this.props.task.title} onChange={(event) => this.props.handleChange(event, 'title')} />
                </label>
                <br/>
                <label htmlFor="sectionStatusSel">
                    Status
                    <select id="sectionStatusSel" defaultValue={this.props.task.status} onChange={(event) => this.props.handleChange(event, 'status')}>
                        {options}    
                    </select>
                </label>
                <br/>
                <label htmlFor="itemDesctxtA">
                    Descrition
                    <textarea id="itemDesctxtA" rows="4" cols="50" value={this.props.task.description} onChange={(event) => this.props.handleChange(event, 'description')}></textarea>                   
                </label>
                <br/>
                
                {this.props.task.title}
                <br/>
                <Button btnType="Success" clicked={this.handleAddItem}>ADD</Button>
            </Aux>
        );
    }
}

export default KanbanAddItem;