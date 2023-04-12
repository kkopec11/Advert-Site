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
  VStack,
} from "@chakra-ui/react";
import {
  gradientColor1,
  backgroundColor,
  dividerColor,
  fontDefaultColor,
  fontDefaultColor2,
} from "../../../config";
import GradientButton from "../../../components/buttons/GradientButton";
import PopupText from "../../../components/text/PopupText";
import PhoneButton from "../../../components/buttons/PhoneButton";
import { GradientGift } from "../../../components/icons/GradientGift";
import { QuestionMark } from "../../../components/icons/QuestionMark";
import { PhotoIcon } from "../../../components/icons/PhotoIcon";
import HomeView from "../HomeView";
import Sessions from "./Sessions";
import WhyWe from "./WhyWe";

const Container = () => {
  const [view, setView] = useState("home");

  return (
    <>
      {view === "home" && <HomeView view={view} setView={setView} />}
      {view === "sessions" && <Sessions />}
      {view === "whywe" && <WhyWe />}
    </>
    //: (
    // <Offers/>
    // )}
    //   {/* {false ? <MainText /> : <PopupText />} */}
  );
};

export default Container;
