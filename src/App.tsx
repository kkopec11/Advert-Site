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
import { Logo } from "./components/logo/Logo";
import "./styles.css";

export const App = () => (
  // {"bg":"#FDF4F1","font":"#36231D","icon-gradient-0":"#EB6E00","icon-gradient-1":"#F3BCE6","slogan":"#4a3731"}

  <ChakraProvider theme={theme}>
    <Box fontSize="xl" p={5} backgroundColor={"#FFFFFF"} minH="100vh">
      <HStack justifyContent={"space-between"}>
        <Box>
          <Logo width={"100%"} height={"100%"} />
        </Box>
        {true ? (
          <HStack gap={50} paddingRight={5}>
            <Text bgColor={"#F69608"} bgClip="text">
              Strona Główna
            </Text>
            <Text bgColor={"#F69608"} bgClip="text">
              Fotoksiążka
            </Text>
            <Text bgColor={"#F69608"} bgClip="text">
              O Nas
            </Text>
            <Text bgColor={"#F69608"} bgClip="text">
              Kontakt
            </Text>
          </HStack>
        ) : (
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
        )}
      </HStack>
      {true ? (
        <Box
          marginTop={3}
          // p={0.5}
          p={0.3}
          borderRadius="md"
          bgGradient="linear(to-r, #EB6E00, #ee8bd7)"
        />
      ) : (
        <Divider
          marginTop={3}
          orientation="horizontal"
          borderColor={"#36231D"}
        />
      )}
    </Box>
  </ChakraProvider>
);
