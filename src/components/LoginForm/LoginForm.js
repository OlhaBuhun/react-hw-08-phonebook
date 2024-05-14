import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Button, FormLabel, Input } from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(
      logIn({
        email: event.target[0].value,
        password: event.target[1].value,
      })
    );
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <FormLabel m="12px">
        Email
        <Input
          type="email"
          placeholder="email"
          variant="filled"
          bg="#f0eafb"
          boxShadow="dark-lg"
        />
      </FormLabel>
      <FormLabel m="12px">
        Password
        <Input
          type="password"
          placeholder="password"
          variant="filled"
          bg="#f0eafb"
          boxShadow="dark-lg"
        />
      </FormLabel>
      <Button
        type="submit"
        colorScheme="purple"
        variant="solid"
        size="sm"
        m="12px"
        _hover={{ bg: '#808000' }}
        _active={{
          bg: '#dddfe2',
          transform: 'scale(0.98)',
          borderColor: '#bec3c9',
        }}
        _focus={{
          boxShadow:
            '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
        }}
      >
        Log In
      </Button>
    </form>
  );
};
