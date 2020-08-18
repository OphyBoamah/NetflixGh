import React from "react";
import { Heading, Text, Box, Image, Flex } from "@chakra-ui/core";

const Download = () => {
  return (
    <Box bg="#000" color="#fff" borderBottom="9px solid #333">
      <Flex justify="center" align="center">
        <Image src="/images/tv.png" />
        <Flex flexDir="column" w={{ md: "500px" }}>
          <Heading as="h2" fontSize="5xl" mb={{ md: 6 }}>
            Download your shows to watch offline.
          </Heading>
          <Text fontSize="2xl">
            Save your favorites easily and always have something to watch.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Download;
