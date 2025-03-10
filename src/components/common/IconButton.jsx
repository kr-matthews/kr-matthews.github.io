import React from "react";
import {
  Center,
  IconButton as ChakraIconButton,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

export default function IconButton({
  icon,
  onClick,
  href,
  isDisabled = false,
  title,
  disabledTitle,
  alt = "icon",
}) {
  const bgColor = useColorModeValue("bg.light", "bg.dark");
  const borderColor = useColorModeValue("alt.dark", "alt.light");

  return (
    <ChakraIconButton
      bgColor={bgColor}
      borderColor={borderColor}
      borderWidth="2px"
      title={isDisabled ? disabledTitle : title}
      onClick={onClick}
      disabled={isDisabled}
    >
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          to=""
          style={{ width: "100%", height: "100%" }}
        >
          <Center h="100%" w="100%">
            <Image src={icon} alt={alt} maxH="80%" w="80%" />
            {/* <Image src={altLinkIcon} /> */}
          </Center>
        </a>
      ) : (
        <Center h="100%" w="100%">
          <Image src={icon} alt={alt} maxH="80%" w="80%" />
          {/* <Image src={altLinkIcon} /> */}
        </Center>
      )}
    </ChakraIconButton>
  );
  //   <ChakraLink
  //     as={isExternal ? "a" : ReactRouterLink}
  //     to={isDisabled ? "" : to ?? ""}
  //     href={isExternal && !isDisabled ? href : undefined}
  //     onClick={isDisabled ? onClick : undefined}
  //     isExternal={isExternal}
  //     textDecoration={withoutUnderline ? undefined : "underline"}
  //     _hover={{
  //       textDecoration: withoutUnderline ? undefined : "underline",
  //       cursor: isDisabled ? "not-allowed" : undefined,
  //     }}
  //     title={isDisabled ? disabledTitle : title}
  //     {...props}
  //   >
  //     {content}
  //   </ChakraLink>
  // );
}
