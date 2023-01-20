import withAuth from ".../hoc/withAuth"
import UserActions from "../components/User/UserAction";
import UserHeader from "../components/User/UserHeader";
import UserTranslationHistory from "../components/User/UserTranslationHistory";

const User = () => {
    return (
        <>
            <h1>Profile</h1>
            <UserActions />
            <UserHeader />
            <UserTranslationHistory/>
        </>
    )
}

export default withAuth(User);
