import React from "react";
import { Box, Text, Flex, Image, Button, Link } from "@chakra-ui/core";
import Helpform from "../components/LoginHelp/Helpform";
import Lightfooter from "../components/Signin/Lightfooter";

const help = () => {
  return (
    <Box bg="url('/images/LoginHelpHeader.jpg')" h="100vh">
      <Flex justify="space-between" px={{ md: 16 }}>
        <Image src="/images/netflix-logo.png" w={{ md: 145 }} />
        <Link mt={{ md: 4 }} color="#e50914" fontSize="2xl">
          Sign In
        </Link>
      </Flex>
      <Helpform />
      <Lightfooter />
    </Box>
  );
};

export default help;
