import { Box, Button, HStack, useColorModeValue } from "@chakra-ui/react";

export default function GalleryCategoryFilter({
  title = "Categories",
  categories = [],
  areSelected,
  counts,
  totalItems,
  toggleOne,
  isAllSelected,
  toggleAll,
}) {
  return (
    <HStack pb="1em">
      <Box minW="6em" fontWeight="semibold">
        {title}:
      </Box>
      <Box>
        <CategoryButton
          type="reset"
          name={totalItems ? `All (${totalItems})` : "All"}
          isSelected={isAllSelected}
          onClick={toggleAll}
        />
        {categories.map((name, index) => (
          <CategoryButton
            key={name}
            name={`${name} (${counts[index]})`}
            isSelected={areSelected[index]}
            onClick={() => toggleOne(index)}
          />
        ))}
      </Box>
    </HStack>
  );
}

function CategoryButton({ name, isSelected, onClick, type = "button" }) {
  const mainColour = useColorModeValue("alt.dark", "alt.light");
  const otherColour = useColorModeValue("alt.light", "alt.dark");
  const bgColor = isSelected ? mainColour : otherColour;
  const color = isSelected ? otherColour : mainColour;

  return (
    <Button
      m="2px"
      h="2.2em"
      px="0.75em"
      type={type}
      onClick={onClick}
      bgColor={bgColor}
      color={color}
      borderRadius="2em"
      _hover={{ bgColor, color }}
    >
      {name}
    </Button>
  );
}
