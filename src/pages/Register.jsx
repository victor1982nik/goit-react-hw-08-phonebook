import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Text } from '@chakra-ui/react';

export default function Register() {
  return (
    <>
      <Text fontSize={20} fontWeight={600} mb={8} textAlign="center">
        Страница регистрации
      </Text>
      <RegisterForm />
    </>
  );
}
