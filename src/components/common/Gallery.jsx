import { Box, SimpleGrid } from "@chakra-ui/react";
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
      {tiles}
    </SimpleGrid>
  );
}

export function GalleryItem({ w = "400px", children: content, ...props }) {
  return (
    <Box w={w} textAlign="center" {...props}>
      {content}
    </Box>
  );
}
