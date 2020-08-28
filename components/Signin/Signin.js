import React from "react";
import {
  Box,
  FormControl,
  Heading,
  Input,
  Button,
  Flex,
  Text,
  Checkbox,
  Link,
  Image,
  Select,
} from "@chakra-ui/core";
import Lightfooter from "./Lightfooter";

const Signin = () => {
  return (
    <Box
      bg="linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/NetflixHeader.jpg')"
      bgPos="center"
      bgSize="cover"
      h="135vh"
    >
      <Flex justify="space-between" px={{ md: 16 }} pt={{ md: 4 }}>
        <Image src="/images/netflix-logo.png" w={{ md: 145 }} />
      </Flex>
      <Box
        as="form"
        h={{ md: "80vh" }}
        w={{ md: 460 }}
        bg="linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8))"
        mx="auto"
        borderRadius="10px"
      >
        <Box w={{ md: 340 }} mx="auto" pt={{ md: 10 }} color="#aaa">
          <Heading as="h2" fontSize="3xl" color="#fff" py={{ md: 8 }}>
            Sign In
          </Heading>
          <FormControl>
            <Input
              type="email"
              placeholder="Email or phone number"
              bg="#222"
              color="#666"
              border="none"
              py={{ md: 6 }}
            />
            <Input
              type="password"
              placeholder="Password"
              bg="#222"
              color="#333"
              border="none"
              py={{ md: 6 }}
              my={{ md: 6 }}
            />
          </FormControl>
          <Button
            bg="#e50914"
            color="#fff"
            w={{ md: 340 }}
            py={{ md: 6 }}
            mt={{ md: 6 }}
          >
            Sign In
          </Button>
          <Flex justify="space-between" mt={{ md: 2 }}>
            <Checkbox colorScheme="gray" defaultIsChecked>
              Remember me
            </Checkbox>
            <Text>Need help?</Text>
          </Flex>
          <Box flexDir="column" mt={{ md: 10 }}>
            <Text as="button">Login with Facebook</Text>
            <Text py={{ md: 4 }}>
              New to Netflix?{" "}
              <Link color="#fff" href="index.js">
                Sign up now
              </Link>
            </Text>
            <Text fontSize="sm">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
              <Link color="blue.600" href="index.js">
                Learn more.
              </Link>
            </Text>
          </Box>
        </Box>
      </Box>
      <Lightfooter py={{ md: 12 }} bg="linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8))" />
    </Box>
  );
};

export default Signin;
