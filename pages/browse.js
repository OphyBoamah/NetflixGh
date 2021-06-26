import React from "react";
import Usercard from "../components/Browse/Usercard";
import { Flex, Image, Heading, Box, Link, Grid } from "@chakra-ui/core";

const profiles = [
  { name: "Amuah", link: "#", img: "anime4.png" },
  { name: "Ewurafua", link: "#", img: "anime1.png" },
  { name: "Nanaa", link: "#", img: "anime2.png" },
  { name: "Don", link: "#", img: "anime3.png" },
  { name: "Add Profile", link: "#", img: "newusericon.png" },
];

const browse = () => {
  return (
    <Box bg="#000" color="#fff" h={{ md: "100vh" }}>
      <Flex
        justify="space-between"
        px={{ md: 16 }}
        pt={{ md: 4 }}
        h={{ md: "10vh" }}
      >
        <Link href="/">
          <Image src="/images/netflix-logo.png" w={{ md: 145 }} />
        </Link>
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
          {profiles.map((profile, idx) => (
            <Usercard
              key={idx}
              image={`/images/${profile.img}`}
              link={profile.link}
              name={profile.name}
            />
          ))}
          {/* <Usercard image="/images/anime4.png" link="#" name="AMUAH" />
          <Usercard image="/images/anime1.png" link="#" name="Ewurafua" />
          <Usercard image="/images/anime2.png" link="#" name="Nanaa" />
          <Usercard image="/images/anime3.png" link="#" name="Don" />
          <Usercard
            image="/images/newusericon.png"
            link="#"
            name="Add Profile"
          /> */}
        </Grid>
        <Link
          py={{ md: 2 }}
          px={{ md: 5 }}
          mt={{ md: 6 }}
          border="1px solid #aaa"
          fontSize="xl"
          letterSpacing="3px"
          color="#aaa"
          href="/login"
        >
          MANAGE PROFILES
        </Link>
      </Flex>
    </Box>
  );
};

export default browse;
