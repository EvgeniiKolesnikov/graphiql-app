import { TextInput, PasswordInput, Button, LoadingOverlay } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { schema } from './schema';
import { auth } from '../../../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import { useRegister } from '../../../hooks/auth/useRegister';
import s from './RegisterForm.module.scss';
import { Fragment, useEffect } from 'react';
import { notifications } from '@mantine/notifications';
import { useTranslation } from 'react-i18next';

interface IFormValues {
  login: string;
  password: string;
  repeatPassword: string;
  email: string;
}

export const RegisterForm = () => {
  const [user] = useAuthState(auth);
  const { register, isLoading, error } = useRegister();
  const { t } = useTranslation();

  const form = useForm({
    initialValues: { login: '', password: '', repeatPassword: '', email: '' },
    validate: zodResolver(schema),
  });

  const onSubmit = (data: IFormValues) => {
    const { login, email, password } = data;
    register(login, email, password);
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
    return <Navigate to="/main" replace />;
  }

  return (
    <Fragment>
      <form onSubmit={form.onSubmit(onSubmit)} className={s.form}>
        <fieldset className={s.inputs}>
          <TextInput size="xl" label={t('Login')} {...form.getInputProps('login')} />
          <TextInput size="xl" label={t('Email')} {...form.getInputProps('email')} />
          <PasswordInput size="xl" label={t('Password')} {...form.getInputProps('password')} />
          <PasswordInput
            size="xl"
            label={t('Repeat password')}
            {...form.getInputProps('repeatPassword')}
          />
        </fieldset>

        <Button color="grape" size="lg" type="submit" fullWidth uppercase>
          {t('Submit')}
        </Button>
      </form>

      <LoadingOverlay
        visible={isLoading}
        loaderProps={{ size: 'lg', color: 'grape', variant: 'bars' }}
      />
    </Fragment>
  );
};
