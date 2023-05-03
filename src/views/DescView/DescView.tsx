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
  ListItem,
  ListIcon,
  List,
} from "@chakra-ui/react";
import { gradientColor1, backgroundColor } from "../../config";
import GradientButton from "../../components/buttons/GradientButton";
import PopupText from "../../components/text/PopupText";
import PhoneButton from "../../components/buttons/PhoneButton";
import { GradientGift } from "../../components/icons/GradientGift";
import { QuestionMark } from "../../components/icons/QuestionMark";
import { PhotoIcon } from "../../components/icons/PhotoIcon";
import BuyPhotobook from "../../components/section/BuyPhotobook";
import { GradientArrow } from "../../components/icons/GradientArrow";

const DescView = () => {
  return (
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
        <Text width={"80%"} paddingTop={3}>
          Family Gifts od 2015 roku oferuje wyjątkowe sesje fotograficzne z
          pierwszych dni po narodzinach dziecka realizowane w placówce
          szpitalnej w której przyszło na świat Państwa maleństwo.
        </Text>
        <Text width={"80%"}>
          Sesja fotograficzna w szpitalu i zdjęcia noworodka w objęciach mamy i
          taty są niezwykłą pamiątką z pierwszych dni życia dziecka.
        </Text>
        {/* <Text
          as={"b"}
          bgClip={"text"}
          bgGradient={gradientColor1}
          fontSize={"18px"}
        >
          Sesja fotograficzna w szpitalu i zdjęcia noworodka w objęciach mamy i
          taty są niezwykłą pamiątką z pierwszych dni życia dziecka.
        </Text> */}
        <Text width={"70%"}>
          Placówki, w których od lat są obecni nasi fotografowie:
        </Text>
        <List spacing={1}>
          <ListItem>
            <ListIcon
              as={GradientArrow}
              color="linear(to-br,#FF4CC2, #4ca5ff)"
            />
            Szpital Bielański
          </ListItem>
          <ListItem>
            <ListIcon
              as={GradientArrow}
              color="linear(to-br,#FF4CC2, #4ca5ff)"
            />
            Szpital Bródnowski
          </ListItem>
          <ListItem>
            <ListIcon
              as={GradientArrow}
              color="linear(to-br,#FF4CC2, #4ca5ff)"
            />
            Szpital MSWiA
          </ListItem>
          <ListItem>
            <ListIcon
              as={GradientArrow}
              color="linear-gradient(#FF4CC2, #4ca5ff)"
            />
            IMID
          </ListItem>
          <ListItem>
            <ListIcon
              as={GradientArrow}
              color="linear(to-br,#FF4CC2, #4ca5ff)"
            />
            Inflancka
          </ListItem>
          <ListItem>
            <ListIcon
              as={GradientArrow}
              color="linear(to-br,#FF4CC2, #4ca5ff)"
            />
            Karowa
          </ListItem>
          <ListItem>
            <ListIcon
              as={GradientArrow}
              color="linear(to-br,#FF4CC2, #4ca5ff)"
            />
            UCZKIN
          </ListItem>
        </List>
      </Box>
      <BuyPhotobook />
    </VStack>
  );
};

export default DescView;
