import React, { useEffect, useState } from 'react';
import { Auth } from '../config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import UserContext from './UserContext';

const UserProvider = ({ children }) => {
    const [userName, setUserName] = useState(null); 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Auth, (user) => {
            if (user) {
                setUserName(user.displayName); 
            } else {
                setUserName(null); 
            }
        });

        return () => unsubscribe(); 
    }, []); 

    return (
        <UserContext.Provider value={{ userName }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
