import React from 'react'

const FormFields = (props) => {
    const renderFields = () => {
        const formArray = [];

        for (let elementName in props.formData) {
            formArray.push({
                id: elementName,
                settings: props.formData[elementName]
            })
        }
        return formArray.map((item, i) => {
            return (
                <div key={i} className="form_element">
                    {renderTemplates(item)}
                </div>
            )
        })
    }
    const showLabel = (show, label) => {
        return show ?
            <lable>{label}</lable>
            : null
    }

    const changeHandler = (event,id) => {
        const newState = props.formData;
        newState[id].value = event.target.value;
        console.log(newState)
        
    }
    const renderTemplates = (data) => {
        let formTemplate = ''
        let values = data.settings;
        console.log(values.element)
        switch (values.element) {
            case ('input'):
                return (
                    formTemplate = (
                        <div>
                            {showLabel(values.label, values.labelText)}
                            <br />
                            <input  {...values.config}
                                value={values.value}
                                onChange={
                                    (event,id) => changeHandler(event,data.id)
                                }
                            />

                        </div>
                    )
                )

                break;
            default:
                formTemplate = null
        }

    }
    return (
        <div>

            {renderFields()}
        </div>
    )
}

export default FormFields