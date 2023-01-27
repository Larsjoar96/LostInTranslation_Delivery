import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"

const NavBar = () => {

    const {user} = useUser()

    return (
        <nav> 
            <ul>
                <li>
                    
                </li>
            </ul>
            {/* { user !== null &&  */}
              <ul>
                
                <li>
                    <NavLink to="/Translation">Translation</NavLink>
                </li>
                <li>
                    <NavLink to="/User">User</NavLink>
                </li>
            </ul>  
        {/* //    } */}
        
            
        </nav>
    )
}
export default NavBar