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
        maxW="100vw"
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
