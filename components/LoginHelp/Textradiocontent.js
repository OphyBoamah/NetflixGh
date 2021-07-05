import React from "react";
import {
  Box,
  RadioGroup,
  Stack,
  Radio,
  Text,
  Input,
  Button,
  InputLeftAddon,
  InputGroup,
} from "@chakra-ui/core";

const Textradiocontent = () => {
  return (
    <Box>
      <Text pb={{ md: 4 }} py={{ base: 6 }}>
        We will text you a verification code to reset your password. Text fees
        may apply.
      </Text>
      <InputGroup>
        <InputLeftAddon children="+233" />
        <Input type="tel" borderLeftRadius="0" placeholder="phone number" />
      </InputGroup>
      {/* <RadioGroup defaultValue="2" py={{ md: 4 }} pl={{ md: 6 }}>
        <Stack direction="column">
          <Radio colorScheme="blue" value="1" size="lg">
            Email
          </Radio>
          <Radio colorScheme="blue" value="2" size="lg">
            Text Message (SMS)
          </Radio>
        </Stack>
      </RadioGroup> */}

      {/* <Box borderRadius="none">
        <InputGroup>
          <InputLeftAddon children="+233" />
          <Input type="phone" borderLeftRadius="0" placeholder="phone number" />
        </InputGroup> */}
      {/* <Input
          type="number"
          w={{ md: "100%" }}
          py={{ md: 6 }}
          borderRadius="none"
          border="1px solid #999"
        /> */}
      <Button
        bg="blue.400"
        color="#fff"
        w="100%"
        py={{ md: 6 }}
        my={{ base: 6, md: 6 }}
        borderRadius="none"
        border="1px solid #999"
      >
        Text Me
      </Button>
    </Box>
    // </Box>
  );
};

export default Textradiocontent;
