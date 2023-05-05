import { NavLink } from 'react-router-dom';
import handleActiveLink from '../../utils/hadleActiveLink';
import s from './Header.module.scss';

const Header = () => {
  const links = [
    { id: 1, title: 'Welcome', link: '/' },
    { id: 2, title: 'Main', link: 'main' },
  ];

  return (
    <>
      <header className={s.header}>
        <div className={s.container}>
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

export default Header;
