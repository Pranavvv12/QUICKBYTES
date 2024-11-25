import React, { useState } from "react";
import './LoginPopup.css';
import crossicon from './cross_icon.png';

const LoginPopup = ({ setShowLogin }) => {
    const [currstate, setcurrstate] = useState("Login");

    return (
        <div className="login-popup">
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currstate}</h2>
                    <img onClick={() => setShowLogin(false)} src={crossicon} alt="close icon" />
                </div>
                <div className="login-popup-input">
                    {currstate === 'Login' ? null : <input type="text" placeholder="Your Name" required="Please Enter A valid Name" />}
                    <input type="email" placeholder="Your Email" required />
                    <input type="password" placeholder="Password" required />
                </div>
                <button>{currstate === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By signing up, you agree to our Terms of Service and Privacy Policy</p>
                </div>
                <hr></hr>
                {currstate === "Login" ? (
                    <p>Create a new account? <span onClick={() => setcurrstate("Sign Up")}>Click Here</span></p>
                ) : (
                    <p>Already have an Account? <span onClick={() => setcurrstate("Login")}>Login here</span></p>
                )}
            </form>
        </div>
    );
};

export default LoginPopup;
