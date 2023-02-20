import { Link as ChakraLink } from "@chakra-ui/react";
import React from "react";

export default function Link({
  href,
  isExternal = false,
  onClick,
  isDisabled = false,
  withoutUnderline = false,
  title,
  disabledTitle,
  children: content,
  ...props
}) {
  return (
    <ChakraLink
      as={isExternal ? "a" : undefined}
      href={isDisabled ? undefined : href}
      onClick={isDisabled ? undefined : onClick}
      isExternal={isExternal}
      textDecoration={withoutUnderline ? undefined : "underline"}
      _hover={{
        textDecoration: withoutUnderline ? undefined : "underline",
        cursor: isDisabled ? "not-allowed" : undefined,
      }}
      title={isDisabled ? disabledTitle : title}
      {...props}
    >
      {content}
    </ChakraLink>
  );
}
