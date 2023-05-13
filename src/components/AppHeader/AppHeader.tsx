import { Btn } from 'components/Button/Button';
import { LangSwitcher } from 'components/LangSwittcher/LangSwitcher';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import handleLink from '../../utils/hadleLink';
import s from './AppHeader.module.scss';

const links = [
  { id: 1, title: 'Home', link: '/' },
  { id: 2, title: 'Main', link: 'main' },
  { id: 3, title: 'SignIn/SignUp', link: 'sign' },
];

export const AppHeader = () => {
  const [sticky, setSticky] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <header className={`${s.header} ${sticky ? s.sticky : ''}`}>
      <div className={`${s.wrapper} ${s.container}`}>
        <nav className={s.menu}>
          <ul className={s.menu__list}>
            {links.map(({ id, title, link }) => {
              return (
                <li className={s.list__item} key={id}>
                  <NavLink
                    end
                    className={({ isActive }) => handleLink(isActive, s, sticky)}
                    to={link}
                  >
                    {t(title)}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <LangSwitcher />
        <div className={s.btn__wrapper}>
          <Btn text={`${t('Sign in')}`} />
          <Btn text={`${t('Sign up')}`} />
        </div>
      </div>
    </header>
  );
};
