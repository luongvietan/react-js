import { useState } from "react";
import CommonForm from "../common-form";
import { registerFormElements } from "../../config";

const initialRegisterData = {
    name: "",
    email: "",
    password: "",
};
  
export default function RegisterComponent() {
    const [registerData, setRegisterData] = useState(initialRegisterData)
    function handleRegisterSubmit(event) {
        event.preventDefault();
        console.log(registerData);
        setRegisterData(initialRegisterData);
    }
    return <div>
        <h1>Register page/component
            <CommonForm
                formControls={registerFormElements}
                formData={registerData}
                setFormData={setRegisterData}
                buttonText={'Register'}
                onHandleSubmit={handleRegisterSubmit}
            />
        </h1>
    </div>
}