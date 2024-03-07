import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '@pages/HomePage';
import SignupPage from '@pages/SignupPage';
import SigninPage from '@pages/SigninPage';
import FormPage from '@pages/FormPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
