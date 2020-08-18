import React from "react";
import { Heading, Text, Box, Image, Flex } from "@chakra-ui/core";

const Download = () => {
  return (
    <Box bg="#000" color="#fff">
      <Flex>
        <Image src="/images/tv.png" />
        <Box>
          <Heading>Enjoy on your TV.</Heading>
          <Text>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Download;
