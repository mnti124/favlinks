import React from 'react';
import Table from './Table';
import Form from './Form';

class LinkContainer extends React.Component {
    constructor(props){
        super(props)
        /* TODO - Create state object for storing favLinks */
        this.state = {
            favLinks: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeCharacter = this.removeCharacter.bind(this);
    }

    removeCharacter = index => {
        /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
       this.setState(state => {
           const list = state.favLinks.splice(index, 1);
           return(
               list
           )
       })
       
    }

    handleSubmit = favLink => {
        /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
       this.setState( state => {
           const list = state.favLinks.push(favLink);
           console.log(list);
           return{
               list
           }
       })
       
    }

    render() {

        return (
            <div className="container">
                <h1>My Favorite Links</h1>
                <p>Add a new url with a name and link to the table.</p>
                {/*TODO - Add Table Component */}
                <Table linkData={this.state.favLinks} removeLink={this.removeCharacter}/>
                <br/>

                <h3>Add New</h3>
                {/*TODO - Add Form Component */}
                <Form handleSub={this.handleSubmit}/>
            </div>
        );
    }
}

export default LinkContainer;