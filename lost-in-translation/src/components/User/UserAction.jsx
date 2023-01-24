const UserActions = () => { 

    const clickLogout = () => {
        const doLogout = confirm("Are you sure?");
    }

    return (
        <ul>
            <li><button>Clear history</button></li>
            <li><button onClick={clickLogout}>Logout</button></li>
        </ul>
    )
}
export default UserActions