import withAuth from "../hoc/withAuth";
import UserActions from "../components/User/UserAction";
import UserHeader from "../components/User/UserHeader";
import UserTranslationHistory from "../components/User/UserTranslationHistory";
import { useUser } from '../context/UserContext';
import { useEffect } from "react";
import { userById } from "../api/user";
import { saveStorage } from "../utils/storage";
import { STORAGE_KEY_USER } from "../const/storageKeys";

 const UserPage = () => {

    const {user, setUser } = useUser()

    useEffect(() => {
        const findUser = async () => {
            const [error, latestUser] = await userById(user.id)
            if(error !== null){
                saveStorage(STORAGE_KEY_USER, latestUser)
                setUser(latestUser)
            }
        }

        //findUser()
    },[setUser, user])

    return ( 
        <>
            
            <UserHeader username={user.username}/>
            <UserActions />
            <UserTranslationHistory translations={user.translations}/>
        </>
    )
   
 }

export default withAuth(UserPage);
export function logout(){};    