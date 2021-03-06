import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const {error, setEmail, setPassword, handleGoogleSignIn, handleSignIn, handleResetPass} = useAuth();


    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className="login-container pt-4">
            <div className="wrapper">
                <div className="title">Login Form</div>
                <form onSubmit={handleSignIn} action="#">
                    <div  className="field">
                        <input onBlur={handleEmail} type="email" required />
                        <label>Email Address</label>
                    </div>
                    <div className="field">
                        <input onBlur={handlePassword} type="password" required />
                        <label>Password</label>
                    </div>
                    <div className="content">
                        <div className="checkbox">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <div className="pass-link"><button onClick={handleResetPass} className="text-primary">Forgot password?</button></div>
                    </div>
                    <div><p className="text-danger text-center">{error}</p></div>
                    <div className="field text-center ">
                        <button type="submit" className="btn btn-login text-white fw-bold w-100">Login</button>
                    </div>  
                </form>
                <div className="signup-link text-center">Not a member? <Link to="/register">Signup now</Link></div>
                <div className="social-btn text-center pb-5">
                    <p><small>or connect with social sites</small></p>
                    <button onClick={handleGoogleSignIn} type="button" className="btn btn-outline-danger">Google</button>
                    {/* <button type="button" className="btn btn-outline-primary">Facebook</button> */}
              </div>
            </div>
        </div>
    );
};

export default Login;