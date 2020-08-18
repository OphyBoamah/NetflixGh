import React from "react";
import { Heading, Text, Box, Image, Flex } from "@chakra-ui/core";

const Enjoy = () => {
  return (
    <Box bg="#000" color="#fff" borderY="9px solid #333">
      <Flex>
        <Box>
          <Heading>Enjoy on your TV.</Heading>
          <Text>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </Text>
        </Box>
        <Image src="/images/tv.png" />
      </Flex>
    </Box>
  );
};

export default Enjoy;
