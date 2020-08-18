import React from "react";
import { Box, Flex, Input, Text } from "@chakra-ui/core";

const Formpack = () => {
  return (
    <Box>
      <Flex w={{ md: "800px" }} mt={{ md: 8 }}>
        <Input
          size="lg"
          type="text"
          placeholder="Email address"
          h={{ md: 16 }}
          borderRadius="none"
        />
        <Text
          as="button"
          bg="#e50914"
          fontSize="3xl"
          px={{ md: 12 }}
          w={{ md: "400px" }}
          textTransform="uppercase"
        >
          Get Started
        </Text>
      </Flex>
    </Box>
  );
};

export default Formpack;
