import { Text, VStack } from "@chakra-ui/react";
import React from "react";
import Link from "./Link";

export default function ErrorPage() {
  return (
    <VStack textAlign="center">
      <Text as="h1" data-testid="error" textColor="red">
        Something went wrong.
      </Text>
      <Link to="/">Home</Link>
      <Link
        isExternal
        href="https://github.com/kr-matthews/kr-matthews.github.io/issues"
      >
        Report issue on GitHub
      </Link>
    </VStack>
  );
}
