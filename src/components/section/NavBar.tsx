import * as React from "react";
import { HStack, Text } from "@chakra-ui/react";
import OneColorText from "../../components/text/OneColorText";
import { fontDefaultColor, gradientColor2 } from "../../config";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack gap={6}>
      <Link to="/">
        <Text
          fontSize={"18px"}
          bgColor={fontDefaultColor}
          bgGradient={gradientColor2}
          bgClip="text"
        >
          Strona Główna
        </Text>
      </Link>
      <Link to="/fotoksiazka">
        <OneColorText>Fotoksiążka</OneColorText>
      </Link>
      <Link to="/info">
        <OneColorText>O Nas</OneColorText>
      </Link>
      <Link to="/kontakt">
        <OneColorText>Kontakt</OneColorText>
      </Link>
    </HStack>
  );
};

export default NavBar;
