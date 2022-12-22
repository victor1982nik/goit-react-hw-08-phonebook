import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshCurrentUser } from 'redux/auth/authOperations';

import { SharedLayout } from './SharedLayout/SharedLayout';
import { PhoneBook } from 'pages/PhoneBook';
import { Home } from 'pages/Home';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';

export function App() {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(refreshCurrentUser());
  }, [dispatch])
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contacts" element={<PhoneBook />} />
        </Route>
      </Routes>
    </div>
  );
}


