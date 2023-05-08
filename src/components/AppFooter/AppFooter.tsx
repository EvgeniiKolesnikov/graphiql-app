import { Anchor, Text } from '@mantine/core';
import { IconBrandGithubFilled } from '@tabler/icons-react';
import rss from 'assets/rss.svg';
import s from './AppFooter.module.scss';

const links = [
  {
    link: 'https://github.com/EvgeniiKolesnikov',
    label: 'Evgenii Kolesnikov',
  },
  {
    link: 'https://github.com/EvgeniiKolesnikov',
    label: 'Yana Pranko',
  },
  {
    link: 'https://github.com/EvgeniiKolesnikov',
    label: 'Aliaksey Kashirsky',
  },
];

export const AppFooter = () => {
  const items = links.map((link) => (
    <div className={s.link} key={link.label}>
      <IconBrandGithubFilled href={link.link} />
      <Anchor<'a'>
        className={s.link}
        color="dimmed"
        href={link.link}
        onClick={(event) => event.preventDefault()}
        size="sm"
        ml={'0.5rem'}
        fz={'1.6rem'}
      >
        {link.label}
      </Anchor>
    </div>
  ));
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.inner}>
          <Text className={s.text} color="dimmed">
            © 2023. All rights reserved.
          </Text>
          <div className={s.links__group}>
            {items}
            <div className={s.link}>
              <img className={s.logo} src={rss} alt="RSSchool logo" width={50} height={30} />
              <Anchor<'a'>
                className={s.link}
                color="dimmed"
                href="https://rs.school/react"
                onClick={(event) => event.preventDefault()}
                size="sm"
                fz={'1.6rem'}
              >
                RS SCHOOL
              </Anchor>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
