import React, { useState } from "react";
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
import { gradientColor1, backgroundColor } from "../../config";
import GradientButton from "../../components/buttons/GradientButton";
import PopupText from "../../components/text/PopupText";
import PhoneButton from "../../components/buttons/PhoneButton";
import { GradientGift } from "../../components/icons/GradientGift";
import { QuestionMark } from "../../components/icons/QuestionMark";
import { PhotoIcon } from "../../components/icons/PhotoIcon";
import BuyPhotobook from "../../components/section/BuyPhotobook";

const MainView = () => {
  return (
    <>
      <VStack>
        <Box borderRadius={"20px"} bgColor={backgroundColor} p={5}>
          <Text
            fontSize={"4xl"}
            as={"b"}
            bgClip={"text"}
            bgGradient={gradientColor1}
          >
            Budujemy wspomnienia
          </Text>
          <Text width={"80%"} paddingTop={5}>
            Domowe sesje rodzinne to najpiękniejszy prezent dla ludzi, którzy
            kochają się ponad wszystko.{" "}
          </Text>
          <Text
            as={"b"}
            bgClip={"text"}
            bgGradient={gradientColor1}
            fontSize={"18px"}
          >
            Uwieczniamy w kadrach Waszą codzienność.
          </Text>
          <Text width={"70%"}>
            Wspólna zabawa, przytulanie, wygłupy uchwycone na zdjęciach będą dla
            Was pamiątką, do której z przyjemnością wracać będziecie po latach i
            niezapomniane chwile zostaną z Wami na zawsze.
          </Text>
        </Box>
      </VStack>
    </>
  );
};

export default MainView;
