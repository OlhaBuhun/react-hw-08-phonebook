import { Flex, Link, Spacer } from "@chakra-ui/react";
import { NavLink } from "react-router-dom"

export const AuthNav = () => {
  return (
    <div>
      {/* <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink> */}
      <Flex gap="30px">
        <Link
          as={NavLink}
          fontWeight="700"
          _active={{ color: '#dddfe2' }}
          to="/register"
        >
          Register
        </Link>
        <Spacer />
        <Link
          as={NavLink}
          fontWeight="700"
          _active={{ color: '#dddfe2' }}
          to="/login"
        >
          Log In
        </Link>
      </Flex>
    </div>
  );
};