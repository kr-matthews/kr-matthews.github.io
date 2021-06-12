import { useState } from 'react'
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from './../images/website-logo.svg';
import { ReactComponent as OpenMenu } from './../images/menu.svg';
import { ReactComponent as CloseMenu } from './../images/close.svg';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  return (
    <header>

      <span className="icon-container home-option" onClick={close}>
        <Link to="/">
          <Logo className="icon" />
        </Link>
      </span>

      <span className="icon-container toggle-option">
        {isOpen ?
          <CloseMenu className="icon" onClick={handleClick} /> :
          <OpenMenu className="icon" onClick={handleClick} />}
      </span>

      <nav>
        <ul className={isOpen ? "nav-options" : "nav-options hidden"}>

          <li className="option" onClick={close}>
            <Link to="/projects">
              Projects
            </Link>
          </li>
          <li className="option" onClick={close}>
            <Link to="/blog">
              Blog
            </Link>
          </li>
          <li className="option" onClick={close}>
            <Link to="/notes">
              Notes
            </Link>
          </li> {/*
          <li className="option" onClick={close}>
            <Link to="/books">
              Books
            </Link>
          </li> */}
          <li className="option" onClick={close}>
            <Link to="/about">
              About
            </Link>
          </li>

        </ul>
      </nav>

    </header>
  )
}

export default Header;
