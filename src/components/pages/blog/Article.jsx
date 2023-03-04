import { Center, Image, Text } from "@chakra-ui/react";
import { NarrowContent } from "../../common/Page";

export default function Article({
  title = "Article Title",
  publishDate,
  editDate,
  image,
  content = "Sorry, no content found.",
}) {
  return (
    <NarrowContent>
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
      {content}
    </NarrowContent>
  );
}
