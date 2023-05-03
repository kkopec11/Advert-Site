import * as React from "react";
import {
  ChakraProvider,
  Box,
  theme,
  Text,
  Flex,
  Center,
  VStack,
} from "@chakra-ui/react";
import GradientButton from "../buttons/GradientButton";

const BottomText = () => {
  return (
    <Box
      width={"60%"}
      //   height={"60%"}
      borderRadius={"12px"}
      //   zIndex={1}
      //   position={"absolute"}
      //   left={650}
      //   top={40}
      padding={5}
      shadow={"dark-lg"}
      backdropFilter={"auto"}
      backdropBlur={"5px"}
    >
      <Flex flexDirection={"column"}>
        <Text fontSize={"3xl"} as={"b"}>
          Poznaj naszą ofertę:
        </Text>
      </Flex>
      <Text paddingTop={5} width={"80%"} color={"gray"}>
        Non alias commodi nam vitae inventore et laboriosam reiciendis et autem
        nobis sed facilis atque eum.
      </Text>
      <VStack width={"100%"} paddingTop={55}>
        <Text fontSize={"22px"} as={"b"}>
          Sprawdź naszą fotoksiążkę!
        </Text>
        <Center width={"auto"} paddingTop={5}>
          <GradientButton>FOTOKSIĄŻKA</GradientButton>
        </Center>
      </VStack>
    </Box>
  );
};

export default BottomText;
