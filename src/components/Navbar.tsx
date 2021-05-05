import { Flex, Link, Spacer, Text } from "@chakra-ui/layout";
import React from "react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

const Navbar = () => {
  return (
    <Flex>
      <Link href="/" ml="5" pb="5" fontSize="3xl">
        Ice-and-fire-explorer
      </Link>
      <Spacer />
      <ColorModeSwitcher />
    </Flex>
  );
};

export default Navbar;
