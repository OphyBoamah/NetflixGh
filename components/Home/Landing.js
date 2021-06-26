import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  Heading,
  Link,
  Input,
} from "@chakra-ui/core";
import Formpack from "../Card/Formpack";

const Landing = () => {
  return (
    <Box
      bg="linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/NetflixHeader.jpg')"
      bgSize="cover"
      bgPos="center"
      h="95vh"
      color="#fff"
    >
      <Flex justify="space-between" px={{ md: 16 }} pt={{ md: 8 }}>
        <Link href="/">
          <Image src="/images/netflix-logo.png" w={{ md: 145 }} />
        </Link>
        <Link href="/login">
          <Button bg="#e50914">Sign In</Button>
        </Link>
      </Flex>
      <Flex
        flexDir="column"
        // w={{ md: "700px" }}
        justify="center"
        align="center"
        h="80vh"
      >
        <Heading as="h1" fontSize="6xl" mb={{ md: 2 }} textAlign="center">
          Unlimited movies, TV <br />
          shows, and more.
        </Heading>
        <Text fontSize="2xl" mb={{ md: 4 }}>
          Watch anywhere. Cancel anytime.
        </Text>
        <Text fontSize="xl">
          Ready to watch? Enter your email to create or restart your membership.
        </Text>
        <Formpack />
      </Flex>
    </Box>
  );
};

export default Landing;
