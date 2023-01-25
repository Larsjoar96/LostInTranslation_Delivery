const TranslationOutputField = () => {
 
let imageArray = [];
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
    return(
    <>
    <fieldset>
    <h3>Translation goes here</h3>
    {/* <image><imageArray/></image> */}
    </fieldset>
    </>
    )
}
export default TranslationOutputField