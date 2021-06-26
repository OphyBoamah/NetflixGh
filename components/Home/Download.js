import React from "react";
import { Heading, Text, Box, Image, Flex } from "@chakra-ui/core";

const Download = () => {
  return (
    <Box bg="#000" color="#fff" borderBottom="9px solid #333">
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justify="center"
        align="center"
      >
        <Image src="/images/Netflixmobile.jpg" />
        <Flex
          flexDir={{ base: "column" }}
          w={{ md: "500px" }}
          textAlign={{ base: "center" }}
          p={{ base: 4 }}
          order={{ base: "-1", md: "2" }}
        >
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "5xl" }}
            mb={{ base: 4, md: 6 }}
          >
            Download your shows to watch offline.
          </Heading>
          <Text fontSize={{ base: "md", md: "2xl" }}>
            Save your favorites easily and always have something to watch.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Download;
