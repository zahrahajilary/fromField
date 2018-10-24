import React, { Component } from 'react';

class Controlled extends Component {

    state = {
        name: '',
        lastname: ''
    }


    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleLastNameChange = (event) => {
        this.setState({
            lastname: event.target.value
        })
    }

    onShandler=(event)=> {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.onShandler}>
                    <div className="form-element">
                        <label>Enter name</label>
                        <input
                            type="text"
                            onChange={this.handleNameChange}
                            value={this.state.name}
                        />
                    </div>
                    <br />
                    <div className="form-element">
                        <label>Enter lastName</label>
                        <input
                            onChange={this.handleLastNameChange}
                            type="text"
                            value={this.state.lastname}
                        />
                    </div>
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Controlled;