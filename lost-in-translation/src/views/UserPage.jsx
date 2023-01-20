// import withAuth from ".../hoc/withAuth"
import UserActions from "../components/User/UserAction";
// import UserHeader from "../components/User/UserHeader";
// import UserTranslationHistory from "../components/User/UserTranslationHistory";

 const UserPage = () => {

// const { user } = useUser()

//     return (
        <>
            <h1>User</h1>
            {/* <UserHeader username={user.username}/> */}
            <UserActions />
            {/* <UserTranslationHistory translations={user.translations}/> */}
        </>
//     )
 }

// export default withAuth(User);
export default UserPage;
