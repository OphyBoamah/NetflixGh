import React from "react";
import { Heading, Text, Box, Image, Flex } from "@chakra-ui/core";

const Enjoy = () => {
  return (
    <Box bg="#000" color="#fff" borderY="9px solid #333">
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justify="center"
        align="center"
      >
        <Flex
          flexDir="column"
          w={{ md: "500px" }}
          textAlign={{ base: "center" }}
          p={{ base: 4 }}
        >
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "5xl" }}
            mb={{ base: 4, md: 6 }}
          >
            Enjoy on your TV.
          </Heading>
          <Text fontSize={{ base: "md", md: "2xl" }}>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </Text>
        </Flex>
        <Image src="/images/tv.png" />
      </Flex>
    </Box>
  );
};

export default Enjoy;
