import React from "react";
import {
  Box,
  Accordion,
  AccordionPanel,
  AccordionItem,
  AccordionButton,
} from "@chakra-ui/core";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const FAQcard = ({ title, content, text }) => {
  return (
    <Accordion
      allowMultiple
      w={{ md: "800px" }}
      mx="auto"
      bg="#222"
      fontSize={text}
    >
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <AccordionButton p={{ md: 8 }}>
              <Box
                flex="1"
                textAlign="left"
                fontSize={{ base: "xl", md: "3xl" }}
              >
                {title}
              </Box>
              {isExpanded ? (
                <MinusIcon fontSize="20px" />
              ) : (
                <AddIcon fontSize="20px" />
              )}
            </AccordionButton>
            <AccordionPanel pb={4}>{content}</AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default FAQcard;
