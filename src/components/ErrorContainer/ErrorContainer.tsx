import s from './ErrorContainer.module.scss';
import { useTranslation } from 'react-i18next';
import error from '../../assets/error.svg';

export const ErrorContainer = () => {
  const { t } = useTranslation();
  return (
    <div className={s.container}>
      <img width={'50%'} className={s.image} src={error} alt="error image" />
      <span className={s.text}>{t('Error')}</span>
    </div>
  );
};
