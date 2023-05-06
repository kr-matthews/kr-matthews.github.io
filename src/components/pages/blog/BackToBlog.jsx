import React from "react";
import { Center } from "@chakra-ui/react";
import Link from "../../common/Link";

export default function BackToBlog() {
  return (
    <Center marginTop="1em">
      <Link to="..">Back to blog</Link>
    </Center>
  );
}
