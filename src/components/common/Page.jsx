import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import Footer, { footerHeight } from "./Footer";
import Header, { headerHeight } from "./Header";

export default function Page({
  withoutHeader = false,
  withoutFooter = false,
  children: content,
}) {
  return (
    <VStack spacing={0} overflow="hidden">
      {!withoutHeader && <Header />}
      <Box
        w="100vw"
        h={`calc(100vh - ${withoutHeader ? "0em" : headerHeight} - ${
          withoutFooter ? "0em" : footerHeight
        })`}
      >
        {content}
      </Box>
      {!withoutFooter && <Footer />}
    </VStack>
  );
}

export function NarrowContent({ withAlwaysScroll = false, children: content }) {
  return (
    <Box
      px="4em"
      pb="3em"
      w="100%"
      h="100%"
      overflowY={withAlwaysScroll ? "scroll" : "auto"}
    >
      <Box maxW="950px" mx="auto">
        {content}
      </Box>
    </Box>
  );
}

export function WideContent({ withAlwaysScroll = false, children: content }) {
  return (
    <Box
      px="4em"
      pb="3em"
      w="100%"
      h="100%"
      overflowY={withAlwaysScroll ? "scroll" : "auto"}
    >
      {content}
    </Box>
  );
}
