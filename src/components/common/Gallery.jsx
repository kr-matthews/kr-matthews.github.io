import { Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import React, { Fragment } from "react";

export default function Gallery({
  childW = "390px",
  children: tiles,
  ...props
}) {
  // !!! results count styling
  const minW = `calc(${childW} )`;

  return (
    <Fragment>
      <Box>Results: {tiles.length}</Box>
      <Box minW={minW}>
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
      </Box>
    </Fragment>
  );
}

function GalleryItem({ w = "390px", children: content, ...props }) {
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
      {...props}
    >
      {content}
    </Box>
  );
}
