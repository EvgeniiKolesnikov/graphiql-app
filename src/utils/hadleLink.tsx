const handleLink = (active: boolean, s: CSSModuleClasses, sticky: boolean) => {
  if (active) {
    return `${s.menu__link} ${s.menu__link_active}`;
  } else if (sticky) {
    return `${s.menu__link} ${s.menu__link_sticky}`;
  } else {
    return `${s.menu__link}`;
  }
};

export default handleLink;
