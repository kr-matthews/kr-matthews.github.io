import { useState } from "react";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as OpenMenu } from "../../assets/menu.svg";
import { ReactComponent as CloseMenu } from "../../assets/close.svg";
import NavLink from "./NavLink";

export default function Header() {
  // pages which exist, to appear in navigation menu
  // uses lowercase of word for url
  const pages = ["Projects", "Blog", "Cubing", "Vancouver", "About"];

  //// these three are only needed on mobile (ie screen <= 600)
  // whether the mobile menu is expanded and visible
  const [isOpen, setIsOpen] = useState(false);
  // toggles the state of the mobile menu
  const toggle = () => setIsOpen((isOpen) => !isOpen);
  // close the mobile menu, regardless of its state
  const close = () => setIsOpen(false);

  return (
    <header>
      {/* Logo to navigate to home page */}
      <span className="icon-container home-option" onClick={close}>
        <NavLink to="/" end>
          <Logo className="icon" />
        </NavLink>
      </span>

      {/* Icon to toggle mobile menu; only visible on mobile */}
      <span className="icon-container toggle-option">
        {isOpen ? (
          <CloseMenu className="icon" onClick={toggle} />
        ) : (
          <OpenMenu className="icon" onClick={toggle} />
        )}
      </span>

      {/* navigation link for each page */}
      <nav>
        <ul className={isOpen ? "nav-options" : "nav-options hidden"}>
          {pages.map((page) => {
            return (
              <li className="option" onClick={close} key={page}>
                {/* assumes link will be lowercase version of name */}
                <NavLink to={`/${page.toLowerCase()}`}>{page}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
