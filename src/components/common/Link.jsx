import { Link as ChakraLink } from "@chakra-ui/react";
import React from "react";

export default function Link({ href, isExternal, children: content }) {
  return (
    <ChakraLink
      as="a"
      href={href}
      isExternal={isExternal}
      textDecoration="underline"
    >
      {content}
    </ChakraLink>
  );
}
