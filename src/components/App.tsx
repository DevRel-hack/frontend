import './App.css';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { Login } from './pages/Login/Login';
import Layout from './ui/Layout/Layout';
import LayoutWithHeaderAndFooter from './ui/Layout/LayoutWithHeaderAndFooter';
import People from './pages/People/People';
import Events from './pages/Events/Events';
import Analytics from './pages/Analytics/Analytics';
import Sending from './pages/Sending/Sending';
import Profile from './pages/Profile/Profile';
import Helpers from './pages/Helpers/Helpers';
import { useGetAttributesQuery } from './pages/People/api/RTKQueryPeople';
import { useEffect } from 'react';
import { useAppDispatch } from '~/lib/hooks/reduxHooks';
import { setAttributes } from '~/store/slices/attributes';
import CreateEvent from './pages/CreateEvent/CreateEvent';

function App() {
  const dispatch = useAppDispatch();
  const { data, error } = useGetAttributesQuery(null);

  useEffect(() => {
    if (data) {
      dispatch(setAttributes(data));
    } else if (error) {
      alert('Произошла ошибка при попытке получить фильтры');
    }
  }, [data, error, dispatch]);

  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/dev-rel-me" element={<Outlet />}>
          <Route path="entry" element={<Layout />}>
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="main" element={<LayoutWithHeaderAndFooter />}>
            <Route path="people" element={<People />} />
            <Route path="events" element={<Events />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="sending" element={<Sending />} />
            <Route path="profile" element={<Profile />} />
            <Route path="addEvent" element={<CreateEvent />} />
            <Route index element={<Helpers />} />
          </Route>
          <Route index element={<Navigate to={'/dev-rel-me/entry/login'} />} />
        </Route>
        <Route path="*" element={<Navigate to={'/dev-rel-me/entry/login'} />} />
      </Routes>
    </>
  );
}

export default App;
