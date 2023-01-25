import {useForm} from 'react-hook-form'
import {translateText} from './TranslationOutput'

    const translationConfig = {
        required: true,
    }
    
    const TranslationInputField = () => {
        const{
            register,
            handleSubmit,
            formState:{errors}
        } = useForm();
    
        const onSubmit = (data) => {
            const textArray = data.translation.split("");
            console.log(textArray);
            //translateText(textArray);
        }
    
        const errorMessage = (() =>
        {
            if (!errors.translation)
            {
               return null;
            }
            if(errors.translation.type === 'required')
            {
                return <span>No text found</span>;
            }
        })()

    return(
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <label htmlFor='translation'>Translation:</label>
                <input type="text"
                placeholder="Enter text to translate" 
                {...register("translation", translationConfig)}/>
                { errorMessage }
            </fieldset>
            <button type="submit">Translate</button>
        </form>
    </>
    )
}
export default TranslationInputField