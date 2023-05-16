import { LangSwitcher } from 'components/LangSwittcher/LangSwitcher';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import handleLink from '../../utils/hadleLink';
import s from './AppHeader.module.scss';
import { auth } from '../../firebase/firebase';
import { signOut } from 'firebase/auth';
import { Btn } from '..';

const links = [
  { id: 1, title: 'Home', link: '/' },
  { id: 2, title: 'Main', link: 'main' },
];

export const AppHeader = () => {
  const [sticky, setSticky] = useState(false);
  const [user] = useAuthState(auth);
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
        <NavLink to={'/'} onClick={() => signOut(auth)}>
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
        {authButtons}
      </div>
    </header>
  );
};
