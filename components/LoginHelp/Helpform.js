import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Input,
  Button,
  Link,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/core";
import Emailradiocontent from "./Emailradiocontent";
import Textradiocontent from "./Textradiocontent";

const Helpform = () => {
  const [value, setValue] = useState("1");
  return (
    <Box bg="#eee" w={{ md: "30%" }} mx="auto">
      <Box
        w={{
          md: 400,
        }}
        mx="auto"
        py={{ md: 10 }}
      >
        <Heading as="h2" fontSize="3xl">
          Forgot Email/Password
        </Heading>
        <Text pt={{ md: 4 }}>How would you like to reset your password?</Text>

        {/* <Emailradiocontent /> */}
        {/* <Textradiocontent /> */}
        {/* <Text pb={{ md: 4 }}>
          We will send you an email with instructions on how to reset your
          password.
        </Text> */}
        <RadioGroup
          onChange={setValue}
          value={value}
          py={{ md: 4 }}
          pl={{ md: 6 }}
        >
          <Stack direction="column">
            <Radio colorScheme="blue" value="1" size="lg">
              Email
            </Radio>
            <Radio colorScheme="blue" value="2" size="lg">
              Text Message (SMS)
            </Radio>
          </Stack>
        </RadioGroup>
        <Box borderRadius="none">
          {value === "1" && (
            <>
              {/* <Input
                placeholder="name@example.com"
                type="text"
                w={{ md: "100%" }}
                py={{ md: 6 }}
                borderRadius="none"
                border="1px solid #999"
              /> */}
              <Emailradiocontent />
              {/* <Button
                bg="blue.400"
                color="#fff"
                w={{ md: "100%" }}
                py={{ md: 6 }}
                my={{ md: 6 }}
                borderRadius="none"
                border="1px solid #999"
              >
                Email Me
              </Button> */}
            </>
          )}
          {value === "2" && (
            <>
              {/* <InputGroup>
                <InputLeftAddon children="+233" />
                <Input
                  type="tel"
                  borderLeftRadius="0"
                  placeholder="phone number"
                />
              </InputGroup> */}
              <Textradiocontent />
              {/* <Button
                bg="blue.400"
                color="#fff"
                w={{ md: "100%" }}
                py={{ md: 6 }}
                my={{ md: 6 }}
                borderRadius="none"
                border="1px solid #999"
              >
                Text Me
              </Button> */}
            </>
          )}
          <Link color="blue.300">I don't remember my email or phone</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Helpform;
