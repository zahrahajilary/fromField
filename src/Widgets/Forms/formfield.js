import React  from  'react'


const FormFields =(props)=>{

    const renderFields = ()=>{
        const formArray = []
        for(let elementName in props.formData){
            formArray.push(
                {
                    id:elementName,
                    settings:props.formData[elementName]
                })
        }
        return formArray.map((item,i)=>{
            return (
                <div key={i} className="form_element">
                    {renderTemplate(item)}
                </div>
            )
        
        })
    }


    const changeHandler = (event,id)=>{
        const newState = props.formData
        newState[id].value = event.target.value
        props.change(newState)
    }


    const renderTemplate = (data)=>{
        let formTemplate = ''
        let values = data.settings;
        switch(values.element){
            case('input'):
            return (formTemplate = (
                <div>
                    {showLabel(values.label,values.labelText)}
                    <input 
                        {...values.config}
                        value ={values.value}
                        onChange={
                            (event)=>{
                                changeHandler(event,data.id)
                            }
                        }
                    />
                </div>
            )  )
            
            case('textarea'):
            return(
                formTemplate=(
                    <div>
                        {showLabel(values.label,values.labelText)}
                        <textarea {...values.config}
                        onChange={event =>
                            changeHandler(event,data.id)
                        }
                        ></textarea>
                    </div>
                )

            )
              
            case('select'):
               return(
                formTemplate = (
                    <div>
                        {showLabel(values.label,values.labelText)}
                        <select
                        value={values.value}
                        name={values.config.name}
                        onChange={event =>
                        changeHandler(event,data.id)} 
                            >
                            {values.config.options.map((item,i)=>{
                                return (
                                    <option key={i} value={item.val}>{item.text}</option>
                                )
                                    
                                
                            })}
                        </select>
                    </div>
                )
               )
       
            break;
            default:{
                formTemplate = null
            }    
        }
        return formTemplate
    }


    const showLabel = (show,label)=> {
        return show ?
        <label>{label}</label> 
        : null
    }

    return(
        <div>
            {renderFields()}
        </div>
    )
}
export default FormFields