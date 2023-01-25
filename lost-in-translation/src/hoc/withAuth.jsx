import {Navigate} from "react-router-dom"


const withAuth = Component => props =>{
    if(localStorage.getItem("userName") == "testen"){
        return <Component{...props} />;
    }
    else{ <Navigate to="/" />;
    }
}
export default withAuth;