import { NavLink } from 'react-router-dom';
import handleActiveLink from '../../utils/hadleActiveLink';
import s from './AppHeader.module.scss';

const links = [
  { id: 1, title: 'Welcome', link: '/' },
  { id: 2, title: 'Main', link: 'main' },
  { id: 3, title: 'SignIn/SignUp', link: 'sign' },
];

export const AppHeader = () => {
  return (
    <>
      <header className={s.header}>
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
        </div>
      </header>
    </>
  );
};
