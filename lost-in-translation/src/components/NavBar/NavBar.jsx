import { NavLink } from "react-router-dom"

const navBar = () => {
    return (
        <nav> 
            <ul>
                <li> </li>
            </ul>
            <ul>
                <li>
                    <NavLink to="/Translation">Translation</NavLink>
                </li>
                <li>
                    <NavLink to="/User">User</NavLink>
                </li>
            </ul>
        </nav>
    )
}