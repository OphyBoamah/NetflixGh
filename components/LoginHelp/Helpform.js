import React from "react";
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
} from "@chakra-ui/core";

const Helpform = () => {
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

        <RadioGroup defaultValue="2" py={{ md: 4 }} pl={{ md: 6 }}>
          <Stack direction="column">
            <Radio colorScheme="blue" value="1" size="lg">
              Email
            </Radio>
            <Radio colorScheme="blue" value="2" size="lg">
              Text Message (SMS)
            </Radio>
          </Stack>
        </RadioGroup>
        <Text pb={{ md: 4 }}>
          We will send you an email with instructions on how to reset your
          password.
        </Text>
        <Box borderRadius="none">
          <Input
            type="text"
            placeholder="name@example.com"
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
        <Link color="blue.300">I don't remember my email or phone</Link>
      </Box>
    </Box>
  );
};

export default Helpform;
