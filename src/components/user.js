import React, { Component } from 'react';
import FormFields from '../Widgets/Forms/formfield';


class User extends Component {
state={
    formData:{
        name:{
            element:'input',
            value:'sarah',
            label:true,
            labelText:'name',
            config:{
                name:'name_input',
                type:'text',
                placeholder:'Enter Your Name'
            }
        },
        lastname:{
            element:'input',
            value:'neamti',
            label:true,
            labelText:'LastName',
            config:{
                name:'lastname_input',
                type:'text',
                placeholder:'Enter Your Name'
            }
        },
        message:{
            element:'textarea',
            value:'',
            label:true,
            labelText:'message',
            config:{
                name:'message_input',
                rows:4,
                cols:36,
                placeholder:'Enter Your Name'
            }
        },
        select:{
            element:'select',
            value:'',
            label:true,
            labelText:'Age',
            config:{
                name:'age_input',
                options:[
                    {val:'1',text:"10-20"},
                    {val:'2',text:"20-30"},
                    {val:'3',text:'+30'}
                    
                ]
           
            }
        },
        
    }
}
   
    
    updateForm = (newState)=>{
        this.setState({
            formData:newState
        })
    }
    submitForm = (event)=> {
        event.preventDefault()
        let dataToSubmit = {
        }

        for(let key in this.state.formData){
            dataToSubmit[key]= this.state.formData[key].value
        }
        console.log(dataToSubmit)
    }
    render() {
        return (
        <div className="container">
            <form onSubmit={this.submitForm}>
                <FormFields  
                formData = {this.state.formData}
                change = {(newState)=>{this.updateForm(newState)}}

                />
                <button type="submit">Submit</button>
            </form>
        </div>
        )
    }
}

export default User;