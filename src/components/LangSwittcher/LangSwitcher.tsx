import { SegmentedControl } from '@mantine/core';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import s from './LangSwitcher.module.scss';

export const LangSwitcher = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  const translate = async (value: string) => {
    setLang(value);
    i18n.changeLanguage(lang === 'en' ? 'ru' : 'en');
  };

  return (
    <SegmentedControl
      className={s.switcher}
      value={lang}
      onChange={(value) => translate(value)}
      size="md"
      color="gray"
      transitionDuration={500}
      transitionTimingFunction="linear"
      data={[
        { label: `${t('English')}`, value: 'en' },
        { label: `${t('Russian')}`, value: 'ru' },
      ]}
    />
  );
};
