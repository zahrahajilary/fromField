import React, { Component } from 'react';

class Uncontrolled extends Component {

    handleSubmit =(event)=> {
        event.preventDefault()
        const value = {
            name:this.name.value,
            lastname: this.lastname.value
        }
        console.log(value)
    }

    render() {
        return (
            <div>
                <div className="container">
                    <form>
                        <div className="form-element">
                            <label>Enter name</label>
                            <input
                                type="text"
                                ref={input => { this.name = input }}
                            />
                        </div>
                        <br />
                        <div className="form-element">
                            <label>Enter lastName</label>
                            <input
                                type="text"
                                ref={input => { this.lastname = input }}
                            />
                        </div>
                        <button onClick={this.handleSubmit}>Sing In</button>

                    </form>
                </div>
            </div>
        )
    }
}

export default Uncontrolled;