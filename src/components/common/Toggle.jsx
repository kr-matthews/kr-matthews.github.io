import { HStack, Switch } from "@chakra-ui/react";
import React from "react";

export default function Toggle({ onToggle, left, right, ...props }) {
  function onChange(e) {
    onToggle && onToggle(e.target.checked);
  }
  return (
    <HStack>
      {left}
      <Switch onChange={onChange} size="lg" colorScheme="red" {...props} />
      {right}
    </HStack>
  );
}
