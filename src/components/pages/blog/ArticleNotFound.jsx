import { Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
import BackToBlog from "./BackToBlog";

export default function ArticleNotFound() {
  return (
    <Fragment>
      <Text as="h1" textAlign="center">
        Article not found
      </Text>
      <BackToBlog />
    </Fragment>
  );
}
