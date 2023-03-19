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
import BackgroundText from "../src/assets/backgroundImages/namecheap/bg1.text.sized.png";
import BackgroundTextTop from "../src/assets/backgroundImages/namecheap/bg1.text.top.png";
import BackgroundNoText from "../src/assets/backgroundImages/namecheap/bg1.notext.png";

const Navbar = () => {
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
    <OneColorText>Fotoksiążka</OneColorText>
    <OneColorText>O Nas</OneColorText>
    <OneColorText>Kontakt</OneColorText>
  </HStack>;
};

export const App = () => (
  <ChakraProvider theme={theme}>
    <ImageBackground imageURL={BackgroundNoText}>
      <Center paddingTop={3}>
        <Logo width={"100%"} height={"100%"} />
      </Center>
      <Box
        width={"30%"}
        height={"60%"}
        borderRadius={"12px"}
        zIndex={1}
        position={"absolute"}
        left={20}
        top={40}
        padding={5}
        // bgColor={"red"}
        shadow={"dark-lg"}
        backdropFilter={"auto"}
        backdropBlur={"5px"}
      >
        <Flex flexDirection={"column"}>
          <Text fontSize={"3xl"} as={"b"}>
            Poznaj naszą ofertę:
          </Text>
        </Flex>
        <Text paddingTop={5} width={"80%"} color={"gray"}>
          Non alias commodi nam vitae inventore et laboriosam reiciendis et
          autem nobis sed facilis atque eum.
        </Text>
        <VStack width={"100%"} paddingTop={55}>
          <Text fontSize={"22px"} as={"b"}>
            Sprawdź naszą fotoksiążkę!
          </Text>
          <Center width={"auto"} paddingTop={5}>
            <GradientButton>FOTOKSIĄŻKA</GradientButton>
          </Center>
        </VStack>
      </Box>
      {/* <Center width={"100%"}>
        <Divider
          width={"95%"}
          marginTop={3}
          orientation="horizontal"
          borderColor={"#36231D"}
        />
      </Center>
      <Flex paddingTop={20} paddingLeft={10} flexDirection={"column"}>
        <Text fontSize={"4xl"} as={"b"}>
          Poznaj naszą ofertę:
        </Text>
        <Text paddingTop={5} width={"60%"} color={"gray"}>
          Non alias commodi nam vitae inventore et laboriosam reiciendis et
          autem nobis sed facilis atque eum illum quia quo optio molestiae? In
          tempora quis sit molestiae saepe qui ducimus aliquam.
        </Text>
        <Box width={"60%"}>
          <Text paddingTop={55} fontSize={"22px"}>
            Chcesz obejrzeć naszą fotosiążkę? Kliknij poniżej:
          </Text>
          <Center width={"auto"} paddingTop={5}>
            <GradientButton>FOTOKSIĄŻKA</GradientButton>
          </Center>
        </Box>
      </Flex> */}
    </ImageBackground>
  </ChakraProvider>
);
