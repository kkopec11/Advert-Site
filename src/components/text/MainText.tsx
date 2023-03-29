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
} from "../.././config";
import { GradientArrow } from "../icons/GradientArrow";
import PhoneButton from "../buttons/PhoneButton";
import { QuestionMark } from "../icons/QuestionMark";
import { GradientGift } from "../icons/GradientGift";

const MainText = () => {
  return (
    <Box color={fontDefaultColor}>
      <Flex flexDirection={"column"} padding={5}>
        <Text
          fontSize={"28px"}
          as={"b"}
          bgClip={"text"}
          bgGradient={gradientColor1}
        >
          Sesja domowa rodzinna – 12 ujęć po obróbce (900zł brutto)
        </Text>
        <Text width={"75%"} paddingTop={1}>
          Budujemy wspomnienia – domowe sesje rodzinne to najpiękniejszy prezent
          dla ludzi, którzy kochają się ponad wszystko.{" "}
          <Text as={"b"} bgClip={"text"} bgGradient={gradientColor1}>
            Uwieczniamy w kadrach Waszą codzienność.
          </Text>
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
          <Text paddingTop={1}>
            Wspólna zabawa, przytulanie, wygłupy uchwycone na zdjęciach będą
            <Text as={"b"} bgClip={"text"} bgGradient={gradientColor1}>
              {" "}
              Waszą pamiątką,{" "}
            </Text>
            {/* do której z przyjemnością wracać będziecie po latach. */}
            {/* iniezapomniane chwile zostaną z Wami na zawsze. */}
          </Text>
          <Flex alignItems={"center"} gap={2}>
            <Text paddingTop={1} fontWeight={500}>
              Efektem sesji jest 12 ujęć w formie cyfrowej po obróbce.
            </Text>
            <Popover>
              <PopoverTrigger>
                <button>
                  <Box>
                    <QuestionMark />
                  </Box>
                </button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverCloseButton />
                <PopoverBody>
                  <Box fontWeight={700} paddingRight={3}>
                    <Text>
                      Ceny zawierają czas pracy podczas sesji oraz przy post
                      produkcji zdjęć, doświadczenie i talent fotografa, podatek
                      VAT.
                    </Text>
                  </Box>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
          <Flex alignItems={"center"} gap={2} paddingTop={1}>
            <Text fontWeight={500}>
              Cena dotyczy sesji na terenie Warszawy.
            </Text>
            <Popover>
              <PopoverTrigger>
                <button>
                  <Box>
                    <QuestionMark />
                  </Box>
                </button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverCloseButton />
                <PopoverBody>
                  <Box fontWeight={700} paddingRight={3}>
                    <Text>
                      Dla sesji poza Warszawą doliczany jest koszt dojazdu
                      fotografa.
                    </Text>
                    <Text>
                      Szczegóły i stawkę ustalamy wtedy indywidualnie – nie
                      bójcie się pytać, udało nam się to już nie raz!
                    </Text>
                  </Box>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
          <Flex alignItems={"center"} gap={1} paddingTop={1}>
            <Text fontWeight={500}>
              Przyjmujemy również zamówienia sesji rodzinnych w prezencie dla
              bliskich.
            </Text>
            <Popover>
              <PopoverTrigger>
                <button>
                  <Box width={"30px"}>
                    <GradientGift />
                  </Box>
                </button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverCloseButton />
                <PopoverBody>
                  <Box fontWeight={700} paddingRight={3}>
                    <Text>
                      Istnieje możliwość dokupienia ujęć poza limitem oferty za
                      dodatkową opłatą.
                    </Text>
                  </Box>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
        </Box>
      </Flex>
      <Center flexDirection={"column"}>
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

export default MainText;
