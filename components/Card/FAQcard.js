import React from "react";
import { Box, Flex, Icon, Text } from "@chakra-ui/core";

const FAQcard = ({ title }) => {
  return (
    <Box>
      <Flex
        bg="#333"
        color="#fff"
        w={{ md: 800 }}
        p={{ md: 6 }}
        mb={{ md: 4 }}
        justify="space-between"
        mx="auto"
      >
        <Text fontSize="2xl">{title}</Text>
        <Icon name="{icon}" size="160px" color="#fff" />
      </Flex>
    </Box>
  );
};

export default FAQcard;
