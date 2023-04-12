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
  Tabs,
  TabList,
  Tab,
  TabPanels,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  TabPanel,
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
import Sessions from "../Sessions";
import WhyWe from "../WhyWe";
import { FaArrowCircleLeft } from "react-icons/fa";

const Version6 = ({
  view,
  setView,
}: {
  view: string;
  setView: (view: string) => void;
}) => {
  return (
    <>
      <Box width="65vw">
        <Tabs isFitted>
          <TabList mb="1em">
            <Tab>
              <Text
                fontSize={"2xl"}
                as={"b"}
                bgClip={"text"}
                bgGradient={gradientColor1}
              >
                Sesje Domowe
              </Text>
            </Tab>
            <Tab>
              <Text
                fontSize={"2xl"}
                as={"b"}
                bgClip={"text"}
                bgGradient={gradientColor1}
              >
                Dlaczego My?
              </Text>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box color={fontDefaultColor}>
                <Flex flexDirection={"column"}>
                  <HStack alignItems={"flex-start"}>
                    <Text
                      fontSize={"26px"}
                      as={"b"}
                      bgClip={"text"}
                      bgGradient={gradientColor1}
                    >
                      Sesja domowa rodzinna – 12 ujęć po obróbce (900zł brutto)
                    </Text>
                  </HStack>
                  <Text width={"75%"} paddingTop={1}>
                    Budujemy wspomnienia – domowe sesje rodzinne to
                    najpiękniejszy prezent dla ludzi, którzy kochają się ponad
                    wszystko.{" "}
                    <Text as={"b"} bgClip={"text"} bgGradient={gradientColor1}>
                      Uwieczniamy w kadrach Waszą codzienność.
                    </Text>
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
                    <Flex alignItems={"flex-end"} gap={2}>
                      <Text paddingTop={3} fontWeight={500}>
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
                                Ceny zawierają czas pracy podczas sesji oraz
                                przy post produkcji zdjęć, doświadczenie i
                                talent fotografa, podatek VAT.
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
                                Dla sesji poza Warszawą doliczany jest koszt
                                dojazdu fotografa.
                              </Text>
                              <Text>
                                Szczegóły i stawkę ustalamy wtedy indywidualnie
                                – nie bójcie się pytać, udało nam się to już nie
                                raz!
                              </Text>
                            </Box>
                          </PopoverBody>
                        </PopoverContent>
                      </Popover>
                    </Flex>
                    <Flex alignItems={"center"} gap={1} paddingTop={1}>
                      <Text fontWeight={500}>
                        Przyjmujemy również zamówienia sesji rodzinnych w
                        prezencie dla bliskich.
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
                                Istnieje możliwość dokupienia ujęć poza limitem
                                oferty za dodatkową opłatą.
                              </Text>
                            </Box>
                          </PopoverBody>
                        </PopoverContent>
                      </Popover>
                    </Flex>
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
            </TabPanel>
            <TabPanel>
              <WhyWe />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default Version6;
