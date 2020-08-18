import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  Heading,
  Input,
} from "@chakra-ui/core";

const Landing = () => {
  return (
    <Box
      bg="linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/NetflixBg.jpg')"
      bgSize="cover"
      bgPos="center"
      h="95vh"
      color="#fff"
    >
      <Flex justify="space-between" px={{ md: 16 }} pt={{ md: 8 }}>
        <Image src="/images/netflix-logo.png" w={{ md: 145 }} />
        <Button bg="#e50914">Sign In</Button>
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
        <Flex w={{ md: "800px" }} mt={{ md: 8 }}>
          <Input
            size="lg"
            type="text"
            placeholder="Email address"
            h={{ md: 16 }}
            borderRadius="none"
          />
          <Text
            as="button"
            bg="#e50914"
            fontSize="3xl"
            px={{ md: 12 }}
            w={{ md: "400px" }}
            textTransform="uppercase"
          >
            Get Started
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Landing;
