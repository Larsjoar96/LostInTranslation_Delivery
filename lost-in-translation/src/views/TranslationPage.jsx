import TranslationInputField from "../components/Translation/TranslationInputField";
import TranslationOutputField from "../components/Translation/TranslationOutput";
import withAuth from "../hoc/withAuth";

const TranslationPage = () => {
    return (
        <>
       <h1>Translation</h1>
       <TranslationInputField/>
        <p></p>
       <TranslationOutputField/>
        </>
    )
}
export default withAuth(TranslationPage);