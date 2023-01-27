import {useForm} from 'react-hook-form'
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {loginUser} from '../../api/user'
import { saveStorage } from '../../utils/storage';
import { useUser } from '../../context/UserContext';
import { STORAGE_KEY_USER } from '../../const/storageKeys';

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
        console.log(user)
        if (user !== null){
            navigate("/translation")
        }
    }, [user, navigate])

    const onSubmit = async ({username}) => {
        const [error, userResponse] = await loginUser(username);
               
        saveStorage(STORAGE_KEY_USER, userResponse)
        if(userResponse !== null){
            setUser(userResponse)
           // console.log(userResponse)
            localStorage.setItem(STORAGE_KEY_USER, userResponse)
        }
        // loginButton();
    }



    //const [userName] = useState("")
    // function loginButton(){
        
    //     navigate ("/Translation")

    
    // }   

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
            <button type="submit" >Login</button>
        </form>

    </>
    )
}
export default LoginInputField;