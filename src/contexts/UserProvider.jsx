import React, { useState } from 'react'
import UserContext from './UserContext'


const UserProvider = ({ children})=>{
    const [userName , setUserName] = useState("")

    return(
        <UserContext.Provider value={{userName, setUserName}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
