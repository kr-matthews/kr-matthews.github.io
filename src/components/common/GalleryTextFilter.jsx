import {
  FormControl,
  FormLabel,
  HStack,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";

export default function GalleryTextFilter({
  placeholder = "Type to search...",
  searchText,
  setSearchText,
}) {
  const mainColour = useColorModeValue("alt.dark", "alt.light");

  return (
    <FormControl>
      <HStack pb="1em">
        <FormLabel mr="0" minW="6em" fontWeight="semibold">
          Search:
        </FormLabel>
        <Input
          type="search"
          placeholder={placeholder}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          minW="275px"
          maxW="550px"
          ml="0"
          borderWidth="2px"
          _focus={{ borderColor: mainColour }}
        />
      </HStack>
    </FormControl>
  );
}
