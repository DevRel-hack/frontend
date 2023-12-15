import './App.css';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { Login } from './pages/Login/Login';
import Layout from './ui/Layout/Layout';
import LayoutWithHeaderAndFooter from './ui/Layout/LayoutWithHeaderAndFooter';

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/devRelMe" element={<Outlet />}>
          <Route path="entry" element={<Layout />}>
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="main" element={<LayoutWithHeaderAndFooter />} />
          <Route path="*" element={<Navigate to={'/devRelMe/entry/login'} />} />
        </Route>

        {/* <Route path="/login" element={<ProtectOfRoute Element={Login} />} /> */}
        {/* <Route path="/register" element={<ProtectOfRoute Element={Register} />} />
        <Route path="/change-password" element={<ProtectOfRoute Element={ChangePassword} />} />
        <Route path="/confirm-password" element={<ProtectOfRoute Element={ConfirmPassword} />} />
        <Route path="/" element={<ProtectOfRoute Element={AddHeader} onlyLoggedIn />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/vacancy" element={<Vacancy />} />
          <Route path="/create-vacancy" element={<CreateVacancy />} />
          <Route path="/favorite-candidates" element={<Favorite />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route index element={<Navigate to={'/candidates'} />} />
        </Route>
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
