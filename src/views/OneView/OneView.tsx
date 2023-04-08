import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Fonts from "../../Fonts";
import "@fontsource/linden-hill";
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
  VStack,
  Container,
} from "@chakra-ui/react";
import { Logo } from "../../components/logo/Logo";
import OneColorText from "../../components/text/OneColorText";
import MainView from "./MainView";

const OneView = () => {
  return (
    <Box>
      <Center width={"100%"}>
        <HStack
          justifyContent={"space-between"}
          backdropFilter={"auto"}
          backdropBlur={"5px"}
          position={"fixed"}
          paddingTop={100}
          width={"100%"}
          zIndex={1}
          borderBottom={"1px"}
          borderColor={"black"}
        >
          <Box>
            <Logo width={"100%"} height={"100%"} />
          </Box>

          <HStack gap={50} paddingRight={55}>
            <OneColorText>Sesje Domowe</OneColorText>
            <OneColorText>Fotoksiążka</OneColorText>
            <OneColorText>O Nas</OneColorText>
            <OneColorText>Kontakt</OneColorText>
          </HStack>
        </HStack>
      </Center>
      <Center paddingTop={150}>
        <MainView />
      </Center>
    </Box>
  );
};

export default OneView;
