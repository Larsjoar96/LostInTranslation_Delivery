import { Link } from "react-router-dom";
import { deleteStorage } from "../../utils/storage";
import { useUser } from "../../context/UserContext";
import { STORAGE_KEY_USER } from "../../const/storageKeys";


const UserActions = ({logout}) => { 
    const {setUser } = useUser()

    const clickLogout = () => {
       if(window.confirm("Are you sure?")){
        deleteStorage(STORAGE_KEY_USER)
        setUser(null)
       // logout();
       }
   }
    return (
        <ul>
            <li><Link to ="/Translation">Translation</Link></li>
            <li><button >Clear history</button></li>
            <li><button onClick={clickLogout}>Logout</button></li>
        </ul>
    )
}
export default UserActions