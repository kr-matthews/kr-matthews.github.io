import React from "react";
import Link from "../../common/Link";
import wipImage from "../../../assets/wip.png"; // !!! replace this
import altLinkLightIcon from "../../../assets/link.svg";
import altLinkDarkIcon from "../../../assets/link-white.svg";
import altCodeLightIcon from "../../../assets/code.svg";
import altCodeDarkIcon from "../../../assets/code-white.svg";
import gitHubLightIcon from "../../../assets/github.png";
import gitHubDarkIcon from "../../../assets/github-white.png";
import {
  Box,
  Center,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { getLanguageIcon } from "../../../utils/projects";

export default function ProjectPreview({
  title = "TBD",
  image,
  type,
  icon,
  url,
  codeHost,
  codeUrl,
  tags = [],
  languages = [],
  year = "Unknown",
  description = "No description available - check back later.",
}) {
  const altLinkIcon = useColorModeValue(altLinkLightIcon, altLinkDarkIcon);
  const gitHubIcon = useColorModeValue(gitHubLightIcon, gitHubDarkIcon);
  const altCodeIcon = useColorModeValue(altCodeLightIcon, altCodeDarkIcon);
  const codeIcon = codeHost === "GitHub" ? gitHubIcon : altCodeIcon;

  // !! modal on image hover (then decrease image height)

  return (
    <VStack spacing="0.75em" p="2em" h="100%">
      <Text as="h3" noOfLines="1" m={0} maxW="200%">
        {title}
      </Text>
      <Center w="100%" h="15em">
        <Image src={image || wipImage} maxW="100%" maxH="100%" />
      </Center>
      <HStack spacing="2em">
        <Center h="3em" w="3em">
          {(icon || url) && (
            <Link
              href={url}
              isExternal
              isDisabled={!url}
              title="View Project"
              disabledTitle="Not Hosted Anywhere"
              w="100%"
              h="100%"
            >
              <Image src={icon || altLinkIcon} maxH="100%" w="100%" />
            </Link>
          )}
        </Center>
        <VStack spacing={0}>
          <Box>{year}</Box>
          <Box>{type}</Box>
        </VStack>
        <Center h="3em" w="3em">
          {codeUrl && (
            <Link
              href={codeUrl}
              isExternal
              // isDisabled={!codeUrl}
              title="View Source Code"
              w="100%"
              h="100%"
            >
              <Image src={codeIcon ?? altCodeIcon} maxH="100%" w="100%" />
            </Link>
          )}
        </Center>
      </HStack>
      {tags.length > 0 && <Box>{tags.join(", ")}</Box>}
      {languages.length > 0 && (
        <HStack>
          {languages.map((lang, ind, arr) => (
            <Language key={lang} lang={lang} isLast={ind === arr.length - 1} />
          ))}
        </HStack>
      )}
      <Text noOfLines={6}>{description}</Text>
    </VStack>
  );
}

function Language({ lang, isLast }) {
  const altCodeIcon = useColorModeValue(altCodeLightIcon, altCodeDarkIcon);
  return (
    <HStack>
      <Image
        src={getLanguageIcon(lang) ?? altCodeIcon}
        maxH="1.5em"
        maxW="1.5em"
      />
      <Box>
        {lang}
        {isLast ? "" : ","}
      </Box>
    </HStack>
  );
}
