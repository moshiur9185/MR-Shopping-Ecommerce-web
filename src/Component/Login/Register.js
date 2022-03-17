import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';



const Register = () => {

    return (
        <div className="login-container pt-4">
            <div className="wrapper">
                <div className="title">Register Form</div>
                <form action="#">
                    <div className="field">
                        <input type="text" required />
                        <label>First Name*</label>
                    </div>
                    <div className="field">
                        <input type="text" required />
                        <label>Last Name*</label>
                    </div>
                    <div className="field">
                        <input type="email" required />
                        <label>Email Address*</label>
                    </div>
                    <div className="field">
                        <input type="password" required />
                        <label>Password*</label>
                    </div>
                    <div className="field">
                        <input type="password" required />
                        <label>Confirm Password*</label>
                    </div>
                    <div className="content">
                        <div className="checkbox">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <div className="pass-link"><a href="#">Forgot password?</a></div>
                    </div>
                    <div className="field">
                        <input type="submit" value="Login" />
                    </div>
                    <div className="signup-link">Are you a member? <Link to="/login">Sing in now</Link></div>
                    
                </form>
                <div className="social-btn text-center pb-5">
                    <p><small>or connect with social sites</small></p>
                    {/* <button onClick={handleGoogleSingIn} type="button" className="btn btn-outline-danger">Google</button> */}
                    <button type="button" className="btn btn-outline-primary">Facebook</button>
                    </div>
            </div>
        </div>
    );
};

export default Register;