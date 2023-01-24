 //import withAuth from "../hoc/withAuth";
 import UserActions from "../components/User/UserAction";
 import UserHeader from "../components/User/UserHeader";
 import UserTranslationHistory from "../components/User/UserTranslationHistory";
 import {storageSave} from "../utils/storage"

 const userPage = () => {

 
    return(     
    <div>
    <h1>User</h1>
    {/* <UserTranslationHistory/> */}
    </div>
    )
//  const { user , setUser } = useUser()
   const logout = () => {
    storageSave
    }
//     return (
//         <>
            // <h1>User</h1>
//             <UserHeader username={user.username}/>
//             <UserActions logout={logout} />
//             <UserTranslationHistory translations={user.translations}/>
//         </>
//     )
 }

//  export default withAuth(userPage);
 export default userPage;
