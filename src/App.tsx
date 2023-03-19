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
    </ImageBackground>
  </ChakraProvider>
);
