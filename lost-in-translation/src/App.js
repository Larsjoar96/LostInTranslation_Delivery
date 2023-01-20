import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import LoginPage from './views/LoginPage';
import TranslationPage from './views/TranslationPage';
import UserPage from './views/UserPage';
function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path = "/" element = {<LoginPage/>}/>
          <Route path = "/Translation" element = {<TranslationPage/>}/>
          <Route path = "/User" element = {<UserPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
