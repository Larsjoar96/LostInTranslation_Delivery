import { useState } from "react"
import UserTranslationHistoryItem from "./UserTranslationHistoryItem"

const UserTranslationHistory = (history) => { 

    let [historyList, setHistoryList] = useState([])
    const translationHistory = historyList.map((history, index) => <UserTranslationHistory key={index + "  " + history}  alt ={history} />)
    console.log(translationHistory)
    console.log(history)
    console.log(historyList)
    return (
        <section>
        <h3>Your translation history</h3>
        <ul>
            {translationHistory}
            
        </ul>
        </section>
    )
}
export default UserTranslationHistory