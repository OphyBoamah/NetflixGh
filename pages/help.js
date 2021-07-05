import React from "react";
import { Box, Text, Flex, Image, Button, Link } from "@chakra-ui/core";
import Helpform from "../components/LoginHelp/Helpform";
import Lightfooter from "../components/Signin/Lightfooter";

const help = () => {
  return (
    <Box
      bg={{ base: "#eee", md: "url('/images/LoginHelpHeader.jpg')" }}
      h="100vh"
    >
      <Flex
        justify="space-between"
        align="center"
        px={{ base: 6, md: 16 }}
        bg={{ base: "#eee", md: "#000" }}
        pt={14}
        pb={{ base: 4 }}
      >
        <Link href="/">
          <Image src="/images/netflix-logo.png" w={{ base: 20, md: 145 }} />
        </Link>
        <Link mt={{ md: 4 }} color="#e50914" fontSize="2xl" href="/login">
          Sign In
        </Link>
      </Flex>
      <Helpform />
      <Box px={{ base: 6 }}>
        <Lightfooter />
      </Box>
    </Box>
  );
};

export default help;
