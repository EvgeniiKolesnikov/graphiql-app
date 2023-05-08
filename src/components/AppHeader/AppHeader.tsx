import { Btn } from 'components/Button/Button';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import handleActiveLink from '../../utils/hadleActiveLink';
import s from './AppHeader.module.scss';

const links = [
  { id: 1, title: 'Welcome', link: '/' },
  { id: 2, title: 'Main', link: 'main' },
];

export const AppHeader = () => {
  const [sticky, setSticky] = useState(false);
  console.log(sticky);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };
    console.log(window.scrollY);
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
                    className={({ isActive }) => handleActiveLink(isActive, s)}
                    to={link}
                  >
                    {title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className={s.btn__wrapper}>
          <Btn text={'Sign in'} />
          <Btn text={'Sign up'} />
        </div>
      </div>
    </header>
  );
};
