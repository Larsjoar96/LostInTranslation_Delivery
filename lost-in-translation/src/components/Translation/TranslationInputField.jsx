import {useForm} from 'react-hook-form'
    
    let imageArray = [];
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
            translateText(textArray);
        }
        function translateText(textArray)
        {
            console.log("yippi");
            for(let i = 0; i < textArray.length; i++)
            {
                textArray[i] = textArray[i].toLowerCase();
                if(textArray[i].match(/[a-z]/i))
                {
                    imageArray.push("/individial_signs/" + textArray[i]);
                }
            }
            console.log(imageArray);
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

        <fieldset>
    <h3>Translation goes here</h3>
    <image></image>
    </fieldset>
    </>
    )
}
export default TranslationInputField