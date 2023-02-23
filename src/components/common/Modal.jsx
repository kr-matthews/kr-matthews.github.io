import {
  Modal as ChakraModal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

export default function Modal({ isOpen, onClose, children: content }) {
  const bgColor = useColorModeValue("alt.light", "alt.dark");
  const borderColor = useColorModeValue("alt.dark", "alt.light");

  return (
    <ChakraModal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        borderRadius="1em"
        border="solid 0.5em"
        borderColor={borderColor}
        bgColor={bgColor}
        maxW="fit-content"
      >
        <ModalBody>{content}</ModalBody>
      </ModalContent>
    </ChakraModal>
  );
}
