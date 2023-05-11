import { Button } from '@mantine/core';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Spinner } from '..';
import Router from '../Router/Router';

const Component = () => {
  const { t, i18n } = useTranslation();

  const translate = async () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <>
      <h1 style={{ marginBottom: '5rem', fontSize: '5rem' }}>{t('Welcome to React')}</h1>;
      <Button onClick={translate}>Translate</Button>
    </>
  );
};

export const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Component />
      <Router />;
    </Suspense>
  );
};
