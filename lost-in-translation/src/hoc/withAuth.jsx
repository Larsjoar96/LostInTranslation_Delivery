import {Navigate} from "react-router-dom"
//import { useUser } from ".../context/UserContext";

const withAuth = Component => props =>{
    if(localStorage.getItem("userName") !== null){
        return <Component{...props} />;
    }
    else{ <Navigate to="/" />;
    }
}
export default withAuth;