import { Link as ChakraLink } from "@chakra-ui/react";
import React from "react";

export default function Link({
  href,
  isExternal = false,
  onClick,
  isDisabled = false,
  children: content,
  ...props
}) {
  return (
    <ChakraLink
      as={isExternal ? "a" : undefined}
      href={isDisabled ? undefined : href}
      onClick={isDisabled ? undefined : onClick}
      pointerEvents={isDisabled ? "none" : "auto"}
      isExternal={isExternal}
      textDecoration="underline"
      {...props}
    >
      {content}
    </ChakraLink>
  );
}
