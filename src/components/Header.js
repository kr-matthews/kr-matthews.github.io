import { useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "./../images/website-logo.svg";
import { ReactComponent as OpenMenu } from "./../images/menu.svg";
import { ReactComponent as CloseMenu } from "./../images/close.svg";

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
        <Link to="/">
          <Logo className="icon" />
        </Link>
      </span>

      {/* Icon to toggle mobile menu; only visible on moble */}
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
                <Link to={`/${page.toLowerCase()}`}>{page}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
