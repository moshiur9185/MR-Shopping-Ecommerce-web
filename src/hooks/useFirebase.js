import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";

initializeAuthentication()




const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user)
            }).catch(error => {
                setError(error.message)
            })
    }

    //email and password account create
    const handleRegister = (e) => {
        e.preventDefault()
        if (password.length < 6) {
            setError('password must be at least 6 characters long')
            return;
        }
        else if (user.email === email) {
            setError("The email address is already in use by another account.")
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                emailVerification();
                setUser(user);
                setUserName();
                // console.log(name);
                setError('')
                // alert('User created successfully')
            })
    }

    //email verification
    const emailVerification = () => {
        sendEmailVerification(auth.currentUser).then(result => {
            console.log(result)
            alert("send a verification link to your email")
        })
    }

    //reset password
    const handleResetPass =()=>{
        sendPasswordResetEmail(auth, email)
        .then(result=>{
            alert("Please check your mail & set new password")
        })
    }

    //name update
    const setUserName =()=>{
        updateProfile(auth.currentUser, {displayName: name})
        .then(result => {})
    }

    //email password sign in
    const handleSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)
                console.log(user  );
                alert("login successful")
                // console.log(password);
            }).catch(error => {
                setError(error.massage)
            })
            
    }

    const handleSignOut = () => {
        signOut(auth).then(() => {
            setUser(null);
        })
    }

    //state change for firebase
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                // console.log('inside sate change', user);
                setUser(user)
            }
        })
    }, [])


    return {
        user,
        setName,
        error,
        email,
        setEmail,
        password,
        setPassword,
        handleResetPass,
        handleGoogleSignIn,
        handleSignOut,
        handleRegister,
        handleSignIn,
    }
}

export default useFirebase;