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
      w="100vw"
      h={{ base: "65vh", md: "95vh" }}
      color="#fff"
    >
      <Flex
        justify="space-between"
        align="center"
        px={{ base: 4, md: 16 }}
        pt={{ base: 4, md: 8 }}
      >
        <Link href="/">
          <Image src="/images/netflix-logo.png" w={{ base: 100, md: 145 }} />
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
        h={{ base: "50vh", md: "80vh" }}
      >
        <Heading
          as="h1"
          fontSize={{ base: "3xl", md: "6xl" }}
          mb={{ md: 2 }}
          textAlign="center"
        >
          Unlimited movies, TV <br />
          shows, and more.
        </Heading>
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          mb={{ md: 4 }}
          py={{ base: 2 }}
        >
          Watch anywhere. Cancel anytime.
        </Text>
        <Text
          fontSize={{ base: "md", md: "xl" }}
          textAlign={{ base: "center" }}
          mb={{ base: 2 }}
        >
          Ready to watch? Enter your email to create or restart your membership.
        </Text>
        <Formpack />
      </Flex>
    </Box>
  );
};

export default Landing;
