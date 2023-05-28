import { Anchor, Text } from '@mantine/core';
import { IconBrandGithubFilled } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

import rss from 'assets/rss.svg';
import s from './AppFooter.module.scss';

const links = [
  {
    link: 'https://github.com/EvgeniiKolesnikov',
    label: 'Evgenii Kolesnikov',
  },
  {
    link: 'https://github.com/YanaPronko',
    label: 'Yana Pranko',
  },
  {
    link: 'https://github.com/bp26',
    label: 'Aliaksey Kashirsky',
  },
];

export const AppFooter = () => {
  const { t } = useTranslation();
  const items = links.map((link) => (
    <div className={s.link} key={link.label}>
      <Anchor<'a'>
        className={s.link}
        color="dimmed"
        href={link.link}
        target="_blank"
        size="sm"
        ml={'0.5rem'}
        fz={'1.6rem'}
      >
        <IconBrandGithubFilled href={link.link} />
        {t(link.label)}
      </Anchor>
    </div>
  ));
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <Text className={s.text} color="dimmed">
          © 2023. {t('All rights reserved')}.
        </Text>
        <div className={s.links__group}>{items}</div>
        <div className={s.link}>
          <Anchor<'a'>
            className={s.link}
            color="dimmed"
            href="https://rs.school/react"
            target="_blank"
            size="sm"
            ml={'0.5rem'}
            fz={'1.6rem'}
          >
            <img className={s.logo} src={rss} alt="RSSchool logo" width={50} height={30} />
          </Anchor>
        </div>
      </div>
    </footer>
  );
};
