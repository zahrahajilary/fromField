import React, { Component } from 'react';

class Controlled extends Component {

    state = {
        name: 'sarah',
        lastname: 'nemati'
    }
    handleNameChange = (event)=>{
       this.setState({
           name:event.target.value
       })
    }
    handleLastNameChange =(event)=>{
        this.setState({
            lastname:event.target.value
        })
    }
    onhandler = (event) =>{
        event.preventDefault();
        console.log(this.state)
    }

    render(){
        return(
            <div className="container">
                <form className="form_element" onSubmit={this.onhandler}>
                    <label>
                        EnterName
                    </label>
                    <input type="text" value={this.state.name}
                    onChange={this.handleNameChange} />
                    <label>
                        Enter lastname
                    </label>
                    <input type="text" placeholder="lastname" value={this.state.lastname} onChange={this.handleLastNameChange}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
    
}

export default Controlled;