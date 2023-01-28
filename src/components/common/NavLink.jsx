import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";

// todo: NavLink styling
export default function NavLink({ to, children }) {
  return (
    <RouterNavLink
      to={to}
      style={({ isActive }) =>
        isActive ? { backgroundColor: "DarkGrey" } : undefined
      }
    >
      {children}
    </RouterNavLink>
  );
}
