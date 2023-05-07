import { Container, Button } from '@mantine/core';
import { useState } from 'react';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { LoginForm } from './LoginForm/LoginForm';

export const SignContainer = () => {
  const [isRegister, setMode] = useState(true);
  return (
    <Container size={'sm'}>
      {isRegister ? <RegisterForm /> : <LoginForm />}
      <Button size="lg" fullWidth onClick={() => setMode(!isRegister)}>
        Change
      </Button>
    </Container>
  );
};
