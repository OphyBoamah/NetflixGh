import React from "react";
import { Box, Link, Flex, Select } from "@chakra-ui/core";

const Lightfooter = ({ py, bg }) => {
  return (
    <Box>
      <Box bg={bg} py={py} mt={{ md: 20 }} pl={{ md: 24 }} color="#aaa">
        <Link href="#">Questions? Contact us.</Link>
        <Flex py={{ md: 4 }}>
          <Link href="#">Gift Card Terms</Link>
          <Link ml={{ md: 20 }} href="#">
            Terms of Use
          </Link>
          <Link ml={{ md: 20 }} href="#">
            Privacy Statement
          </Link>
        </Flex>
        <Select bg="#000" w={{ md: 108 }} color="#aaa" mt={{ md: 4 }}>
          <option>English</option>
        </Select>
      </Box>
    </Box>
  );
};

export default Lightfooter;
