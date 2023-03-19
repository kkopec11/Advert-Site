import * as React from "react";
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  HStack,
  Text,
  Divider,
  Flex,
  Center,
  Container,
  VStack,
} from "@chakra-ui/react";
import OneColorText from "../text/OneColorText";

const Navbar = () => {
  return (
    <Center>
      <VStack>
        <HStack paddingTop={3} gap={6}>
          <Text
            fontSize={"22px"}
            fontWeight={500}
            bgColor={"#000000"}
            bgGradient={"linear(to-br,#b15200, #be4ca3)"}
            // _hover={{
            //   bgGradient: "linear(to-br,#b15200, #be4ca3)",
            // }}
            bgClip="text"
          >
            Strona Główna
          </Text>
          <OneColorText>Fotoksiążka</OneColorText>
          <OneColorText>O Nas</OneColorText>
          <OneColorText>Kontakt</OneColorText>
        </HStack>
        <Divider
          width={"100%"}
          orientation="horizontal"
          borderColor={"#000000"}
        />
      </VStack>
    </Center>
  );
};

export default Navbar;
