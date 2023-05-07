import z from 'zod';
import { TextInput, PasswordInput, Button, Container } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';

interface IFormValues {
  login: string;
  password: string;
  repeatPassword: string;
  email: string;
}

const schema = z
  .object({
    login: z
      .string()
      .min(1, 'Login is required')
      .min(3, 'Login should have more than 3 characters')
      .max(15, 'Login should not be longer than 10 characters'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password should have more than 8 characters')
      .max(15, 'Password should not be longer than 15 characters'),
    repeatPassword: z.string().min(1, 'You should repeat your password'),
    email: z.string().email('Invalid email').min(1, 'Email is required'),
  })
  .refine((data) => data.password === data.repeatPassword, {
    path: ['repeatPassword'],
    message: 'Passwords do not match',
  });

export const RegisterForm = () => {
  const form = useForm({
    initialValues: { login: '', password: '', repeatPassword: '', email: '' },
    validate: zodResolver(schema),
  });

  const onSubmit = (data: IFormValues) => {
    console.log(data);
  };

  return (
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
  );
};
