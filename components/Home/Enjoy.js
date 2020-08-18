import React from "react";
import { Heading, Text, Box, Image, Flex } from "@chakra-ui/core";

const Enjoy = () => {
  return (
    <Box bg="#000" color="#fff" borderY="9px solid #333">
      <Flex justify="center" align="center">
        <Flex flexDir="column" w={{ md: "500px" }}>
          <Heading as="h2" fontSize="5xl" mb={{ md: 6 }}>
            Enjoy on your TV.
          </Heading>
          <Text fontSize="2xl">
            Watch on Smart TVs, Playstation, Xbox, <br />
            Chromecast, Apple TV, Blu-ray players, and more.
          </Text>
        </Flex>
        <Image src="/images/tv.png" />
      </Flex>
    </Box>
  );
};

export default Enjoy;
