import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
//import css from './LoginForm.module.css';
import { Button, Text, Box } from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const form = e.target;

    dispatch(
      logIn({
        email: email.value,
        password: password.value,
      })
    );
    form.reset();
  };
  return (
    <Box width="300px" ml="auto" mr="auto">
      <form onSubmit={handleSubmit}>
        <Text
          as="label"
          display="flex"
          flexDirection="column"
          mb="16px"
          fontWeight={500}
        >
          Email
          <Text
            as="input"
            border="1px"
            borderRadius={4}
            p={1}
            placeholder="yourmail@mail.com"
            type="email"
            name="email"
          />
        </Text>
        <Text
          as="label"
          display="flex"
          flexDirection="column"
          mb="16px"
          fontWeight={500}
        >
          Password
          <Text
            as="input"
            border="1px"
            borderRadius={4}
            p={1}
            placeholder="your password"
            type="password"
            name="password"
          />
        </Text>
        <Button
          colorScheme="teal"
          _hover={{
            background: 'green',
            color: 'teal.500',
          }}
          type="submit"
        >
          Login
        </Button>
      </form>
    </Box>
  );
};
