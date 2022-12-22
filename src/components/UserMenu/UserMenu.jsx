import { useDispatch } from 'react-redux';
//import { logOut } from 'redux/auth/operations';
//import { useAuth } from 'hooks';

import { Box } from "components/Box/Box";
import { useSelector } from "react-redux";
import { selectUserName } from "redux/auth/authSelectors";
import { logOut } from 'redux/auth/authOperations';


export const UserMenu = () => {
  const dispatch = useDispatch();
  //const { user } = useAuth();
  const name = useSelector(selectUserName);
  
  return (
    <Box display="flex">
      <p> Welcome, {name}</p>

      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </Box>
  );
};
