import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
//import { selectIsLoggedIn } from 'redux/auth/authSelectors';
//import { useSelector } from 'react-redux';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  //const isLoggedIn = useSelector(selectIsLoggedIn);
  const {isLoggedIn} = useAuth();
  //console.log(isLoggedIn);
  //console.log(isLoggedIn2);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};


