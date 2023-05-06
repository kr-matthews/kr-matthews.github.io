import { Center, CircularProgress } from "@chakra-ui/react";
import React from "react";

export default function LoadingSpinner({ width, height }) {
  return (
    <Center w={width} h={height}>
      <CircularProgress isIndeterminate size="90px" color="orange" />
    </Center>
  );
}
