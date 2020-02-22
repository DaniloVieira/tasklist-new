import React, { Component } from 'react';

import Aux from '../../../../hoc/_Aux/_Aux';
import Button from '../../../UI/Button/Button';

class kanbanAddSection extends Component {
    
    state = {
        section: {
            title: '',
            order: this.props.totalSections+1
        },
        ordersArray: []
    }

    // componentDidMount(){
    //     console.log(this.state.section);
    // }
    
    handleChange = (event, field)  => {
        const section = {...this.state.section};
        section[field] = event.target.value;
        this.setState({section: section });
    }
       

    handleAddSection = () => {
        this.props.submitSectionHandler(this.state.section);    
        this.setState({section: {
                                    title: 'teste',
                                    order: 0
                                 } 
                    });    
    }

    render(){
        const totalSections = this.props.totalSections;
        let  options = [];

        for (let index = 0; index <= totalSections; index++) {
            options.push(<option key={index} value={index} >{index+1+'º'}</option>);
        }
        
        return (
            <Aux>
                <label htmlFor="sectioTittleIpt">
                    Title
                    <input id="sectioTittleIpt" type="text" value={this.state.section.title} onChange={(event) => this.handleChange(event, 'title')} />
                </label>
                <label htmlFor="sectionOrderSel">
                    Order
                    <select id="sectionOrderSel" defaultValue={this.state.section.order} onChange={(event) => this.handleChange(event, 'order')}>
                        {options}    
                    </select>
                </label>
                <br/>
                <Button btnType="Success" clicked={this.handleAddSection}>ADD</Button>
            </Aux>
        );
    }
}

export default kanbanAddSection;