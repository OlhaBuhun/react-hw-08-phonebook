import { Flex, Link, Spacer } from "@chakra-ui/react";
import { useAuth } from "hooks/useAuth"
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Flex gap="30px">
        {/* <NavLink to="/">Home</NavLink> */}
        <Link
          as={NavLink}
          fontWeight="700"
          _active={{ color: '#dddfe2' }}
          to="/"
        >
          Home
        </Link>
        <Spacer />
        {isLoggedIn && (
          <Link
            as={NavLink}
            fontWeight="700"
            _active={{ color: '#dddfe2' }}
            to="/contacts"
          >
            Contacts
          </Link>
        )}
      </Flex>
    </nav>
  );
};