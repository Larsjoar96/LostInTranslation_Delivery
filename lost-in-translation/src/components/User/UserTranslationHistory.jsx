import UserTranslationHistoryItem from "./UserTranslationHistoryItem"

const UserTranslationHistory = ({translations}) => { 

    const translationHistory = translations.map(
         (translation, index ) => <UserTranslationHistoryItem key={ index + '-'+ translation} translation = {translation}  />
         )

    return (
        <section>
        <h3>Your translation history</h3>
        <ul>{renderLastTen(translationHistory)}</ul>
        </section>
    )
}
const renderLastTen = (translationHistory) =>
{
    const newArray = []
        for(let i = 0; i <= 10; i++)
        {
            newArray.push(translationHistory[translationHistory.length-i])
        }
    return newArray;

}
export default UserTranslationHistory