import React, {Component} from 'react';
import {Label, Input, ButtonToggle} from 'reactstrap';
import Table from './Table';
class Form extends Component {
    constructor(props) {
        super(props);
        
        /*
            TODO - set initial state for link name and URL 
        */
       this.state = {
           name: '',
           URL: ''
       }
       this.handleNameChange = this.handleNameChange.bind(this);
       this.handleURLChange = this.handleURLChange.bind(this);
       this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    handleNameChange = event => {
        /*
            TODO - Logic for changing state based on form changes
        */
       
       event.preventDefault();
       this.setState({
           name: event.target.value,
       })
    }

    handleURLChange = event => {
        /*
            TODO - Logic for changing state based on form changes
        */
       
       event.preventDefault();
       this.setState({
           URL: event.target.value
       })
    }
    

    onFormSubmit = event => {
        // to prevent page reload on form submit
        event.preventDefault();
        
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
        
        const data = {
            name: this.state.name,
            URL: this.state.URL
        };
        this.setState({
            name: '',
            URL: ''
        })
        
        this.props.handleSub(data);
        
        
    }

    render() {

        return(
            <form>
                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
                <Label for="name">Name</Label>
                <Input type="text" name="name" value={this.state.name} placeholder="" onChange={this.handleNameChange}></Input>
                <Label for="name">URL</Label>
                <Input type="url" name="url" value={this.state.URL} placeholder="https://www.google.com" onChange={this.handleURLChange}></Input>
                <ButtonToggle type="submit" color="primary" onClick={this.onFormSubmit}>Submit</ButtonToggle>
                
            </form>
        )
    
    }
}

export default Form;
