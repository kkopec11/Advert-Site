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
} from "../config";
import { GradientArrow } from "../components/icons/GradientArrow";
import PhoneButton from "../components/buttons/PhoneButton";
import { QuestionMark } from "../components/icons/QuestionMark";
import { GradientGift } from "../components/icons/GradientGift";
import { FaArrowCircleLeft } from "react-icons/fa";

const WhyWe = ({
  view,
  setView,
}: {
  view: string;
  setView: (view: string) => void;
}) => {
  return (
    <Box color={fontDefaultColor} width={"100%"} height={"100%"}>
      <Flex flexDirection={"column"} paddingLeft={5} paddingRight={5}>
        <HStack alignItems={"flex-start"} justifyContent={"space-between"}>
          <Text
            fontSize={"30px"}
            as={"b"}
            bgClip={"text"}
            bgGradient={gradientColor1}
          >
            Dlaczego My?
          </Text>
          <button
            onClick={() => {
              setView("home");
            }}
          >
            <FaArrowCircleLeft color="grey" />
          </button>
        </HStack>
        {/* <Text width={"75%"} paddingTop={1}>
          Budujemy wspomnienia – domowe sesje rodzinne to najpiękniejszy prezent
          dla ludzi, którzy kochają się ponad wszystko.{" "}
          <Text as={"b"} bgClip={"text"} bgGradient={gradientColor1}>
            Uwieczniamy w kadrach Waszą codzienność.
          </Text>
        </Text> */}
        {/* <Text>Sesja zdjęciowa w Waszym domu może być sesją:</Text> */}
        <List spacing={1} paddingTop={1}>
          <ListItem fontSize={"20px"}>
            <ListIcon
              as={GradientArrow}
              color="linear(to-br,#FF4CC2, #4ca5ff)"
            />
            <Text as={"b"} bgClip={"text"} bgGradient={gradientColor1}>
              Doświadczenie{" "}
            </Text>
            <Box fontSize={"16px"} paddingLeft={20}>
              <Text>Działamy na rynku od 8 lat.</Text>
              <Text>Znamy się na tym, co robimy i wciąż się rozwijamy.</Text>
            </Box>
          </ListItem>
          <ListItem fontSize={"20px"}>
            <ListIcon
              as={GradientArrow}
              color="linear(to-br,#FF4CC2, #4ca5ff)"
            />

            <Text as={"b"} bgClip={"text"} bgGradient={gradientColor1}>
              Sprzęt{" "}
            </Text>
            <Box fontSize={"16px"} paddingLeft={20}>
              <Text>
                Mamy dokładnie to, co jest potrzebne do realizacji zlecenia.
              </Text>
              <Text>Sprawdzone i gotowe do działania.</Text>
            </Box>
          </ListItem>
          <ListItem fontSize={"20px"}>
            <ListIcon
              as={GradientArrow}
              color="linear(to-br,#FF4CC2, #4ca5ff)"
            />
            <Text as={"b"} bgClip={"text"} bgGradient={gradientColor1}>
              Wyobraźnia{" "}
            </Text>
            <Box fontSize={"16px"} paddingLeft={20}>
              <Text>
                Wciąż szukamy inspiracji i uczymy się nowych umiejętności.
              </Text>
              <Text>Na zdjęciach jesteście Wy i Wasze emocje.</Text>
            </Box>
          </ListItem>
          <ListItem fontSize={"20px"}>
            <ListIcon
              as={GradientArrow}
              color="linear-gradient(#FF4CC2, #4ca5ff)"
            />
            <Text as={"b"} bgClip={"text"} bgGradient={gradientColor1}>
              Elastyczność{" "}
            </Text>
            <Box fontSize={"16px"} paddingLeft={20}>
              <Text>Dostosowujemy się do sytuacji i waszych potrzeb.</Text>
              <Text>Nie tylko rozmawiamy, ale też słuchamy.</Text>
            </Box>
          </ListItem>
          <ListItem fontSize={"20px"}>
            <ListIcon
              as={GradientArrow}
              color="linear(to-br,#FF4CC2, #4ca5ff)"
            />
            <Text as={"b"} bgClip={"text"} bgGradient={gradientColor1}>
              Rzetelność{" "}
            </Text>
            <Box fontSize={"16px"} paddingLeft={20}>
              <Text>
                Nasi fotografowie to odpowiedzialni pasjonaci, kreatywni i
                estetyczni.
              </Text>
              <Text>
                Ich wysoki poziom rzemiosła sprawia, że współpraca jest
                przyjemnością.
              </Text>
            </Box>
          </ListItem>
        </List>
      </Flex>
    </Box>
  );
};
export default WhyWe;
