import React from "react";
import Usercard from "../components/Browse/Usercard";
import { Flex, Image, Heading, Box, Link, Grid } from "@chakra-ui/core";

const browse = () => {
  return (
    <Box bg="#000" color="#fff" h={{ md: "100vh" }}>
      <Flex
        justify="space-between"
        px={{ md: 16 }}
        pt={{ md: 4 }}
        h={{ md: "10vh" }}
      >
        <Image src="/images/netflix-logo.png" w={{ md: 145 }} />
      </Flex>
      <Flex
        flexDir="column"
        justify="center"
        align="center"
        w={{ md: "80%" }}
        mx="auto"
        h={{ md: "80vh" }}
      >
        <Heading as="h1" fontSize="6xl">
          Who's watching?
        </Heading>
        <Grid
          w={{ md: "70%" }}
          templateColumns="repeat(5, 1fr)"
          grid={4}
          py={{ md: 10 }}
        >
          <Usercard image="/images/anime4.png" link="#" name="AMUAH" />
          <Usercard image="/images/anime1.png" link="#" name="Ewurafua" />
          <Usercard image="/images/anime2.png" link="#" name="Nanaa" />
          <Usercard image="/images/anime3.png" link="#" name="Don" />
          <Usercard
            image="/images/newusericon.png"
            link="#"
            name="Add Profile"
          />
        </Grid>
        <Link
          py={{ md: 2 }}
          px={{ md: 5 }}
          mt={{ md: 6 }}
          border="1px solid #aaa"
          fontSize="xl"
          letterSpacing="3px"
          color="#aaa"
        >
          MANAGE PROFILES
        </Link>
      </Flex>
    </Box>
  );
};

export default browse;
