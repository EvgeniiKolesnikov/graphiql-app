import s from './SignContainer.module.scss';
import { Container } from '@mantine/core';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { LoginForm } from './LoginForm/LoginForm';
import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const SignContainer = () => {
  const { state } = useLocation();
  const isRegister = state?.isRegister ?? true;
  const { t } = useTranslation();

  return (
    <Container size={'sm'} className={s.container}>
      {isRegister ? <RegisterForm /> : <LoginForm />}
      <Link to={'/sign'} state={{ isRegister: !isRegister }} className={s.link}>
        {isRegister ? t(`Already have an account?`) : t(`Don't have an account yet?`)}
      </Link>
    </Container>
  );
};
