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
} from "./config";

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
            bgGradient={gradientColor1}
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
          orientation="horizontal"
          borderColor={dividerColor}
        />
      </Center>
      <Center paddingTop={10} width={"100%"}>
        <Flex flexDirection={"column"} width={"70%"}>
          <Box
            boxShadow={"dark-lg"}
            borderRadius={"20px"}
            bgColor={backgroundColor}
            p={5}
          >
            <Text
              fontSize={"4xl"}
              as={"b"}
              bgClip={"text"}
              bgGradient={gradientColor1}
            >
              Poznaj naszą ofertę:
            </Text>
            <Text paddingTop={5} width={"60%"} color={fontDefaultColor2}>
              Non alias commodi nam vitae inventore et laboriosam reiciendis et
              autem nobis sed facilis atque eum illum quia quo optio molestiae?
              In tempora quis sit molestiae saepe qui ducimus aliquam.
            </Text>
            <Center width={"100%"} flexDirection={"column"}>
              <Text paddingTop={35} fontSize={"20px"} fontWeight={500}>
                Chcesz obejrzeć naszą fotosiążkę? Kliknij poniżej:
              </Text>
              <Center width={"auto"} paddingTop={5}>
                <GradientButton>FOTOKSIĄŻKA</GradientButton>
              </Center>
            </Center>
          </Box>
        </Flex>
      </Center>
    </ImageBackground>
  </ChakraProvider>
);
