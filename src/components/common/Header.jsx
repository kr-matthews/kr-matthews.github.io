import { useEffect, useState } from "react";
import NavLink from "./NavLink";
import {
  Box,
  Center,
  HStack,
  Image,
  Spacer,
  useColorMode,
  useColorModeValue,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import Toggle from "./Toggle";
import logoIcon from "../../assets/logo.svg";
import menuIcon from "../../assets/menu.svg";
import closeIcon from "../../assets/close.svg";
import sunIcon from "../../assets/sun.svg";
import moonIcon from "../../assets/moon.svg";
import Link from "./Link";

export const headerHeight = "3em";

// assumes links are lower-case versions
const navOptions = ["Projects", "Blog", "Cubing", "Vancouver", "About"];
const navOptionCount = navOptions.length;
const navOptionWidth = 6; // in em
const sideWidths = 4.5; // in em

export default function Header() {
  const [isScreenWide] = useMediaQuery(
    // nav links + sides + buffer (scroll-bar, spacing, etc)
    `(min-width: ${navOptionCount * navOptionWidth + 2 * sideWidths + 0.4}em)`
  );

  //// these three are only needed on small screens

  // whether the mobile menu is expanded and visible
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggle = () => setIsMobileMenuOpen((isOpen) => !isOpen);
  const close = () => setIsMobileMenuOpen(false);
  const menuDisplayIcon = isMobileMenuOpen ? closeIcon : menuIcon;

  // close the menu when it's no longer part of the page
  useEffect(() => {
    if (!isScreenWide) close();
  }, [isScreenWide]);

  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("alt.light", "alt.dark");
  const borderColor = useColorModeValue("alt.dark", "alt.light");
  const themeIcon = useColorModeValue(sunIcon, moonIcon);

  return (
    <Box w="100vw" borderBottom="1px" borderColor={borderColor}>
      <HStack spacing={0} h={headerHeight} bgColor={bgColor}>
        <Center px="0.5em" w={`${sideWidths}em`}>
          <Image src={logoIcon} h="2em" />
        </Center>

        <Spacer />

        {isScreenWide ? (
          <WideNavOptions />
        ) : (
          <Link onClick={toggle}>
            <Image src={menuDisplayIcon} h="2em" />
          </Link>
        )}

        <Spacer />

        <HStack spacing="0.1em" w={`${sideWidths}em`}>
          <Image src={themeIcon} h="1.5em" />
          <Toggle isChecked={colorMode === "dark"} onToggle={toggleColorMode} />
        </HStack>
      </HStack>

      {!isScreenWide && isMobileMenuOpen && (
        <NarrowNavOptions
          close={close}
          bgColor={bgColor}
          borderColor={borderColor}
        />
      )}
    </Box>
  );
}

function WideNavOptions() {
  return (
    <HStack spacing="1px">
      {navOptions.map((navOption) => (
        <NavLink
          key={navOption}
          to={navOption.toLowerCase()}
          w={navOptionWidth + "em"}
        >
          {navOption}
        </NavLink>
      ))}
    </HStack>
  );
}

function NarrowNavOptions({ close, bgColor, borderColor }) {
  return (
    <VStack
      spacing="1px"
      position="absolute"
      bgColor={bgColor}
      w="100vw"
      borderBottom="1px"
      borderColor={borderColor}
    >
      {navOptions.map((navOption) => (
        <NavLink
          key={navOption}
          to={navOption.toLowerCase()}
          onClick={close}
          w={navOptionWidth + "em"}
        >
          {navOption}
        </NavLink>
      ))}
    </VStack>
  );
}
