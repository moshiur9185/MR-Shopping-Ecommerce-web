import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';



const Register = () => {
    const {setName, error, setEmail, setPassword, handleGoogleSignIn, handleRegister} = useFirebase();


    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleName = (e) => {
        setName(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className="login-container pt-4">
            <div className="wrapper">
                <div className="title">Register Form</div>
                <form onSubmit={handleRegister} action="#">
                    <div className="field">
                        <input onBlur={handleName} type="text" required />
                        <label>Full Name*</label>
                    </div>
                    <div className="field">
                        <input onBlur={handleEmail} type="email" required />
                        <label>Email Address*</label>
                    </div>
                    <div className="field">
                        <input onBlur={handlePassword} type="password" required />
                        <label>Password*</label>
                    </div>
                    {/* <div className="field">
                        <input type="password" required />
                        <label>Confirm Password*</label>
                    </div> */}
              
                    <div><p className="text-danger text-center">{error}</p></div>
                    <div className="field text-center">
                        <button className="btn btn-login text-white fw-bold w-100">Register</button>
                    </div>
                </form>
                <div className="signup-link text-center">Are you a member? <Link to="/login">Sing in now</Link></div>
                    
                <div className="social-btn text-center pb-5">
                    <p><small>or connect with social sites</small></p>
                    <button onClick={handleGoogleSignIn} type="button" className="btn btn-outline-danger">Google</button>
                    {/* <button type="button" className="btn btn-outline-primary">Facebook</button> */}
                    </div>
            </div>
        </div>
    );
};

export default Register;