import { TextInput, PasswordInput, Button } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { schema } from './schema';
import { auth } from '../../../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import { useRegister } from '../../../hooks/auth/useRegister';

interface IFormValues {
  login: string;
  password: string;
  repeatPassword: string;
  email: string;
}

export const RegisterForm = () => {
  const [user] = useAuthState(auth);
  const { register, isLoading, error } = useRegister();
  const form = useForm({
    initialValues: { login: '', password: '', repeatPassword: '', email: '' },
    validate: zodResolver(schema),
  });

  const onSubmit = (data: IFormValues) => {
    const { login, email, password } = data;
    register(login, email, password);
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
          placeholder="Your login"
          label="Login"
          {...form.getInputProps('login')}
        />
        <PasswordInput
          size="xl"
          placeholder="Your password"
          label="Password"
          {...form.getInputProps('password')}
        />
        <PasswordInput
          size="xl"
          placeholder="Repeat your password"
          label="Repeat password"
          {...form.getInputProps('repeatPassword')}
        />
        <TextInput
          size="xl"
          placeholder="Your email"
          label="Email"
          {...form.getInputProps('email')}
        />
        <Button size="lg" type="submit" fullWidth uppercase variant="outline">
          Submit
        </Button>
      </form>
    </div>
  );
};
