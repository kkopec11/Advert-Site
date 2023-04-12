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
  ListItem,
  ListIcon,
  List,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import {
  gradientColor1,
  backgroundColor,
  dividerColor,
  fontDefaultColor,
} from "../../../config";
import { GradientArrow } from "../../../components/icons/GradientArrow";
import PhoneButton from "../../../components/buttons/PhoneButton";
import { QuestionMark } from "../../../components/icons/QuestionMark";
import { GradientGift } from "../../../components/icons/GradientGift";
import { FaArrowCircleLeft } from "react-icons/fa";

const Sessions = ({}: {}) => {
  return (
    <Box color={fontDefaultColor}>
      <Flex flexDirection={"column"} padding={5}>
        <HStack alignItems={"flex-start"}>
          <Text
            fontSize={"28px"}
            as={"b"}
            bgClip={"text"}
            bgGradient={gradientColor1}
          >
            Sesja domowa rodzinna – 12 ujęć po obróbce (900zł brutto)
          </Text>
        </HStack>
        <Text width={"75%"} paddingTop={1}>
          {/* Budujemy wspomnienia – domowe sesje rodzinne to najpiękniejszy prezent
          dla ludzi, którzy kochają się ponad wszystko.{" "} */}
          <Text>Uwieczniamy w kadrach Waszą codzienność.</Text>
          {/* Dla sesji poza Warszawą doliczany jest koszt dojazdu fotografa. (Szczegóły i stawkę
              ustalamy wtedy indywidualnie – nie bójcie się pytać, udało nam się to
              już nie raz!) Ceny zawierają czas pracy podczas sesji oraz przy post
              produkcji zdjęć, doświadczenie i talent fotografa, podatek VAT. */}
          {/* Istnieje możliwość dokupienia ujęć poza limitem oferty za dodatkową
              opłatą. Przyjmujemy również zamówienia sesji rodzinnych w prezencie
              dla bliskich.  */}
        </Text>

        <Text>Sesja zdjęciowa w Waszym domu może być sesją:</Text>
        <List spacing={1}>
          <ListItem>
            <ListIcon
              as={GradientArrow}
              color="linear(to-br,#FF4CC2, #4ca5ff)"
            />
            Noworodkową
          </ListItem>
          <ListItem>
            <ListIcon
              as={GradientArrow}
              color="linear(to-br,#FF4CC2, #4ca5ff)"
            />
            Ciążową
          </ListItem>
          <ListItem>
            <ListIcon
              as={GradientArrow}
              color="linear(to-br,#FF4CC2, #4ca5ff)"
            />
            Z dziećmi w różnym wieku
          </ListItem>
          <ListItem>
            <ListIcon
              as={GradientArrow}
              color="linear-gradient(#FF4CC2, #4ca5ff)"
            />
            Z dziadkami
          </ListItem>
          <ListItem>
            <ListIcon
              as={GradientArrow}
              color="linear(to-br,#FF4CC2, #4ca5ff)"
            />
            Ze zwierzętami - psami i kotami
          </ListItem>
        </List>
        <Box width={"78%"}>
          {/* <Text paddingTop={1}>
                Wspólna zabawa, przytulanie, wygłupy uchwycone na zdjęciach będą
                <Text as={"b"} bgClip={"text"} bgGradient={gradientColor1}>
                  {" "}
                  Waszą pamiątką,{" "}
                </Text>
              </Text> */}
          <Box gap={20}>
            <Text paddingTop={1.5} fontWeight={500}>
              Efektem sesji jest 12 ujęć w formie cyfrowej po obróbce.
            </Text>
            <Text paddingTop={1.5}>
              Ceny zawierają czas pracy podczas sesji oraz przy post
              produkcji zdjęć, doświadczenie i talent fotografa, podatek VAT.
            </Text>
            <Text paddingTop={1.5}>
              Cena dotyczy sesji na terenie Warszawy. Dla sesji poza Warszawą
              doliczany jest koszt dojazdu fotografa.
            </Text>
            <Text fontWeight={500} paddingTop={1.5} paddingBottom={1.5}>
              Szczegóły i stawkę ustalamy wtedy indywidualnie – nie bójcie się
              pytać, udało nam się to już nie raz!
            </Text>
            <Text
              as={"b"}
              bgClip={"text"}
              bgGradient={gradientColor1}
              fontSize={"18px"}
            >
              Przyjmujemy również zamówienia sesji rodzinnych w prezencie dla
              bliskich.
            </Text>
            <Text paddingTop={1.5}>
              Istnieje możliwość dokupienia ujęć poza limitem oferty za
              dodatkową opłatą.
            </Text>
          </Box>
        </Box>
      </Flex>
      <Center flexDirection={"column"} paddingTop={2}>
        <Text>
          Zarezerwuj termin swojej sesji – zadzwoń tel.{" "}
          {
            <>
              <PhoneButton>501179244</PhoneButton>
            </>
          }{" "}
          lub {<PhoneButton>512398297</PhoneButton>}
        </Text>
      </Center>
    </Box>
  );
};
export default Sessions;
