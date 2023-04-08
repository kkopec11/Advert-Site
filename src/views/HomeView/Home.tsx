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
  VStack,
  Container,
} from "@chakra-ui/react";
import { Logo } from "../../components/logo/Logo";
import { GradientLogo } from "../../components/logo/GradientLogo";
import GradientButton from "../../components/buttons/GradientButton";
import OneColorText from "../../components/text/OneColorText";
import ImageBackground from "../../components/background/ImageBackground";
import Background from "../../../src/assets/backgroundImages/namecheap/bg1.resized.jpg"; //1-5
import BackgroundText from "../src/assets/backgroundImages/namecheap/bg1.text.sized.png";
import BackgroundVertical from "../src/assets/backgroundImages/namecheap/bg.vertical.png";
import {
  gradientColor1,
  backgroundColor,
  dividerColor,
  fontDefaultColor,
  fontDefaultColor2,
  showMainText,
  gradientColor2,
} from "../../config";
import HomeView from "../../views/HomeView/HomeView";
import { Link } from "react-router-dom";
import NavBar from "../../components/section/NavBar";

const Home = () => {
  return (
    <Box
    // fontSize="xl"
    // p={5}
    // backgroundImage={`url(${Background})`}
    // height="full"
    // width={"full"}
    // backdropBlur={"5px"}
    // backdropFilter={"auto"}
    >
      <Center width={"100%"}>
        <HStack
          justifyContent={"space-between"}
          backgroundColor={"#08f35edc"}
          // backdropFilter={"auto"}
          // backdropBlur={"5px"}
          // borderRadius="15px"
          // boxShadow={"dark-lg"}
          position={"fixed"}
          // paddingTop={"100px"}
          width={"100%"}
          zIndex={1}
        >
          <Box height={"200px"}>
            <Logo width={"100%"} height={"100%"} />
          </Box>

          <HStack gap={50} paddingRight={55}>
            <OneColorText>Strona Główna</OneColorText>
            <OneColorText>Fotoksiążka</OneColorText>
            <OneColorText>O Nas</OneColorText>
            <OneColorText>Kontakt</OneColorText>
          </HStack>
        </HStack>
      </Center>
      {/* <Center paddingTop={150}>
        <Box
          borderRadius="15px"
          width={"80%"}
          boxShadow={"dark-lg"}
          backdropFilter={"auto"}
          backdropBlur={"5px"}
        >
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
        </Box>
      </Center> */}
    </Box>
  );
};

export default Home;
