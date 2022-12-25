import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
//import { selectIsLoggedIn } from 'redux/auth/authSelectors';
//import { useSelector } from 'react-redux';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  //const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && (
        <NavLink  to="/contacts">
          Contacts
        </NavLink>
      )} 
    </nav>
  );
};
