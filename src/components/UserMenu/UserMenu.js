import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux"
import { logOut } from "../../redux/auth/operations";
import { Button, Text } from "@chakra-ui/react";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <Text fontWeight="700">Welcome, {user.name}</Text>
      <Button variant='link'color='white' onClick={() => {dispatch(logOut())}}>Logout</Button>
    </div>
  )
}