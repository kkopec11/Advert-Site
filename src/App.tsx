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
import { Logo } from "./components/logo/Logo";
import { GradientLogo } from "./components/logo/GradientLogo";
import "./styles.css";
import GradientButton from "./components/buttons/GradientButton";
import OneColorText from "./components/text/OneColorText";
import ImageBackground from "./components/background/ImageBackground";
import Background from "../src/assets/backgroundImages/namecheap/bg1.resized.jpg"; //1-5
import BackgroundText from "../src/assets/backgroundImages/namecheap/bg1.text.sized.png";
import BackgroundVertical from "../src/assets/backgroundImages/namecheap/bg.vertical.png";
import {
  gradientColor1,
  backgroundColor,
  dividerColor,
  fontDefaultColor,
  fontDefaultColor2,
  showMainText,
  gradientColor2,
} from "./config";
import MainText from "./components/text/MainText";
import PopupText from "./components/text/PopupText";

export const App = () => (
  <ChakraProvider theme={theme}>
    <ImageBackground imageURL={Background}>
      <HStack justifyContent={"space-between"} width={"95%"}>
        <Box>
          <Logo width={"100%"} height={"100%"} />
        </Box>
        <HStack gap={6}>
          <Text
            fontSize={"18px"}
            bgColor={fontDefaultColor}
            bgGradient={gradientColor2}
            bgClip="text"
          >
            Strona Główna
          </Text>
          <OneColorText>Fotoksiążka</OneColorText>
          <OneColorText>O Nas</OneColorText>
          <OneColorText>Kontakt</OneColorText>
        </HStack>
      </HStack>
      <Center width={"100%"}>
        <Divider
          width={"95%"}
          marginTop={3}
          marginBottom={3}
          orientation="horizontal"
          borderColor={dividerColor}
        />
      </Center>
      <Center width={"100%"}>
        {showMainText ? <MainText /> : <PopupText />}
      </Center>
    </ImageBackground>
  </ChakraProvider>
);
