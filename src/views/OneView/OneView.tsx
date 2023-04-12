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
import Sessions from "../HomeView/components/Sessions";
import WhyWe from "../HomeView/components/WhyWe";
import BuyPhotobook from "../../components/section/BuyPhotobook";

const OneView = () => {
  return (
    <Box>
      <Center width={"100%"}>
        <HStack
          justifyContent={"space-between"}
          backdropFilter={"auto"}
          backdropBlur={"15px"}
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
      <Box paddingTop={100}>
        <MainView />
        <Sessions />
        <WhyWe />
        <BuyPhotobook />
      </Box>
    </Box>
  );
};

export default OneView;
