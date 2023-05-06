import { FormControl, FormLabel, HStack, Switch, Text } from "@chakra-ui/react";
import React from "react";

export default function Toggle({ label, onToggle, left, right, ...props }) {
  const onChange = onToggle ? (e) => onToggle(e.target.checked) : undefined;
  return (
    <FormControl>
      {label && (
        <FormLabel>
          <Text>{label}</Text>
        </FormLabel>
      )}
      <HStack>
        {left}
        <Switch onChange={onChange} size="md" {...props} />
        {right}
      </HStack>
    </FormControl>
  );
}
