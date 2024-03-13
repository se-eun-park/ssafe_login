import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '@pages/HomePage';
import SignupPage from '@pages/SignupPage';
import SigninPage from '@pages/SigninPage';
import FormPage from '@pages/FormPage';
import PrivateRoutes from '@utils/PrivateRoutes';
import PublicRoutes from '@utils/PublicRoutes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<PublicRoutes />}>
          <Route path="signup" element={<SignupPage />} />
          <Route path="signin" element={<SigninPage />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path="form" element={<FormPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
