import s from './DocsButton.module.scss';
import { Loader } from '@mantine/core';
import { Arrow } from 'components';
import { useTranslation } from 'react-i18next';

interface DocsButtonProps {
  onClick?: () => void;
  suspense: boolean;
}

export const DocsButton = ({ onClick, suspense }: DocsButtonProps) => {
  const { t } = useTranslation();

  return (
    <button className={s.button} onClick={onClick}>
      {suspense ? <Loader color="grape" size="sm" variant="bars" /> : <Arrow />}
      {t('Docs')}
    </button>
  );
};
