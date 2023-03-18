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
} from "@chakra-ui/react";
import { Logo } from "./components/logo/Logo";
import { GradientLogo } from "./components/logo/GradientLogo";
import "./styles.css";
import GradientButton from "./components/buttons/GradientButton";
import OneColorText from "./components/text/OneColorText";
import Background from "../src/assets/backgroundImages/bg1.png";
const showButtons = false;
const stickyHeader = true;

export const App = () => (
  // {"bg":"#FDF4F1","font":"#36231D","icon-gradient-0":"#EB6E00","icon-gradient-1":"#d865bd","slogan":"#4a3731"}

  <ChakraProvider theme={theme}>
    <Box
      fontSize="xl"
      p={5}
      backgroundImage={`url(${Background})`}
      height="full"
      width={"full"}
      backdropBlur={"5px"}
      backdropFilter={"auto"}
    >
      <Center width={"100%"}>
        <HStack
          justifyContent={"space-between"}
          backdropFilter={"auto"}
          backdropBlur={"5px"}
          borderRadius="15px"
          boxShadow={"dark-lg"}
          position={stickyHeader ? "fixed" : "initial"}
          marginTop={stickyHeader ? "100px" : "0px"}
          width={stickyHeader ? "95%" : "100%"}
          zIndex={stickyHeader ? 1 : 0}
        >
          <Box>
            <Logo width={"100%"} height={"100%"} />
          </Box>
          {showButtons ? (
            <HStack gap={50} paddingRight={5}>
              <GradientButton>Strona Główna</GradientButton>
              <GradientButton>Fotoksiążka</GradientButton>
              <GradientButton>O Nas</GradientButton>
              <GradientButton>Kontakt</GradientButton>
            </HStack>
          ) : (
            <HStack gap={50} paddingRight={55}>
              <OneColorText>Strona Główna</OneColorText>
              <OneColorText>Fotoksiążka</OneColorText>
              <OneColorText>O Nas</OneColorText>
              <OneColorText>Kontakt</OneColorText>
            </HStack>
          )}
        </HStack>
      </Center>
      <Center paddingTop={stickyHeader ? 150 : 10}>
        <Box
          borderRadius="15px"
          width={"80%"}
          boxShadow={"dark-lg"}
          backdropFilter={"auto"}
          backdropBlur={"5px"}
        >
          <Center width={"100%"}>
            <Box width={"60%"}>
              <GradientLogo />
            </Box>
          </Center>
          <Container>
            <Text>
              Lorem ipsum dolor sit amet. Non alias commodi nam vitae inventore
              et laboriosam reiciendis et autem nobis sed facilis atque eum
              illum quia quo optio molestiae? In tempora quis sit molestiae
              saepe qui ducimus aliquam. Qui totam unde qui optio nesciunt ut
              dolores unde.
            </Text>
            <Text paddingTop={10} paddingBottom={10}>
              Est quas dignissimos ut sapiente quia ab fuga provident eum autem
              sint non tempore officia. Sed autem dolor vel reprehenderit fuga
              qui vero quasi id voluptate ipsam aut veniam consequatur est
              suscipit optio nam aliquam magnam. Est iure eveniet vel aperiam
              repudiandae in assumenda nihil quo excepturi nihil aut quibusdam
              expedita aut optio dignissimos. Qui odit tempore qui recusandae
              optio in explicabo nemo eos nulla accusamus est galisum facilis ea
              sint odio aut dignissimos beatae.
            </Text>
            <Text paddingBottom={10}>
              Est quas dignissimos ut sapiente quia ab fuga provident eum autem
              sint non tempore officia. Sed autem dolor vel reprehenderit fuga
              qui vero quasi id voluptate ipsam aut veniam consequatur est
              suscipit optio nam aliquam magnam. Est iure eveniet vel aperiam
              repudiandae in assumenda nihil quo excepturi nihil aut quibusdam
              expedita aut optio dignissimos. Qui odit tempore qui recusandae
              optio in explicabo nemo eos nulla accusamus est galisum facilis ea
              sint odio aut dignissimos beatae.
            </Text>
          </Container>
        </Box>
      </Center>
    </Box>
  </ChakraProvider>
);
