import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/auth/useAuth';
import { logout } from '../../firebase/firebase';
import handleLink from '../../utils/hadleLink';
import { Btn, LangSwitcher } from 'components';

import s from './AppHeader.module.scss';

const links = [
  { id: 1, title: 'Home', link: '/' },
  { id: 2, title: 'Main', link: 'main' },
];

export const AppHeader = () => {
  const [sticky, setSticky] = useState(false);
  const { user } = useAuth();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  let authButtons;
  if (!user) {
    authButtons = (
      <div className={s.btn__wrapper}>
        <NavLink to={'/sign'} state={{ isRegister: true }}>
          <Btn text={t('Sign up')} />
        </NavLink>
        <NavLink to={'/sign'} state={{ isRegister: false }}>
          <Btn text={t('Sign in')} />
        </NavLink>
      </div>
    );
  } else {
    authButtons = (
      <div className={s.btn__wrapper}>
        <span className={s.email} title={user.email || ''}>
          {user.email}
        </span>
        <NavLink className={s.link} to={'/'} onClick={() => logout()}>
          <Btn text={t('Sign out')} />
        </NavLink>
      </div>
    );
  }

  return (
    <header className={`${s.header} ${sticky ? s.sticky : ''}`}>
      <div className={`${s.wrapper} ${s.container}`}>
        <nav className={s.menu}>
          <ul className={s.menu__list}>
            {links.map(({ id, title, link }) => {
              if (title === 'Main' && !user) {
                return null;
              } else {
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
              }
            })}
          </ul>
        </nav>
        <LangSwitcher />
        {authButtons}
      </div>
    </header>
  );
};
