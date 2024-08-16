import { useState } from "react";
import { loginFormElements } from "../../config";
import CommonForm from "../common-form";

const initialFormData = {
    email: "",
    password: "",
  };

export default function LoginComponent() {
    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: ""
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`loginFormData : `, loginFormData);
        setLoginFormData(initialFormData);
    }
    return (
    <div>
            <h1>Login page/component
                <CommonForm
                    formData={loginFormData}
                    setFormData={setLoginFormData}
                    formControl={loginFormElements}
                    buttonText={'Login'}
                    handleSubmit={handleSubmit} />
        </h1>
    </div>)
}