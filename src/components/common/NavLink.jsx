import { Center } from "@chakra-ui/react";
import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";

// todo: NavLink styling
export default function NavLink({ to, children }) {
  return (
    <RouterNavLink
      to={to}
      style={({ isActive, colorMode }) =>
        isActive
          ? { backgroundColor: colorMode === "dark" ? "Red" : "Green" } // not working
          : undefined
      }
    >
      <Center width="6em" height="3em">
        {children}
      </Center>
    </RouterNavLink>
  );
}
