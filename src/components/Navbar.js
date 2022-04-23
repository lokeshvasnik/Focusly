import React from "react";
import Badge from "./Badge";
import {Box, Flex, Heading, useColorMode} from "@chakra-ui/react";

export default function Navbar() {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <>
      <Box bg={"gray.100"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Heading href={"/"}>Focusly</Heading>
          </Box>
          <Flex alignItems={"center"}>
            <Badge />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
