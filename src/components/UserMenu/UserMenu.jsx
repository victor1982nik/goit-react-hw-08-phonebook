import { useDispatch } from 'react-redux';
import { Box } from "components/Box/Box";
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
//import { useSelector } from "react-redux";
//import { selectUserName } from "redux/auth/authSelectors";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  
  //const name = useSelector(selectUserName);
  
  return (
    <Box display="flex">
      <p> Welcome, {user}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </Box>
  );
};
