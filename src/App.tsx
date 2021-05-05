import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box
      margin="0 auto"
      maxWidth={1200}
      transition="0.5s ease-out"
      fontSize="lg"
      mt="1em"
    >
      <Navbar />
      <Content />
    </Box>
  </ChakraProvider>
);
