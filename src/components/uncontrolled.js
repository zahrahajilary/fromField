import React, { Component } from 'react';

class Uncontrolled extends Component {
   
    handleSubmit = (event)=>{
        event.preventDefault();
        const values ={
            name :this.name.value,
            lastname:this.lastname.value
        }
        console.log(values)
        }
    render(){
        return (
            <div className="container">
                <form className="form_element">
                    <label>
                        EnterName
                    </label>
                    <input type="text" 
                    placeholder="name"
                    ref={input => this.name = input }/>
                    <label>
                        Enter lastname
                    </label>
                    <input type="text" placeholder="lastname" ref ={input => this.lastname = input} />
                    <button onClick = {this.handleSubmit}> Sing in</button>
                </form>
            </div>
        )
    }
       
    
}

export default Uncontrolled;