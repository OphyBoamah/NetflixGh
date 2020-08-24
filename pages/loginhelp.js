import React from "react";
import { Box, Flex, Image, Button, Link, Heading } from "@chakra-ui/core";
import Lightfooter from "../components/Signin/Lightfooter";
import Helpform from "../components/LoginHelp/Helpform";

const loginhelp = () => {
  return (
    <Box bg="url('/images/LoginHelpHeader.jpg')" h="100vh">
      <Flex justify="space-between" px={{ md: 16 }}>
        <Image src="/images/netflix-logo.png" w={{ md: 145 }} />
        <Link color="#e50914" pt={{ md: 6 }}>
          <Heading as="h4" fontSize="xl">
            Sign In
          </Heading>
        </Link>
      </Flex>
      <Helpform />
      <Lightfooter py={0} bg="none" />
    </Box>
  );
};

export default loginhelp;
