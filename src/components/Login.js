import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const database = [
        {
          username: "admin",
          password: "pass1"
        },
        {
          username: "guest",
          password: "pass2"
        }
    ];
    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
    );
    const errors = {
    uname: "Invalid username",
    pass: "Invalid password"
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        var { uname, pass } = document.forms[0];
        const userData = database.find((user) => user.username === uname.value);
        if (userData) {
            if (userData.password !== pass.value) {
            setErrorMessages({ name: "pass", message: errors.pass });
            } 
            else {
            setIsSubmitted(true);
            }
        } 
        else {
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };
    const renderForm = (
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Username </label>
              <input type="text" name="uname" required />
              {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" required />
              {renderErrorMessage("pass")}
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
    );
    
    return (
        <div className="app">
          <div className="login-form">
            <div className="title">Sign In</div>
            {isSubmitted ? <div>User is successfully logged in<Link to={"/home"}>Go to E-comm Website</Link> </div> : renderForm}
          </div>
        </div>
      );
}

export default Login