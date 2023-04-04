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
  VStack,
} from "@chakra-ui/react";
import { Logo } from "../../components/logo/Logo";
import { GradientLogo } from "../../components/logo/GradientLogo";
import GradientButton from "../../components/buttons/GradientButton";
import OneColorText from "../../components/text/OneColorText";
import ImageBackground from "../../components/background/ImageBackground";
import Background from "../../../src/assets/backgroundImages/namecheap/bg1.resized.jpg"; //1-5
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
} from "../../config";
import HomeView from "../../views/HomeView/HomeView";
import Container from "./components/Container";
import { Link } from "react-router-dom";
import NavBar from "../../components/section/NavBar";

const Home = () => {
  return (
    <ImageBackground imageURL={Background}>
      <HStack justifyContent={"space-between"} width={"95%"}>
        <Box>
          <Logo width={"100%"} height={"100%"} />
        </Box>
        <NavBar />
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
        <Container />
      </Center>
    </ImageBackground>
  );
};

export default Home;
