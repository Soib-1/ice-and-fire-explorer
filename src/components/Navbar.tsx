import { Flex, Spacer, Text } from "@chakra-ui/layout";
import React from "react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

const Navbar = () => {
  return (
    <Flex>
      <Text>Ice-and-fire-explorer</Text>
      <Spacer />
      <ColorModeSwitcher />
    </Flex>
  );
};

export default Navbar;
