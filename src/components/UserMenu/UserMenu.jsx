//import { useDispatch } from 'react-redux';
//import { logOut } from 'redux/auth/operations';
//import { useAuth } from 'hooks';

export const UserMenu = () => {
  //const dispatch = useDispatch();
  //const { user } = useAuth();
  const user = { name: 'Victor' };
  return (
    <div>
      <p> Welcome, {user.name}</p>
      <button type="button" onClick={() => null}>
        {/* <button type="button" onClick={() => dispatch(logOut())}></button> */}
        Logout
      </button>
    </div>
  );
};
