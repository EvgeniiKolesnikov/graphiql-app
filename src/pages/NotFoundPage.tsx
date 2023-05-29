import notFound from 'assets/notFound.jpg';
import { useTranslation } from 'react-i18next';

export const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <img src={notFound} alt="404 image" className="notFound" />
      <h1 className="title">{t('Not Found')}</h1>
    </>
  );
};
