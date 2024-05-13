// import { Box, Flex, Heading } from '@chakra-ui/react'
import { Box, Flex, Spacer } from "@chakra-ui/react";
import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useAuth } from "hooks/useAuth";

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Box bg='purple.500' w='100%'p={4} boxShadow='dark-lg' color='white'>
        <Flex alignItems="center" justifyContent="space-between">
          <Navigation />
          <Spacer />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Flex>
      </Box>
    </header>
  );
};