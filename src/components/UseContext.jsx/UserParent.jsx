import { createContext, useState } from "react";


export const UserContext = createContext({})

export const UserParent = ({children}) => {
  
    const [name,setname] = useState('SOMMIE')
    return <UserContext.Provider value={{name, setname}}>{children}</UserContext.Provider>
}
