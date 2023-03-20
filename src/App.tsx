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

export const App = () => (
  <ChakraProvider theme={theme}>
    <ImageBackground imageURL={BackgroundVertical}>
      <HStack justifyContent={"space-between"} width={"95%"}>
        <Box>
          <Logo width={"100%"} height={"100%"} />
        </Box>
        <HStack gap={6}>
          <Text
            fontSize={"18px"}
            bgColor={"#000000"}
            bgGradient={"linear(to-br,#b15200, #be4ca3)"}
            // _hover={{
            //   bgGradient: "linear(to-br,#b15200, #be4ca3)",
            // }}
            bgClip="text"
          >
            Strona Główna
          </Text>
          {/* <OneColorText >Strona Główna</OneColorText> */}
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
          borderColor={"#36231D"}
        />
      </Center>
      <Center paddingTop={10} width={"100%"}>
        <Flex
          // paddingLeft={10}
          flexDirection={"column"}
          width={"70%"}
        >
          <Box
            boxShadow={"dark-lg"}
            borderRadius={"20px"}
            bgColor={"#fff6ef"}
            p={5}
          >
            <Text
              fontSize={"4xl"}
              as={"b"}
              bgClip={"text"}
              bgGradient={"linear(to-br,#b15200, #be4ca3)"}
            >
              Poznaj naszą ofertę:
            </Text>
            <Text paddingTop={5} width={"60%"} color={"gray"}>
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
