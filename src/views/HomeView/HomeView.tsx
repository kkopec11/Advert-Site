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
import Version1 from "./components/versions/Version1";
import Version2 from "./components/versions/Version2";
import Version3 from "./components/versions/Version3";
import Version4 from "./components/versions/Version4";
import Version5 from "./components/versions/Version5";
import Version6 from "./components/versions/Version6";

let version = "version1"; // V: 1 - 6

const HomeView = ({
  view,
  setView,
}: {
  view: string;
  setView: (view: string) => void;
}) => {
  return (
    <VStack>
      {version === "version1" && <Version1 view={view} setView={setView} />}
      {version === "version2" && <Version2 view={view} setView={setView} />}
      {version === "version3" && <Version3 view={view} setView={setView} />}
      {version === "version4" && <Version4 view={view} setView={setView} />}
      {version === "version5" && <Version5 view={view} setView={setView} />}
      {version === "version6" && <Version6 view={view} setView={setView} />}
    </VStack>
  );
};

export default HomeView;
