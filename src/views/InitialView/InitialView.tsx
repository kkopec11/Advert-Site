import * as React from "react";
import { Box, Text, Flex, Center } from "@chakra-ui/react";
import { Logo } from "../../components/logo/Logo";
import ImageBackground from "../../components/background/ImageBackground";
import BackgroundNoText from "../../../src/assets/backgroundImages/namecheap/bg1.notext.png";
import Navbar from "../../components/navbar/Navbar";
import DivMotion from "../../components/motion/DivMotion";
import { BsChevronDoubleDown } from "react-icons/bs";
import { gradientColor1 } from "../../config";

const InitialView = () => {
  return (
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
        <Text fontSize={"70px"} paddingRight={550} color={"#000000"}>
          Tworzymy
        </Text>
        <Text
          fontSize={"120px"}
          fontWeight={600}
          paddingLeft={250}
          bgClip={"text"}
          //   bgGradient={gradientColor1}
          color={"#4ca5ff"}
          //   color={"#FF4CC2"}
        >
          WSPOMNIENIA
        </Text>
      </Center>
      <Center width={"100%"} height={"45%"} color={"white"}>
        <DivMotion>
          <BsChevronDoubleDown size={"85px"} />
        </DivMotion>
      </Center>
    </ImageBackground>
  );
};

export default InitialView;
