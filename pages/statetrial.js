import React from "react";
import { Box, Button, Text } from "@chakra-ui/core";
import { useState } from "react";

const statetrial = () => {
  const [count, setCount] = useState(0);
  return (
    <Box>
      <Text>You've clicked me {count} times.</Text>
      <Button
        w={40}
        onClick={() => setCount(count + 1)}
        // title="Click Me"
        color="#fff"
        bg="green.300"
      >
        Click Me
      </Button>
      <br />
      <Button onClick={() => setCount(count - 1)}>Unclick Me</Button>
      <Text>You've unclicked me {count} times</Text>
    </Box>
  );
};

export default statetrial;
