import React from "react";
import { Heading, Text, Box, Image, Flex } from "@chakra-ui/core";

const Watch = () => {
  return (
    <Box bg="#000" color="#fff" borderBottom="9px solid #333">
      <Flex justify="center" align="center">
        <Flex flexDir="column" w={{ md: "500px" }}>
          <Heading as="h2" fontSize="5xl" mb={{ md: 6 }}>
            Watch everywhere.
          </Heading>
          <Text fontSize="2xl">
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
