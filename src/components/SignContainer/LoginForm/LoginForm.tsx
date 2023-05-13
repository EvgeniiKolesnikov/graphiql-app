import s from './LoginForm.module.scss';
import { TextInput, PasswordInput, Button, LoadingOverlay } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { auth } from '../../../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLogin } from '../../../hooks/auth/useLogin';
import { Navigate } from 'react-router-dom';
import { schema } from './schema';
import { Fragment, useEffect } from 'react';
import { notifications } from '@mantine/notifications';

interface IFormValues {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const [user] = useAuthState(auth);
  const { login, isLoading, error } = useLogin();
  const form = useForm({
    initialValues: { email: '', password: '' },
    validate: zodResolver(schema),
  });

  const onSubmit = (data: IFormValues) => {
    const { email, password } = data;
    login(email, password);
  };

  useEffect(() => {
    if (error) {
      notifications.show({
        title: 'Authentification error',
        message: error,
      });
    }
  }, [error]);

  if (user) {
    return <Navigate to="/main" />;
  }

  return (
    <Fragment>
      <form onSubmit={form.onSubmit(onSubmit)} className={s.form}>
        <fieldset className={s.inputs}>
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
        </fieldset>

        <Button color="grape" size="lg" type="submit" fullWidth uppercase>
          Submit
        </Button>
      </form>

      <LoadingOverlay
        visible={isLoading}
        loaderProps={{ size: 'lg', color: 'grape', variant: 'bars' }}
      />
    </Fragment>
  );
};
