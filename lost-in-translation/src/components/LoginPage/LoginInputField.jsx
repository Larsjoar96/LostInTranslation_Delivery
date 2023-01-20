import {useForm} from 'react-hook-form'

const usernameConfig = {
    required: true
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
    return(
    <>
        <h2>Translation app login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <label htmlFor='username'>Username:</label>
                <input type="text"{...register("username", usernameConfig)}/>
            </fieldset>
            <button type="submit">Login</button>
        </form>
    </>
    )
}
export default LoginInputField;