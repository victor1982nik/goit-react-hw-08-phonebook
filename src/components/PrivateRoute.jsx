import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
//import { selectIsLoggedIn } from 'redux/auth/authSelectors';
//import { useSelector } from 'react-redux';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    //const isLoggedIn = useSelector(selectIsLoggedIn);
    const {isLoggedIn} = useAuth();    
    
    const shouldRedirect = !isLoggedIn ;
    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
  };