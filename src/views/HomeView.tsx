import React from "react";
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
import {
  gradientColor1,
  backgroundColor,
  dividerColor,
  fontDefaultColor,
  fontDefaultColor2,
} from "../config";
import GradientButton from "../components/buttons/GradientButton";
import MainText from "../components/text/MainText";
import PopupText from "../components/text/PopupText";
import PhoneButton from "../components/buttons/PhoneButton";
import { GradientGift } from "../components/icons/GradientGift";
import { QuestionMark } from "../components/icons/QuestionMark";
import { PhotoIcon } from "../components/icons/PhotoIcon";

const HomeView = () => {
  return (
    <VStack>
      <VStack>
        <Box borderRadius={"20px"} bgColor={backgroundColor} p={5}>
          <Text
            fontSize={"4xl"}
            as={"b"}
            bgClip={"text"}
            bgGradient={gradientColor1}
          >
            Fotoksiążki oraz sesje domowe
          </Text>
          <Text width={"80%"} paddingTop={5}>
            Budujemy wspomnienia – domowe sesje rodzinne to najpiękniejszy
            prezent dla ludzi, którzy kochają się ponad wszystko.{" "}
            <Text as={"b"} bgClip={"text"} bgGradient={gradientColor1}>
              Uwieczniamy w kadrach Waszą codzienność.
            </Text>
          </Text>
          <Text width={"70%"}>
            Wspólna zabawa, przytulanie, wygłupy uchwycone na zdjęciach będą dla
            Was pamiątką, do której z przyjemnością wracać będziecie po latach i
            niezapomniane chwile zostaną z Wami na zawsze.
          </Text>
          <Flex gap={1} paddingTop={1}>
            <Text fontWeight={500}>
              Dowiedz się więcej o naszej ofercie
              <Text as={"b"} bgClip={"text"} bgGradient={gradientColor1}>
                {" "}
                sesji domowych.
              </Text>
            </Text>
            <button>
              <Box width={"30px"}>
                <PhotoIcon />
              </Box>
            </button>
          </Flex>
          <Flex gap={1} paddingTop={1}>
            <Text fontWeight={500}>Dlaczego my?</Text>
            <button>
              <Box width={"30px"}>
                <QuestionMark />
              </Box>
            </button>
          </Flex>
        </Box>
      </VStack>
      <Center
        width={"100%"}
        flexDirection={"column"}
        color={fontDefaultColor}
        paddingTop={5}
      >
        <Text fontSize={"20px"} fontWeight={500}>
          Chcesz obejrzeć naszą przykładową
          <Text as={"b"} bgClip={"text"} bgGradient={gradientColor1}>
            {" "}
            fotosiążkę
          </Text>
          ? Kliknij poniżej:
        </Text>
        <Center width={"auto"} paddingTop={5}>
          <GradientButton>FOTOKSIĄŻKA</GradientButton>
        </Center>
      </Center>
      {/* {false ? <MainText /> : <PopupText />} */}
    </VStack>
  );
};

export default HomeView;
