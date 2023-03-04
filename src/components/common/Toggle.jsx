import { HStack, Switch } from "@chakra-ui/react";
import React from "react";

export default function Toggle({ onToggle, left, right, ...props }) {
  const onChange = onToggle ? (e) => onToggle(e.target.checked) : undefined;
  return (
    <HStack>
      {left}
      <Switch onChange={onChange} size="md" {...props} />
      {right}
    </HStack>
  );
}
