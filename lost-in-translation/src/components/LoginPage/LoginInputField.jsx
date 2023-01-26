import {useForm} from 'react-hook-form'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {loginUser} from '../../api/user'
import { useEffect } from 'react';
import { useUser } from '../../context/UserContext';

const usernameConfig = {
    required: true,
    minLength: 2
}

const LoginInputField = () => {
    const{
        register,
        handleSubmit,
        formState:{errors}
    } = useForm();

    const { user, setUser} = useUser()
    const navigate = useNavigate()

    useEffect(() => {
        console.log("brøs", user)
    }, [user])

    const onSubmit = async ({username}) => {
        console.log(username)
        const [error, userResponse] = await loginUser(username);
        console.log('Error:', error);
        console.log('User:', user);
        loginButton();
    }

    if(userResponse !== null){
        storageSave('Current-user', userResponse)
        setUser(userResponse)
    }
  
    //const [userName] = useState("")
    function loginButton(){
        
        navigate ("/Translation")

        //localStorage.setItem("userName", userName)
    }   

    const errorMessage = (() =>
    {
        if (!errors.username)
        {
           return null;
        }
        if(errors.username.type === 'required')
        {
            return <span>Username is required</span>;
        }
        if(errors.username.type === 'minLength')
        {
            return <span>Username requires 2 characters</span>;
        }
    })()

    return(

    <>
        <h2>Translation app login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <label htmlFor='username'>Username:</label>
                <input type="text"
                placeholder="Enter username" 
                {...register("username", usernameConfig)}/>
                { errorMessage }
            </fieldset>
            <button type="submit" onClick={loginButton()}>Login</button>
        </form>

    </>
    )
}
export default LoginInputField;