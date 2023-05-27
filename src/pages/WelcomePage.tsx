import { useTranslation } from 'react-i18next';
import { Cards } from 'components';

export const WelcomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2 className="title">{t('About project and course')}</h2>
      <div className="description">{t('Main goal.')}</div>
      <h1 className="title">{t('Our team')}</h1>
      <Cards />
    </>
  );
};
