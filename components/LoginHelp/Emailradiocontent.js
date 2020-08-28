import React from "react";
import {
  Box,
  RadioGroup,
  Stack,
  Radio,
  Text,
  Input,
  Button,
} from "@chakra-ui/core";

const Emailradiocontent = () => {
  return (
    <Box>
      <Box borderRadius="none">
        {/* <Input
          type="text"
          w={{ md: "100%" }}
          py={{ md: 6 }}
          borderRadius="none"
          border="1px solid #999"
        /> */}
        <Text pb={{ md: 4 }}>
          We will send you an email with instructions on how to reset your
          password.
        </Text>
        <Input
          placeholder="name@example.com"
          type="text"
          w={{ md: "100%" }}
          py={{ md: 6 }}
          borderRadius="none"
          border="1px solid #999"
        />
        <Button
          bg="blue.400"
          color="#fff"
          w={{ md: "100%" }}
          py={{ md: 6 }}
          my={{ md: 6 }}
          borderRadius="none"
          border="1px solid #999"
        >
          Email Me
        </Button>
      </Box>
    </Box>
  );
};

export default Emailradiocontent;
