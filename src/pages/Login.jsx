import { LoginForm } from 'components/LoginForm/LoginForm';
import { Text } from '@chakra-ui/react';

export default function Login() {
  return (
    <>
      <Text fontSize={20} fontWeight={600} mb={8} textAlign="center">
        Страница логина
      </Text>
      <LoginForm />
    </>
  );
}
