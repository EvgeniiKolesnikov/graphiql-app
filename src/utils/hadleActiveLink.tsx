const handleActiveLink = (active: boolean, s: CSSModuleClasses) =>
  active ? s.menu__link_active : s.menu__link;

export default handleActiveLink;
