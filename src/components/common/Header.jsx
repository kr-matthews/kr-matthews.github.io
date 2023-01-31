import { useState } from "react";
import NavLink from "./NavLink";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as OpenMenu } from "../../assets/menu.svg";
import { ReactComponent as CloseMenu } from "../../assets/close.svg";
import {
  Box,
  Center,
  HStack,
  Image,
  Spacer,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import Toggle from "./Toggle";
import sunIcon from "../../assets/sun.svg";
import moonIcon from "../../assets/moon.svg";
import logoIcon from "../../assets/logo.svg";

// assumes links are lower-case versions
const navOptions = ["Projects", "Blog", "Cubing", "Vancouver", "About"];
const navOptionCount = navOptions.length;
const navOptionWidth = 6; // in em
const sideWidths = 9; // in em

export default function Header() {
  const [isScreenWide] = useMediaQuery(
    `(min-width: ${navOptionCount * navOptionWidth + 2 * sideWidths}em)`
  );

  //// these three are only needed on mobile (ie screen <= 600)
  // whether the mobile menu is expanded and visible
  const [isOpen, setIsOpen] = useState(false);
  // toggles the state of the mobile menu
  const toggle = () => setIsOpen((isOpen) => !isOpen);
  // close the mobile menu, regardless of its state
  const close = () => setIsOpen(false);

  // theme (light vs dark)
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack spacing={0} height="3em" bgColor="DarkGrey">
      <Box px="0.5em" width={`${sideWidths}em`}>
        <Image src={logoIcon} height="2em" />
      </Box>
      <Spacer />
      {isScreenWide &&
        navOptions.map((navOption) => (
          <NavLink key={navOption} to={navOption.toLowerCase()}>
            {navOption}
          </NavLink>
        ))}
      <Spacer />
      <Center width={`${sideWidths}em`}>
        <Toggle
          isChecked={colorMode === "dark"}
          onToggle={toggleColorMode}
          left={<Image src={sunIcon} height="2em" />}
          right={<Image src={moonIcon} height="2em" />}
        />
      </Center>
    </HStack>
  );

  // todo
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
          {navOptions.map((page) => {
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
