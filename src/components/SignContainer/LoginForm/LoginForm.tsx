import { TextInput, PasswordInput, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { auth } from '../../../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLogin } from '../../../hooks/auth/useLogin';
import { Navigate } from 'react-router-dom';

interface IFormValues {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const [user] = useAuthState(auth);
  const { login, isLoading, error } = useLogin();
  const form = useForm({
    initialValues: { email: '', password: '' },
  });

  const onSubmit = (data: IFormValues) => {
    const { email, password } = data;
    login(email, password);
  };

  if (user) {
    return <Navigate to="/main" />;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <form onSubmit={form.onSubmit(onSubmit)}>
        <TextInput
          size="xl"
          placeholder="Your email"
          label="Email"
          {...form.getInputProps('email')}
        />
        <PasswordInput
          size="xl"
          placeholder="Your password"
          label="Password"
          {...form.getInputProps('password')}
        />
        <Button size="lg" type="submit" fullWidth uppercase variant="outline">
          Submit
        </Button>
      </form>
    </div>
  );
};
