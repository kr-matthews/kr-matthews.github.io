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
        overflowY="auto"
        w="100vw"
        maxH={`calc(100vh - ${withoutHeader ? "0em" : headerHeight} - ${
          withoutFooter ? "0em" : footerHeight
        })`}
      >
        {content}
      </Box>
      {!withoutFooter && <Footer />}
    </VStack>
  );
}

export function NarrowContent({ children: content }) {
  return (
    <Box px="4em" pb="3em" maxW="1000px" mx="auto">
      {content}
    </Box>
  );
}

export function WideContent({ children: content }) {
  return (
    <Box px="4em" pb="3em" w="100%">
      {content}
    </Box>
  );
}
