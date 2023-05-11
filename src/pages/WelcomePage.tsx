import { useTranslation } from 'react-i18next';
import { Cards } from 'components/Cards/Cards';

export const WelcomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="title">{t('Our team')}</h1>
      <Cards />
    </>
  );
};
