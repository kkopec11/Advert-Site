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
} from "@chakra-ui/react";
// import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./components/logo/Logo";
import { GradientLogo } from "./components/logo/GradientLogo";
import Gallery from "./components/gallery/Gallery";
import "./styles.css";

export const App = () => (
  // {"bg":"#FDF4F1","font":"#36231D","icon-gradient-0":"#EB6E00","icon-gradient-1":"#F3BCE6","slogan":"#4a3731"}

  <ChakraProvider theme={theme}>
    <Box fontSize="xl" p={5} backgroundColor={"#FDF4F1"} minH="100vh">
      {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
      <HStack justifyContent={"space-between"}>
        <Box>
          <Logo width={"100%"} height={"100%"} />
        </Box>
        <HStack gap={50} paddingRight={5}>
          <Text bgGradient="linear(to-l, #ee8bd7, #EB6E00)" bgClip="text">
            Strona Główna
          </Text>
          <Text bgGradient="linear(to-l, #ee8bd7, #EB6E00)" bgClip="text">
            Fotoksiążka
          </Text>
          <Text bgGradient="linear(to-l, #ee8bd7, #EB6E00)" bgClip="text">
            O Nas
          </Text>
          <Text bgGradient="linear(to-l, #ee8bd7, #EB6E00)" bgClip="text">
            Kontakt
          </Text>
        </HStack>
      </HStack>
      <Divider marginTop={3} orientation="horizontal" borderColor={"#36231D"} />
      {/* <Logo /> */}
      {/* <GradientLogo /> */}
      {/* <Center width={"60%"} paddingTop={50} paddingBottom={100}>
        <Gallery />
      </Center> */}
      {/* <Center width={"100%"} paddingTop={50} paddingBottom={100}>
        <Center width={"60%"}>
          <Gallery />
        </Center>
      </Center> */}
      {/* <Center width={"100%"} paddingTop={50} paddingBottom={100}>
        <Center width={"60%"}>
          <div className="example-container">
            <Gallery />
          </div>
        </Center>
      </Center> */}
    </Box>
  </ChakraProvider>
);
