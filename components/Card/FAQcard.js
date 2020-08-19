import React from "react";
import {
  Box,
  Accordion,
  AccordionPanel,
  AccordionItem,
  AccordionButton,
} from "@chakra-ui/core";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const FAQcard = ({ title, content }) => {
  return (
    <Accordion allowMultiple w={{ md: "800px" }} mx="auto" bg="#222">
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <AccordionButton p={{ md: 8 }}>
              <Box flex="1" textAlign="left">
                {title}
              </Box>
              {isExpanded ? (
                <MinusIcon fontSize="16px" />
              ) : (
                <AddIcon fontSize="16px" />
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
