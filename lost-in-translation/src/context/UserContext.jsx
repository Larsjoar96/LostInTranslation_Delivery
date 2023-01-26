import { createContext , useContext, useState  } from "react";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { readStorage } from "../utils/storage";

const UserContext = createContext()

export const useUser = () => {
    return useContext(UserContext)
}

const UserProvider = ({children}) => {

    const [user, setUser] = useState(readStorage(STORAGE_KEY_USER))

    const state ={
        user,
        setUser
    } 

    return (
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider