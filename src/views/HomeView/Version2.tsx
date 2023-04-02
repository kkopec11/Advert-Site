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
import {
  gradientColor1,
  backgroundColor,
  dividerColor,
  fontDefaultColor,
  fontDefaultColor2,
} from "../../config";
import GradientButton from "../../components/buttons/GradientButton";
import PopupText from "../../components/text/PopupText";
import PhoneButton from "../../components/buttons/PhoneButton";
import { GradientGift } from "../../components/icons/GradientGift";
import { QuestionMark } from "../../components/icons/QuestionMark";
import { PhotoIcon } from "../../components/icons/PhotoIcon";
import BuyPhotobook from "../../components/section/BuyPhotobook";

const Version2 = ({
  view,
  setView,
}: {
  view: string;
  setView: (view: string) => void;
}) => {
  return (
    <>
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
          Budujemy wspomnienia – domowe sesje rodzinne to najpiękniejszy prezent
          dla ludzi, którzy kochają się ponad wszystko.{" "}
          <Text as={"b"} bgClip={"text"} bgGradient={gradientColor1}>
            Uwieczniamy w kadrach Waszą codzienność.
          </Text>
        </Text>
        <Text width={"70%"}>
          Wspólna zabawa, przytulanie, wygłupy uchwycone na zdjęciach będą dla
          Was pamiątką, do której z przyjemnością wracać będziecie po latach.
        </Text>
      </Box>
      <HStack
        fontWeight={700}
        fontSize={"26px"}
        width="100%"
        justifyContent={"center"}
        alignItems={"flex-end"}
        gap={10}
      >
        <HStack paddingTop={5}>
          <Text>Sesje Domowe</Text>
          <button
            onClick={() => {
              setView("sessions");
            }}
          >
            <Box width={"30px"}>
              <PhotoIcon />
            </Box>
          </button>
        </HStack>
        <HStack>
          <Text>Dlaczego my?</Text>
          <button
            onClick={() => {
              setView("whywe");
            }}
          >
            <Box width={"30px"}>
              <QuestionMark />
            </Box>
          </button>
        </HStack>
      </HStack>
      <Box paddingTop={5}>
        <BuyPhotobook />
      </Box>{" "}
    </>
  );
};

export default Version2;
