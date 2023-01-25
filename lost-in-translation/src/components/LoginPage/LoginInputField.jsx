import {useForm} from 'react-hook-form'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {loginUser} from '../../api/user'

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

    const onSubmit = async ({username}) => {
        const [error, user] = await loginUser(username);
        console.log('Error:', error);
        console.log('User:', user);
    }

    const [userName] = useState("")
    const navigate = useNavigate()

    function loginButton(){

        localStorage.setItem("userName", userName)

        navigate ("/Translation")
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
                {...register("userName", usernameConfig)}/>
                { errorMessage }
            </fieldset>
            <button type="submit" onClick={loginButton()}>Login</button>
        </form>

    </>
    )
}
export default LoginInputField;