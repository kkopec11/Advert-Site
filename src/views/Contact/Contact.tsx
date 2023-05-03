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
} from "@chakra-ui/react";
import { gradientColor1, fontDefaultColor } from "../../config";
import { GradientArrow } from "../../components/icons/GradientArrow";

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
        <Text fontWeight={700}>
          Family Gifts S.C. Klaudia Jabłońska i Paweł Kopeć
        </Text>
        <Text>ul. Obozowa 22 lok 79, 01-161 Warszawa</Text>
        <Text>NIP: 118-211-55-76</Text>
        <Text>Numer konta bankowego: 28 1020 1026 0000 1102 0267 8548</Text>
        <Text>Numery telefonów do kontaktu: 501 179 244 lub 512 398 297</Text>
        <Text>Adres e mail: kontakt@familygifts.pl</Text>
        <Textarea />
      </Flex>
    </Box>
  );
};

export default Contact;
