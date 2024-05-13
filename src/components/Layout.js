import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Box } from '@chakra-ui/react';

export const Layout = () => {
  return (
    <div>
      <Box pos='sticky' top='0'left='0' zIndex='999' >
        <AppBar />
      </Box>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};