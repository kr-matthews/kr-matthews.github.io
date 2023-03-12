import { Center, Spinner } from "@chakra-ui/react";
import React from "react";

export default function LoadingSpinner({ width, height }) {
  return (
    <Center w={width} h={height}>
      <Spinner size="xl" data-testid="loading" />
    </Center>
  );
}
