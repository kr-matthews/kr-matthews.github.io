import { Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export default function Gallery({
  childW = "400px",
  children: tiles,
  ...props
}) {
  return (
    <SimpleGrid
      templateColumns={`repeat(auto-fill, ${childW})`}
      justifyContent="center"
      gap="2em"
      {...props}
    >
      {tiles.map((tile) => (
        <GalleryItem key={tile.key} w={childW}>
          {tile}
        </GalleryItem>
      ))}
    </SimpleGrid>
  );
}

// !!! horizontal scroll bar sometimes shows up

export function GalleryItem({ w = "400px", children: content, ...props }) {
  const bgColor = useColorModeValue("alt.light", "alt.dark");
  const borderColor = useColorModeValue("alt.dark", "alt.light");

  return (
    <Box
      w={w}
      textAlign="center"
      borderRadius="1em"
      border="solid 0.5em"
      borderColor={borderColor}
      bgColor={bgColor}
      p="2em"
      {...props}
    >
      {content}
    </Box>
  );
}
