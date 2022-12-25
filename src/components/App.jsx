import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshCurrentUser } from 'redux/auth/authOperations';

import { SharedLayout } from './SharedLayout/SharedLayout';
import { PhoneBook } from 'pages/PhoneBook';
import { Home } from 'pages/Home';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useAuth } from 'hooks/useAuth';

export function App() {
  const {isRefreshing} = useAuth();
  const dispatch = useDispatch();
  //console.log(isRefreshing);
  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (!isRefreshing &&(
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<PhoneBook />} />
            }
          />
        </Route>
      </Routes>
    </div>
    )
  );
}
