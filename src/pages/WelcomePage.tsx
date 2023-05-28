import { useTranslation } from 'react-i18next';
import { Cards } from 'components';

export const WelcomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2 className="title">{t('About project and course')}</h2>
      <div className="description">
        {t(
          `The main goal of our project is to implement GraphQL playground. This goal has been achieved during the final task of RS School React cource.`
        )}
      </div>
      <h1 className="title">{t('Our team')}</h1>
      <Cards />
    </>
  );
};
