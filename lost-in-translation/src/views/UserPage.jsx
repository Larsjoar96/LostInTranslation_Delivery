import withAuth from ".../hoc/withAuth"
import UserActions from "../components/User/UserAction";
import UserHeader from "../components/User/UserHeader";
import UserTranslationHistory from "../components/User/UserTranslationHistory";

const User = () => {

const { user } = useUser()

    return (
        <>
            <h1>User</h1>
            <UserHeader username={user.username}/>
            <UserActions />
            <UserTranslationHistory translations={user.translations}/>
        </>
    )
}

export default withAuth(User);
