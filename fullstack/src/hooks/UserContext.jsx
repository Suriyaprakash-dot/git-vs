import { createContext } from "react";
//create context
export const UserContext=createContext();
//context provider
export const UserProvider=({children})=>{
    const name='SURIYA'
    return(
        <UserContext.Provider value={name}>
            {children}
        </UserContext.Provider>
    )
}
