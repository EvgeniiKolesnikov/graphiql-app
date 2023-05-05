import { NavLink } from "react-router-dom";
import handleActiveLink from '../../utils/hadleActiveLink';
import "./Header.scss";

const Header = () => {
  const links = [
    { id: 1, title: 'Welcome', link: '/' },
    { id: 2, title: 'Main', link: 'main' },
  ];

  return (
    <>
      <header className="header">
        <div className="container header__container">
          <nav className="menu">
            <ul className="menu__list">
              {links.map(({ id, title, link }) => {
                return (
                  <li className="menu__list-item" key={id}>
                    <NavLink
                      end
                      className={({isActive}) => handleActiveLink(isActive)}
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
