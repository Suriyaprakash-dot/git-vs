import { createContext } from "react";

export const ArrayContext=createContext();
export const ArrayProvider=({children})=>{
    const Array={name:'JOHN WICK',age:40,dep:'KILLER'}
    return(
            <ArrayContext.Provider value={Array}>
                {children}
            </ArrayContext.Provider>
        )
}