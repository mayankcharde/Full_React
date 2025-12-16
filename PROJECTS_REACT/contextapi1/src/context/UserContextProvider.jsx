import React from "react";
import UserContext from "./UserContext";

// EK METHOD BANAYA 
const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        // VALUE PROVIDE KRNA PADTA HAI TO PROVIDER USE KREGE 
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider