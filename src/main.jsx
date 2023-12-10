import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext.jsx';
import { NewsContextProvider } from './context/NewsContext.jsx';
import PetitionContextProvider from './context/PetitionContext.jsx';
import UserContextProvider, { UserContext } from './context/UserContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthContextProvider>
      <NewsContextProvider>
        <PetitionContextProvider>
          <UserContextProvider>
            <App />
          </UserContextProvider>
        </PetitionContextProvider>
      </NewsContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
