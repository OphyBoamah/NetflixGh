import React from "react";
import { Heading, Text, Box, Image, Flex } from "@chakra-ui/core";

const Watch = () => {
  return (
    <Box bg="#000" color="#fff" borderBottom="9px solid #333">
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justify="center"
        align="center"
      >
        <Flex
          flexDir={{ base: "column" }}
          w={{ md: "500px" }}
          textAlign={{ base: "center" }}
          p={{ base: 4 }}
        >
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "5xl" }}
            mb={{ base: 4, md: 6 }}
          >
            Watch everywhere.
          </Heading>
          <Text fontSize={{ base: "md", md: "2xl" }}>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV without paying more.
          </Text>
        </Flex>
        <Image src="/images/device-pile.png" />
      </Flex>
    </Box>
  );
};

export default Watch;
