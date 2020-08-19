import React from "react";
import { Box, Text, Grid } from "@chakra-ui/core";

const Footer = () => {
  return (
    <Box bg="#000" borderTop="9px solid #333" color="#777" py={{ md: 20 }}>
      <Box w={{ md: "900px" }} mx="auto">
        <Text mb={{ md: 4 }}>Questions? Contact us.</Text>
        <Grid templateColumns="repeat(4, 1fr)">
          <Box>
            <Text>FAQ</Text>
            <Text>Investor Relations</Text>
            <Text>Privacy</Text>
            <Text>Speed Test</Text>
          </Box>
          <Box>
            <Text>Help Center</Text>
            <Text>Jobs</Text>
            <Text>Cookie Preferences</Text>
            <Text>Legal Notices</Text>
          </Box>
          <Box>
            <Text>Account</Text>
            <Text>Ways to Watch</Text>
            <Text>Corporate Information</Text>
            <Text>Netflix Originals</Text>
          </Box>
          <Box>
            <Text>Media Center</Text>
            <Text>Terms of Use</Text>
            <Text>Contact Us</Text>
          </Box>
        </Grid>
        <Text mt={{ md: 4 }}>Netflix Ghana</Text>
      </Box>
    </Box>
  );
};

export default Footer;
