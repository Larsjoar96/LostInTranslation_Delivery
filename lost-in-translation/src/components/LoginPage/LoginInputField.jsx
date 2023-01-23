import {useForm} from 'react-hook-form'

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

    const onSubmit = (data) => {
        console.log(data);
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
            <button type="submit">Login</button>
        </form>

    </>
    )
}
export default LoginInputField;