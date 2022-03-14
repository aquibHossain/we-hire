import React, {  createContext } from 'react';
import useFirebase from '../../hook/useFirebase';

export const AuthContext=createContext(null) 

const AuthProvider = ({children}) => {
    const firebase=useFirebase()
    return (
        <AuthContext.Provider value={firebase}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;