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
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import {
  gradientColor1,
  backgroundColor,
  dividerColor,
  fontDefaultColor,
  fontDefaultColor2,
} from "../../../../config";
import GradientButton from "../../../../components/buttons/GradientButton";
import PopupText from "../../../../components/text/PopupText";
import PhoneButton from "../../../../components/buttons/PhoneButton";
import { GradientGift } from "../../../../components/icons/GradientGift";
import { QuestionMark } from "../../../../components/icons/QuestionMark";
import { PhotoIcon } from "../../../../components/icons/PhotoIcon";
import BuyPhotobook from "../../../../components/section/BuyPhotobook";
import { PhotobookIcon } from "../../../../components/icons/PhotobookIcon";
import { GradientArrow } from "../../../../components/icons/GradientArrow";

const Version5 = ({
  view,
  setView,
}: {
  view: string;
  setView: (view: string) => void;
}) => {
  return (
    <>
      <VStack borderRadius={"20px"} bgColor={backgroundColor} p={5}>
        <HStack>
          <Text
            fontSize={"4xl"}
            as={"b"}
            bgClip={"text"}
            bgGradient={gradientColor1}
          >
            Budujemy Wspomnienia
          </Text>
        </HStack>
        <Text width={"80%"} paddingTop={5} textAlign="center">
          Domowe sesje rodzinne to najpiękniejszy prezent dla ludzi, którzy
          kochają się ponad wszystko.{" "}
          <Text as={"b"} bgClip={"text"} bgGradient={gradientColor1}>
            Uwieczniamy w kadrach Waszą codzienność.
          </Text>{" "}
          Wspólna zabawa, przytulanie, wygłupy uchwycone na zdjęciach będą dla
          Was pamiątką, do której z przyjemnością wracać będziecie po latach.
        </Text>
      </VStack>
      <List spacing={10} fontSize="3xl" paddingTop={5}>
        <ListItem>
          <HStack alignItems={"flex-end"}>
            <button
              onClick={() => {
                setView("sessions");
              }}
            >
              <ListIcon
                as={GradientArrow}
                color="linear(to-br,#FF4CC2, #4ca5ff)"
              />
              <Text as={"b"} bgClip={"text"} bgGradient={gradientColor1}>
                Sesje Domowe
              </Text>
            </button>
          </HStack>
        </ListItem>
        <ListItem justifyContent={"center"} alignItems="center">
          <HStack alignItems={"flex-end"}>
            <button
              onClick={() => {
                setView("whywe");
              }}
            >
              <ListIcon
                as={GradientArrow}
                color="linear(to-br,#FF4CC2, #4ca5ff)"
              />
              <Text as={"b"} bgClip={"text"} bgGradient={gradientColor1}>
                Dlaczego my?
              </Text>

              {/* <Box>
                  <QuestionMark />
                </Box> */}
            </button>
          </HStack>
        </ListItem>
      </List>
    </>
  );
};

export default Version5;
