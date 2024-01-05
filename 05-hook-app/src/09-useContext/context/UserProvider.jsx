import React,{ useState } from 'react'
import { UserContext } from './UserContext'

/*const user = {
    id: 123,
    name: 'Alan Vega',
    email: 'alan.vega@outlook.es'
}*/

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState()
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
