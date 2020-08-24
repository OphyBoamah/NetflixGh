import React from "react";
import { Box, Image, Text, Link } from "@chakra-ui/core";

const Usercard = ({ image, name, link }) => {
  return (
    <Box>
      <Box textAlign="center" w={{ md: "150px" }} color="#aaa">
        <Link href={link} _hover="none">
          <Image
            boxSize="150px"
            objectFit="cover"
            src={image}
            alt={name}
            border="3px solid #333"
          />
          <Text fontSize="xl" mt={{ md: 4 }}>
            {name}
          </Text>
        </Link>
      </Box>
    </Box>
  );
};

export default Usercard;
