import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

initializeAuthentication()




const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');   
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSingIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user)
            }).catch(error => {
                setError(error.message)
            })
    }

    const handleSignOut = () =>{
        signOut(auth).then(() => {
            setUser(null);
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user =>{
            if(user){
                console.log('inside sate change', user);
                setUser(user)
            }
        })
    }, [])

    return {
        user,
        error,
        handleGoogleSingIn,
        handleSignOut,
    }
}

export default useFirebase;