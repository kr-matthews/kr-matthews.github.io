import React, { Fragment } from "react";
import { Center, Image, Text } from "@chakra-ui/react";
import BackToBlog from "./BackToBlog";

export default function Article({
  title = "Untitled",
  publishDate,
  editDate,
  image,
  content = "Sorry, content not found.",
}) {
  return (
    <Fragment>
      <Text as="h1" textAlign="center">
        {title}
      </Text>

      {image && (
        <Center mb="1em">
          <Image src={image} maxW="min(800px, 100%)" />
        </Center>
      )}

      <Center>
        {`Published: ${
          publishDate ? publishDate.toISOString().split("T")[0] : "Unknown"
        }`}
      </Center>

      {editDate && (
        <Center>
          {`Last Updated: ${editDate.toISOString().split("T")[0]}`}
        </Center>
      )}

      <BackToBlog />
      {content}
      <BackToBlog />
    </Fragment>
  );
}
