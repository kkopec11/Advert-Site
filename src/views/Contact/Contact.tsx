import React from "react";
import {
  Box,
  HStack,
  Text,
  Flex,
  ListItem,
  ListIcon,
  List,
  Textarea,
  Center,
  VStack,
} from "@chakra-ui/react";
import { gradientColor1, fontDefaultColor } from "../../config";
import { GradientArrow } from "../../components/icons/GradientArrow";
import GradientButton from "../../components/buttons/GradientButton";
import DivMotion from "../../components/motion/DivMotion";

const Contact = () => {
  return (
    <Box color={fontDefaultColor} width={"100%"} height={"100%"}>
      <Flex
        flexDirection={"column"}
        paddingLeft={5}
        paddingRight={5}
        gap={5}
        paddingBottom={10}
        paddingTop={10}
        width={"40%"}
        // boxShadow={"dark-lg"}
        // borderRadius={"20px"}
      >
        <HStack alignItems={"flex-start"} justifyContent={"space-between"}>
          <Text
            fontSize={"30px"}
            as={"b"}
            bgClip={"text"}
            bgGradient={gradientColor1}
          >
            Kontakt
          </Text>
        </HStack>
        <HStack width={"90vw"} padding={5}>
          <Flex width={"60%"} flexDirection={"column"} height={"300px"} gap={5}>
            <Text fontWeight={700}>
              Family Gifts S.C. Klaudia Jabłońska i Paweł Kopeć
            </Text>
            <Text>ul. Obozowa 22 lok 79, 01-161 Warszawa</Text>
            <Text>NIP: 118-211-55-76</Text>
            <Text>Numer konta bankowego: 28 1020 1026 0000 1102 0267 8548</Text>
            <Text>
              Numery telefonów do kontaktu: 501 179 244 lub 512 398 297
            </Text>
            <Text>Adres e mail: kontakt@familygifts.pl</Text>
          </Flex>
          <Box width={"60%"} paddingLeft={5}>
            <Textarea height={"200px"} />
            <Center paddingTop={5}>
              <DivMotion>
                <GradientButton>Wyślij Nam Wiadomość!</GradientButton>
              </DivMotion>
            </Center>
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Contact;
