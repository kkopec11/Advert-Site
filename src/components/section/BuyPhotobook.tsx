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

const BuyPhotobook = () => {
  return (
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
  );
};

export default BuyPhotobook;
