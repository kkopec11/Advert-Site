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
import Background from "../src/assets/backgroundImages/bg1.png"; //1-5
const showButtons = false;

export const App = () => (
  // {"bg":"#FDF4F1","font":"#36231D","icon-gradient-0":"#EB6E00","icon-gradient-1":"#d865bd","slogan":"#4a3731"}
  // background: rgb(255,217,246);
  // background: linear-gradient(153deg, rgba(255,217,246,1) 0%, rgba(245,218,218,1) 53%, rgba(255,199,142,0.9920343137254902) 100%);

  <ChakraProvider theme={theme}>
    <Box
      fontSize="xl"
      p={5}
      // backgroundImage={`url(${Background})`}
      height="full"
      width={"full"}
      bgGradient="linear(to-br, rgba(255,217,246,1) 0%, rgba(245,218,218,1) 53%, rgba(255,199,142,0.9920343137254902)100%)"
    >
      <Center width={"100%"}>
        <VStack
          width={"80%"}
          backdropFilter={"auto"}
          backdropBlur={"55px"}
          borderRadius="15px"
          boxShadow={"dark-lg"}
        >
          <HStack justifyContent={"space-between"} width={"100%"}>
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
                <Text
                  fontSize={"22px"}
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
            )}
          </HStack>
          {/* <Center width={"100%"}>
            <Box width={"60%"}>
              <GradientLogo />
            </Box>
          </Center> */}
          <Container>
            <Center paddingTop={10}>
              <Text>Lorem ipsum dolor sit amet.</Text>
            </Center>
            <Text paddingTop={10}>
              Non alias commodi nam vitae inventore et laboriosam reiciendis et
              autem nobis sed facilis atque eum illum quia quo optio molestiae?
              In tempora quis sit molestiae saepe qui ducimus aliquam. Qui totam
              unde qui optio nesciunt ut dolores unde.
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
        </VStack>
      </Center>
      <Center paddingTop={10}>
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
