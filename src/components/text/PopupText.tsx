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
} from "../../config";
import GradientButton from "../buttons/GradientButton";

const PopupText = () => {
  return (
    <Flex flexDirection={"column"} width={"70%"}>
      <Box
        boxShadow={"dark-lg"}
        borderRadius={"20px"}
        bgColor={backgroundColor}
        p={5}
      >
        <Text
          fontSize={"4xl"}
          as={"b"}
          bgClip={"text"}
          bgGradient={gradientColor1}
        >
          Poznaj naszą ofertę:
        </Text>
        <Text paddingTop={5} width={"60%"} color={fontDefaultColor2}>
          Non alias commodi nam vitae inventore et laboriosam reiciendis et
          autem nobis sed facilis atque eum illum quia quo optio molestiae? In
          tempora quis sit molestiae saepe qui ducimus aliquam.
        </Text>
        <Center
          width={"100%"}
          flexDirection={"column"}
          color={fontDefaultColor}
        >
          <Text paddingTop={35} fontSize={"20px"} fontWeight={500}>
            Chcesz obejrzeć naszą fotosiążkę? Kliknij poniżej:
          </Text>
          <Center width={"auto"} paddingTop={5}>
            <GradientButton>FOTOKSIĄŻKA</GradientButton>
          </Center>
        </Center>
      </Box>
    </Flex>
  );
};

export default PopupText;
