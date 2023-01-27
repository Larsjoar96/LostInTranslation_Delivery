import { Link } from "react-router-dom";
import { deleteStorage, saveStorage } from "../../utils/storage";
import { useUser } from "../../context/UserContext";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import { translationClearHistory } from "../../api/translations";


const UserActions = () => { 
    const { user, setUser } = useUser()

    const clickLogout = () => {
       if(window.confirm("Are you sure?")){
        deleteStorage(STORAGE_KEY_USER)
        setUser(null)
       }
   }
   const handleCleanHistoryClick = async () => {
    if(!window.confirm('Are you sure? \n This can not be undone')){
        return
    }
    const [clearError, clearResult] = await translationClearHistory(user.id)

    if(clearError !== null){
        return
    }

    const updateUser = {
        ...user, 
        translations: []
    }
    saveStorage(updateUser, {})  
    setUser(updateUser)
   }
    return (
        <ul>
            <li><Link to ="/Translation">Translation</Link></li>
            <li><button onClick={handleCleanHistoryClick}>Clear history</button></li>
            <li><button onClick={clickLogout}>Logout</button></li>
        </ul>
    )
}
export default UserActions