import { AuthNav } from 'components/AuthNav/AuthNav';
import { Box } from 'components/Box/Box';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
//import { useSelector } from "react-redux";
//import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export const AppBar = () => {
  const {isLoggedIn} = useAuth();
  //const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Box as="header" display="flex" justifyContent="space-between">
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}       
    </Box>
  );
};
