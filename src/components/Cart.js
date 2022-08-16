import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Cart = () => {
  const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const database = [
        {
          username: "admin",
          email: "admin@gmail.com"
        },
        {
          username: "guest",
          email: "guest@gmail.com"
        }
    ];
    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
    );
    const errors = {
    uname: "Invalid username",
    email: "Invalid Email"
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        var { uname, email } = document.forms[0];
        const userData = database.find((user) => user.username === uname.value);
        if (userData) {
            if (userData.email !== email.value) {
            setErrorMessages({ name: "email", message: errors.email });
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
              <label>Name </label>
              <input type="text" name="name" required />
            </div>
            <div className="input-container">
              <label>Username </label>
              <input type="text" name="uname" required />
              {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
              <label>Email </label>
              <input type="email" name="email" required />
              {renderErrorMessage("email")}
            </div>
            <div className="button-container">
              {/* <button type='submit'>BUY</button> */}
              <input type="submit" />
            </div>
          </form>
        </div>
    
  );

  return (
    <>
        <div className="app">
          <div className="login-form">
            <div className="title">Place Order:</div>
            {isSubmitted ? <div>Your Order has been Placed .<div><Link to={"/home"}>Lets go to main website</Link></div> </div> : renderForm}
          </div>
        </div>
    </>
  )
}

export default Cart
