import { useNavigate } from "react-router-dom";
import LoginPage from "../../views/LoginPage";

const UserActions = () => { 
    let logout
    const navigate = useNavigate()

    const clickLogout = ({}) => {
       if(window.confirm("Are you sure?")){
        Logout();
       } ;
   }

   const Logout = () => {
    console.log("øhmø")
    navigate("/");
         };

    


    return (
        <ul>
            <li><button >Clear history</button></li>
            <li><button onClick={clickLogout}>Logout</button></li>
        </ul>
    )
}
export default UserActions