import React from "react";
import { Box, Heading, Flex, Text, Icon } from "@chakra-ui/core";
import FAQcard from "../Card/FAQcard";
import Formpack from "../Card/Formpack";

const FAQ = () => {
  return (
    <Box bg="#000" color="#fff" py={{ base: 10, md: 24 }}>
      <Heading
        as="h2"
        fontSize={{ base: "3xl", md: "4xl" }}
        mb={{ base: 4, md: 6 }}
        textAlign="center"
      >
        Frequently Asked Questions
      </Heading>
      <FAQcard
        title="What is Netflix?"
        text={{ base: 16, md: 24 }}
        content="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
      />
      <FAQcard
        title="How much does Netflix cost?"
        text={{ base: 16, md: 24 }}
        content="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from US$7.99 to US$11.99 a month. No extra costs, no contracts."
      />
      <FAQcard
        title="Where can I watch?"
        text={{ base: 16, md: 24 }}
        content="Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
      />
      <FAQcard
        title="How do I cancel?"
        text={24}
        content="Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
      />
      <FAQcard
        title="What can I watch on Netflix?"
        text={24}
        content="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
      />
      <Flex flexDir="column" justify="center" align="center" mt={{ md: 4 }}>
        <Text
          fontSize={{ base: "lg", md: "2xl" }}
          textAlign={{ base: "center" }}
          my={{ base: 4 }}
          px={{ base: 4 }}
        >
          Ready to watch? Enter your email to create or restart your membership.
        </Text>
        <Formpack />
      </Flex>
    </Box>
  );
};

export default FAQ;
