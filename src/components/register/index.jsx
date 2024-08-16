import { useState } from "react";
import CommonForm from "../common-form";

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
    }
    return <div>
        <h1>Register page/component
            <CommonForm
                formControls={registerElements}
                formData={registerData}
                setFormData={setRegisterData}
                buttonText={'Register'}
                onHandleSubmit={handleRegisterSubmit}
            />
        </h1></div>
}