import { useState } from "react"

export default function FormComponent() {
    const [nameValue, setNameValue] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [formData, setFormData] = useState({name:'', email:''})
    const handleNameChange = (event) => {
        const { value } = event.target;
        // setNameValue(event.target.value)
        setNameValue(value)
        console.log(`Name value: `, value);
    }
    const handleMailChange = (event) => {
        const { value } = event.target;
        setEmailValue(value)
        console.log(`Email value: `, value);
    }

    const handleOnChange = event => {
        console.log(event.target.name);
        
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name] : value
        })
        
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //call API -> pass value of name
        console.log('Values : ', nameValue, emailValue);
    }
    console.log(formData);
    
    return (
    <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <input value={formData.name}
                    name="name" id="name"
                    placeholder="Enter your name"
                    onChange={handleOnChange} 
                //  onChange={event => setFormData({
                //      ...formData,
                //      [event.target.name] : event.target.value
                // })}
                />
                <input value={formData.email}
                    type='email' name="email" id="email"
                    placeholder="Enter your email"
                    onChange={handleOnChange}
                //  onChange={event => setFormData({
                //      ...formData,
                //      [event.target.email] : event.target.value
                // })}
                    />
                <button type="submit">Submit</button>
            </form>
           
    </div>)
}