import BasicNeedsPage from '../Pages/BasicNeeds/BasicNeeds';
import ChildrenPage from '../Pages/Children/Children';
import EnterprisesPage from '../Pages/Enterprises/Enterprises';
import HigherEdPage from '../Pages/HigherEd/HigherEd';
import K12Page from '../Pages/K12/K12';
import LogInPage from '../Pages/LogIn/LogIn';
import ParentPage from '../Pages/Parents/Parents';
import HomePage from './../Pages/Home/Home';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpPage from './../Pages/SignUp/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />{' '}
        <Route path="/ChildrenPage" element={<ChildrenPage />} />{' '}
        <Route path="/ParentPage" element={<ParentPage />} />{' '}
        <Route path="/BasicNeedsPage" element={<BasicNeedsPage />} />{' '}
        <Route path="/K12Page" element={<K12Page />} />{' '}
        <Route path="/HigherEdPage" element={<HigherEdPage />} />{' '}
        <Route path="/EnterprisesPage" element={<EnterprisesPage />} />{' '}
        <Route path="/LogInPage" element={<LogInPage />} />{' '}
        <Route path="/SignUpPage" element={<SignUpPage />} />{' '}
      </Routes>{' '}
    </BrowserRouter>
  );
}

export default App;
