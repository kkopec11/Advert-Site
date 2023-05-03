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
import GradientButton from "../buttons/GradientButton";
import DivMotion from "../motion/DivMotion";
import { gradientColor1, gradientColor2 } from "../../config";

const Navbar = () => {
  return (
    <Center>
      <VStack>
        <HStack paddingTop={3} gap={6}>
          <DivMotion>
            <Text
              fontSize={"22px"}
              fontWeight={700}
              bgColor={"#FFFFFF"}
              bgGradient={gradientColor1}
              bgClip="text"
            >
              Strona Główna
            </Text>
          </DivMotion>
          <DivMotion>
            <OneColorText>Fotoksiążka</OneColorText>
          </DivMotion>
          <DivMotion>
            <OneColorText>O Nas</OneColorText>
          </DivMotion>
          <DivMotion>
            <OneColorText>Kontakt</OneColorText>
          </DivMotion>
        </HStack>
        <Divider
          width={"100%"}
          orientation="horizontal"
          borderColor={"#ffffff"}
        />
      </VStack>
    </Center>
  );
};

export default Navbar;
