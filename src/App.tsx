import * as React from "react";
import {
  ChakraProvider,
  Box,
  theme,
  Text,
  Flex,
  Center,
  VStack,
} from "@chakra-ui/react";
import { Logo } from "./components/logo/Logo";
import "./styles.css";
import GradientButton from "./components/buttons/GradientButton";
import ImageBackground from "./components/background/ImageBackground";
import BackgroundText from "../src/assets/backgroundImages/namecheap/bg1.text.sized.png";
import BackgroundTextTop from "../src/assets/backgroundImages/namecheap/bg1.text.top.png";
import BackgroundNoText from "../src/assets/backgroundImages/namecheap/bg1.notext.png";
import BackgroundPink from "../src/assets/backgroundImages/namecheap/bg.pink.png";
import BackgroundOrange from "../src/assets/backgroundImages/namecheap/bg.orange.jpg";
import Navbar from "./components/navbar/Navbar";
import DivMotion from "./components/motion/DivMotion";
import { BsChevronDoubleDown } from "react-icons/bs";
import { gradientColor1 } from "./config";

export const App = () => (
  <ChakraProvider theme={theme}>
    <ImageBackground imageURL={BackgroundNoText}>
      <Flex width={"100%"} justifyContent={"space-between"}>
        <Box width={"25%"}>
          <Logo width={"100%"} height={"100%"} />
        </Box>
        <Box paddingRight={20}>
          <Navbar />
        </Box>
      </Flex>
      <Center color={"#FFFFFF"} flexDirection={"column"}>
        <Text fontSize={"70px"} paddingRight={550}>
          Tworzymy
        </Text>
        <Text
          fontSize={"120px"}
          fontWeight={600}
          paddingLeft={250}
          bgClip={"text"}
          bgGradient={gradientColor1}
        >
          WSPOMNIENIA
        </Text>
      </Center>
      <Center
        width={"100%"}
        height={"25%"}
        // borderRadius={"12px"}
        zIndex={1}
        position={"absolute"}
        // left={500}
        // top={500}
        // padding={1}
        // shadow={"dark-lg"}
        // backdropFilter={"auto"}
        // backdropBlur={"5px"}
        color={"white"}
      >
        <DivMotion>
          <BsChevronDoubleDown size={"55px"} />
        </DivMotion>
      </Center>
    </ImageBackground>
    {/* <DivMotion> */}
    <Box
      width={"30%"}
      height={"170px"}
      borderRadius={"12px"}
      zIndex={1}
      position={"absolute"}
      left={50}
      top={400}
      padding={1}
      shadow={"dark-lg"}
      backdropFilter={"auto"}
      backdropBlur={"5px"}
    >
      <VStack width={"100%"} paddingTop={5}>
        <Text fontSize={"22px"} as={"b"} color={"white"}>
          Sprawdź naszą fotoksiążkę!
        </Text>
        <Center width={"auto"} paddingTop={5}>
          <DivMotion>
            <GradientButton>FOTOKSIĄŻKA</GradientButton>
          </DivMotion>
        </Center>
      </VStack>
    </Box>

    <Center paddingTop={20} flexDirection="column" width={"100%"}>
      <VStack width={"60%"}>
        <Text
          fontSize={"28px"}
          fontWeight={700}
          bgGradient={gradientColor1}
          bgClip="text"
          paddingTop={10}
        >
          Lorem ipsum dolor sit amet.
        </Text>
        <Text paddingTop={10} paddingBottom={10}>
          Non alias commodi nam vitae inventore et laboriosam reiciendis et
          autem nobis sed facilis atque eum illum quia quo optio molestiae? In
          tempora quis sit molestiae saepe qui ducimus aliquam. Qui totam unde
          qui optio nesciunt ut dolores unde.
        </Text>
        <Text>
          Non alias commodi nam vitae inventore et laboriosam reiciendis et
          autem nobis sed facilis atque eum illum quia quo optio molestiae? In
          tempora quis sit molestiae saepe qui ducimus aliquam. Qui totam unde
          qui optio nesciunt ut dolores unde.
        </Text>
        <Text paddingTop={10} paddingBottom={10}>
          Non alias commodi nam vitae inventore et laboriosam reiciendis et
          autem nobis sed facilis atque eum illum quia quo optio molestiae? In
          tempora quis sit molestiae saepe qui ducimus aliquam. Qui totam unde
          qui optio nesciunt ut dolores unde.
        </Text>
      </VStack>
    </Center>
    {/* </DivMotion> */}
  </ChakraProvider>
);
