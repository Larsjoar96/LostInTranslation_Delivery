import UserTranslationHistoryItem from "./UserTranslationHistoryItem"

const UserTranslationHistory = ({translations}) => { 

    const translationHistory = translations.map(
         (translation, index ) => <UserTranslationHistoryItem key={ translation} order ={translation}  />
         )

    console.log(translationHistory)


    return (
        <section>
        <h3>Your translation history</h3>
        <ul>{translationHistory}</ul>
        </section>
    )
}
export default UserTranslationHistory