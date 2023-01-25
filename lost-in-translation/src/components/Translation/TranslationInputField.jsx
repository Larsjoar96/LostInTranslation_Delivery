import { useState } from 'react';
import {useForm} from 'react-hook-form'
    const translationConfig = {
        required: true,
    }
    const TranslationInputField = () => {
        let [imageArray,setImageArray] = useState([]);
        const translation = imageArray.map((image,index)=> <img src={require(`../signs/${image}.png`)} key={index} alt="sign"/>)
        const{
            register,
            handleSubmit,
            formState:{errors}
        } = useForm();
        const onSubmit = (data) => {
            const textArray = data.translation.split("");
            //console.log(textArray);
            translateText(textArray);
        }
        function translateText(textArray)
        {
            imageArray.length = 0;
            for(let i = 0; i < textArray.length; i++)
            {
                textArray[i] = textArray[i].toLowerCase();
                if(textArray[i].match(/[a-z]/i))
                {
                    imageArray.push(textArray[i]);
                }
            }
            //console.log(imageArray);
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
    <h3>Translation goes here</h3>
        {translation}
    </>
    )
}
export default TranslationInputField