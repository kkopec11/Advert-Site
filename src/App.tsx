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
import GradientText from "./components/text/GradientText";

export const App = () => (
  // {"bg":"#FDF4F1","font":"#36231D","icon-gradient-0":"#EB6E00","icon-gradient-1":"#F3BCE6","slogan":"#4a3731"}

  <ChakraProvider theme={theme}>
    <Box
      fontSize="xl"
      p={5}
      bgGradient="linear(to-br, #EB6E00, #F3BCE6)"
      minH="100vh"
    >
      <HStack
        // position="fixed"
        justifyContent={"space-between"}
        backgroundColor={"#ffffff"}
        border="4px"
        borderColor="#ffffff"
        borderRadius="15px"
      >
        <Box>
          <Logo width={"100%"} height={"100%"} />
        </Box>
        {false ? (
          <HStack gap={50} paddingRight={5}>
            <GradientButton>Strona Główna</GradientButton>
            <GradientButton>Fotoksiążka</GradientButton>
            <GradientButton>O Nas</GradientButton>
            <GradientButton>Kontakt</GradientButton>
          </HStack>
        ) : (
          <HStack gap={50} paddingRight={55}>
            <GradientText>Strona Główna</GradientText>
            <GradientText>Fotoksiążka</GradientText>
            <GradientText>O Nas</GradientText>
            <GradientText>Kontakt</GradientText>
          </HStack>
        )}
      </HStack>
      <Center paddingTop={10}>
        <Box
          backgroundColor={"#ffffff"}
          border="4px"
          borderColor="#ffffff"
          borderRadius="15px"
          width={"80%"}
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
          </Container>
        </Box>
      </Center>
    </Box>
  </ChakraProvider>
);
