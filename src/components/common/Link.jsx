import React from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

export default function Link({
  to,
  href,
  isExternal = false,
  isDisabled = false,
  withoutUnderline = false,
  title,
  disabledTitle,
  children: content,
  ...props
}) {
  function onClick(e) {
    e.preventDefault();
  }
  return (
    <ChakraLink
      as={isExternal ? "a" : ReactRouterLink}
      to={isDisabled ? "" : to ?? ""}
      href={isExternal && !isDisabled ? href : undefined}
      onClick={isDisabled ? onClick : undefined}
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
