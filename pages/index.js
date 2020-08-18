import Head from "next/head";
import { Box } from "@chakra-ui/core";
import Landing from "../components/Home/Landing";
import Enjoy from "../components/Enjoy";
import Download from "../components/Home/Download";
import Watch from "../components/Home/Download";

export default function Home() {
  return (
    <Box>
      <Landing />
      <Enjoy />
      <Download />
      <Watch />
    </Box>
  );
}
