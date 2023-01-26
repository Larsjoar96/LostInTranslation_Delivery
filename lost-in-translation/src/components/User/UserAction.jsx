const UserActions = () => { 
    const clickLogout = ({}) => {
       if(window.confirm("Are you sure?")){
        Logout();
       } ;
   }
    return (
        <ul>
            <li><button >Clear history</button></li>
            <li><button onClick={clickLogout}>Logout</button></li>
        </ul>
    )
}
export default UserActions