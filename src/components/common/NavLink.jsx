import { Center, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";

export default function NavLink({
  to,
  onClick,
  w = "6em",
  h = "3em",
  children,
  ...props
}) {
  // active/hover colours
  const color = useColorModeValue("alt.light", "alt.dark");
  const bgColor = useColorModeValue("alt.dark", "alt.light");

  return (
    <RouterNavLink to={to} onClick={onClick} {...props}>
      {({ isActive }) => (
        <Center
          w={w}
          h={h}
          color={isActive ? color : undefined}
          bgColor={isActive ? bgColor : undefined}
          _hover={{ color, bgColor }}
        >
          {children}
        </Center>
      )}
    </RouterNavLink>
  );
}
