import React, { Component } from 'react';
import FormFields from '../Widgets/Form/formfield'

class User extends Component {

    state = {
        formData: {
            name: {
                element: 'input',
                value: 'Francies',
                label: true,
                labelText: 'Name',
                config: {
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Enter your Name',

                }
            },
            lastName: {
                element: 'input',
                value: 'Johns',
                label: true,
                labelText: 'lastName',
                config: {
                    name: 'lastname_input',
                    type: 'text',
                    placeholder: 'Enter your lastName',

                }
            }
        }
    }

    updateForm = (newState)=>{
    
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.submitForm}>
                    <FormFields
                        formData={this.state.formData}
                        change={(newState)=>this.updateForm(newState)}
                    />

                    <button type="submit">Submit</button>
                </form>

            </div>
        )
    }
}

export default User;