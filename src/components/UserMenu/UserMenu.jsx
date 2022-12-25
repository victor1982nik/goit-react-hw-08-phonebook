import { useDispatch } from 'react-redux';
import { Box } from 'components/Box/Box';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box display="flex" alignItems="center" gridGap={3}>
      <p className={css.username}> Welcome, {user}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </Box>
  );
};
