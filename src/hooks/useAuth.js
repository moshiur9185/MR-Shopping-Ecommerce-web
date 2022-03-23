import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

//use context auth context er value use kora capture korba
const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;