import { useState } from "react";
import { loginFormElements } from "../../config";
import CommonForm from "../common-form";

const initialFormData = {
  email: "",
  password: "",
};

export default function LoginComponent() {
  const [loginFormData, setLoginFormData] = useState(initialFormData);

  function onHandleSubmit(event) {
    event.preventDefault();
    //api logic & database logic
    setLoginFormData(initialFormData);
  }

  return (
    <div>
      <h1>Login page/component</h1>
      <CommonForm
        formData={loginFormData}
        setFormData={setLoginFormData}
        formControls={loginFormElements}
        buttonText={"Login"}
        onHandleSubmit={onHandleSubmit}
      />
    </div>
  );
}