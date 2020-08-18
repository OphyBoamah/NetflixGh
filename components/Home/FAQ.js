import React from "react";
import { Box, Heading, Flex, Text, Icon } from "@chakra-ui/core";
import FAQcard from "../Card/FAQcard";
import Formpack from "../Card/Formpack";

const FAQ = () => {
  return (
    <Box bg="#000" color="#fff" py={{ md: 24 }}>
      <Heading as="h2" fontSize="4xl" mb={{ md: 6 }} textAlign="center">
        Frequently Asked Questions
      </Heading>
      <FAQcard title="What is Netflix?" />
      <FAQcard title="How much does Netflix cost?" />
      <FAQcard title="Where can I watch?" />
      <FAQcard title="How do I cancel?" />
      <FAQcard title="What can I watch on Netflix?" />
      <Flex flexDir="column" justify="center" align="center" mt={{ md: 4 }}>
        <Text fontSize="2xl">
          Ready to watch? Enter your email to create or restart your membership.
        </Text>
        <Formpack />
      </Flex>
    </Box>
  );
};

export default FAQ;
