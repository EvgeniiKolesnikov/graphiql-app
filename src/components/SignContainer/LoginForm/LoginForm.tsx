import z from 'zod';
import { TextInput, PasswordInput, Button } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';

interface IFormValues {
  login: string;
  password: string;
}

const schema = z.object({
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
});

export const LoginForm = () => {
  const form = useForm({
    initialValues: { login: '', password: '' },
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
      <Button size="lg" type="submit" fullWidth uppercase variant="outline">
        Submit
      </Button>
    </form>
  );
};
