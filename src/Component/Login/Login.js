import React, { useState } from 'react';
import './Login.css';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import initializeAuthentication from '../../Firebase/firebase.initialize';

initializeAuthentication()

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const Login = () => {
    const [user, setUser] = useState('')
    const auth = getAuth();

    const handleGoogleSingIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                // const loggedInUser = {
                //     name: displayName,
                //     email: email,
                //     img: photoURL
                // };
                // setUser(loggedInUser);
                console.log(user)
            }).catch(error => {
                console.log(error.message)
            })
    }

    const handleGitHubSingIn = () => {
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const loggedInUser = {
                    name: displayName,
                    email: email,
                    img: photoURL
                };
                setUser(loggedInUser);
            })
    }


    return (
        <div className="login-container ">
            <div className="wrapper">
                <div className="title">Login Form</div>
                <form action="#">
                    <div className="field">
                        <input type="text" required />
                        <label>Email Address</label>
                    </div>
                    <div className="field">
                        <input type="password" required />
                        <label>Password</label>
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
                    <div className="signup-link">Not a member? <a href="#">Signup now</a></div>
                    
                </form>
                <div className="social-btn text-center pb-5">
                    <p><small>or connect with social sites</small></p>
                    <button onClick={handleGoogleSingIn} type="button" className="btn btn-outline-danger">Google</button>
                    <button type="button" className="btn btn-outline-primary">Facebook</button>
                    <button onClick={handleGitHubSingIn} type="button" className="btn btn-outline-dark">Github</button>
                </div>
            </div>
        </div>
    );
};

export default Login;