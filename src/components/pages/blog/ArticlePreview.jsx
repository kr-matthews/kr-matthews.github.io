import { Box, Center, HStack, Image, Text, VStack } from "@chakra-ui/react";
import notepad from "../../../assets/notepad.png";
import Link from "../../common/Link";

export default function ArticlePreview({
  link,
  title = "Untitled",
  publishDate,
  editDate,
  image,
  tags = [],
  preview = "Click to read.",
}) {
  return (
    <Link
      to={link}
      withoutUnderline
      isDisabled={!link}
      disabledTitle="Currently unavailable"
    >
      <HStack spacing="2em" h="16em" p="2em">
        <Center h="100%" minW="13em">
          <Image src={image || notepad} maxH="100%" maxW="100%" />
        </Center>
        <VStack width="100%">
          <Text as="h2" m={0} noOfLines={2}>
            {title}
          </Text>
          <HStack textStyle="specs">
            <Box>
              Published:{" "}
              {publishDate
                ? publishDate.toISOString().split("T")[0]
                : "Unknown Date"}
            </Box>
            <Box>
              {editDate &&
                "(Updated: " + editDate.toISOString().split("T")[0] + ")"}
            </Box>
          </HStack>
          {tags.length > 0 && <Box textStyle="specs">{tags.join(", ")}</Box>}
          <Text noOfLines={4}>{preview}</Text>
        </VStack>
      </HStack>
    </Link>
  );
}
