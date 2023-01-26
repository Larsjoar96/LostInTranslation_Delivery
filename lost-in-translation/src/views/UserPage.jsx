 import { useState } from 'react';
 import {useForm} from 'react-hook-form'
 import withAuth from "../hoc/withAuth";
 import UserActions from "../components/User/UserAction";
 import UserHeader from "../components/User/UserHeader";
 import UserTranslationHistory from "../components/User/UserTranslationHistory";
import UserTranslationHistoryItem from '../components/User/UserTranslationHistoryItem';
import { useNavigate } from 'react-router-dom';

    // return(     
    // <div>
    // <h1>User</h1>
    // {/* <UserTranslationHistory/> */}
    // </div>
    // )

 const UserPage = () => {
    const navigate = useNavigate()
 console.log("yo");
    let [user, setUser] = useState([]);
    const logout = () => {
        //     storageSave(STORAGE_KEY_USER, null)
            navigate("/");
             };
    return ( 
    <>
    <h1>User ohnmoooo</h1>
    </>,
        <>
            
            <UserHeader username={user.username}/>
            <UserActions/>
            <UserTranslationHistory translations={user.translations}/>
            <UserTranslationHistoryItem/>
        </>
    )
   
 }

  //export default withAuth(UserPage);
 export function logout(){};   
 export default UserPage;
 