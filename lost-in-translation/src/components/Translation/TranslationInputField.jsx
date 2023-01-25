import {useForm} from 'react-hook-form'
const TranslationInputField = () => {

    const register = useForm()

    function translationButtonClicked(input){
        let textToTranslate = []
        textToTranslate = input
    }

    return(
    <>
    <form> 
    <input type="text"
        placeholder="Write here " 
          {...register("input")}  />
    <button onClick={translationButtonClicked (input)}>Translate </button>
    </form>
    </>
    )
}
export default TranslationInputField