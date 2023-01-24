const UserTranslationHistory = ({histories}) => { 

    const historyList = histories.map((history, index) => <UserTranslationHistory key={index + "  " + history} item={history} />)

    return (
        <section>
        <h3>Your translation history</h3>
        <ul>
            {historyList}
        </ul>
        </section>
    )
}
export default UserTranslationHistory