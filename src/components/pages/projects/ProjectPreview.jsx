import React, { useState } from "react";
import Link from "../../common/Link";
import wipImage from "../../../assets/wip.svg";
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
import { getLanguageIcon } from "../../../utils";
import Modal from "../../common/Modal";

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

  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <VStack spacing="0.75em" p="2em" h="100%">
      <Text as="h3" noOfLines="1" m={0} maxW="200%">
        {title}
      </Text>
      <Center w="100%" h="12em">
        <Image
          src={image || wipImage}
          maxW="100%"
          maxH="100%"
          _hover={{ cursor: image ? "help" : "auto" }}
          onClick={() => setIsPreviewOpen(!!image)}
        />
        <Modal isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)}>
          <Center>
            <Image
              src={image}
              alt="Preview"
              maxW="80vw"
              maxH="80vh"
              paddingY="1em"
            />
          </Center>
        </Modal>
      </Center>
      <HStack spacing="2em">
        <Center h="2.5em" w="2.5em">
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
              {icon && url ? (
                <HStack spacing={1} align="start">
                  <Image src={icon} maxH="80%" w="80%" />
                  <Image src={altLinkIcon} maxH="30%" w="30%" />{" "}
                </HStack>
              ) : (
                <Image src={icon || altLinkIcon} maxH="100%" w="100%" />
              )}
            </Link>
          )}
        </Center>
        <VStack spacing={0}>
          <Box textStyle="specs">{year}</Box>
          <Box textStyle="specs">{type}</Box>
        </VStack>
        <Center h="2.5em" w="2.5em">
          {codeUrl && (
            <Link
              href={codeUrl}
              isExternal
              // isDisabled={!codeUrl}
              title="View Source Code"
              w="100%"
              h="100%"
            >
              <HStack spacing={1} align="start">
                <Image src={codeIcon ?? altCodeIcon} maxH="80%" w="80%" />
                <Image src={altLinkIcon} maxH="30%" w="30%" />
              </HStack>
            </Link>
          )}
        </Center>
      </HStack>
      {tags.length > 0 && <Box textStyle="specs">{tags.join(", ")}</Box>}
      {languages.length > 0 && (
        <HStack textStyle="specs">
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
