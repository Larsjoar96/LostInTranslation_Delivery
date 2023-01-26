import withAuth from "../hoc/withAuth";
import UserActions from "../components/User/UserAction";
import UserHeader from "../components/User/UserHeader";
import UserTranslationHistory from "../components/User/UserTranslationHistory";
import UserTranslationHistoryItem from '../components/User/UserTranslationHistoryItem';
import { useUser } from '../context/UserContext';
import { useEffect } from "react";
import { userById } from "../api/user";

 const UserPage = () => {

    const {user, setUser } = useUser()

    useEffect(() => {
        const findUser = async () => {
            const [error, latestUser] = await userById(user.id)
            if(error !== null){
                setUser(latestUser)
            }
        }

        findUser()
    },[setUser, user.id])
    
    return ( 
    <>
    <h1>User ohnmoooo</h1>
    </>,
        <>
            
            <UserHeader /*username={user.username}*//>
            <UserActions />
            <UserTranslationHistory /*translations={user.translations}*//>
            <UserTranslationHistoryItem/>
        </>
    )
   
 }

export default withAuth(UserPage);
export function logout(){};   
 //export default UserPage;
 