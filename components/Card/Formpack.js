import React from "react";
import { Box, Flex, Input, Text, Link } from "@chakra-ui/core";

const Formpack = () => {
  return (
    <Box>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        w={{ md: "800px" }}
        mt={{ md: 8 }}
        mx={{ base: "auto" }}
      >
        <Input
          size="lg"
          type="text"
          placeholder="Email address"
          h={{ md: 16 }}
          borderRadius="none"
          // w={{ base: "300px" }}
          // mx={{ base: "auto" }}
        />

        <Text
          as="button"
          bg="#e50914"
          fontSize={{ base: "md", md: "2xl" }}
          py={{ base: 2, md: 4 }}
          // px={{ base: 2, md: 4 }}
          w={{ md: "400px" }}
          textTransform="uppercase"
        >
          <Link href="/browse">Get Started</Link>
        </Text>
      </Flex>
    </Box>
  );
};

export default Formpack;
