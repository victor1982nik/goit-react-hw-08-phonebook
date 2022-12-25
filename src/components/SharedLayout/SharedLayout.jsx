import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from 'components/AppBar/AppBar';
import { Box } from 'components/Box/Box';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <Box maxWidth="960px" m="0 auto" p="0 16px">
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </Box>
  );
};
