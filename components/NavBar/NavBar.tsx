import style from "./NavBar.module.css";

import ActiveLink from "../ActiveLink/ActiveLink";

const NavBar = () => {
  const menuItems = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Contact",
      href: "/contact",
    },
    {
      text: "Pricing",
      href: "/pricing",
    },
  ];
  return (
    <div>
      <nav className={style["menu-container"]}>
        {menuItems.map(({ text, href }) => (
          <ActiveLink
            key={href}
            text={text}
            href={href}
          />
        ))}
      </nav>
    </div>
  );
};
export default NavBar;
