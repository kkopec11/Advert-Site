import * as React from "react";
import { Box, HStack, Text, Divider, Center } from "@chakra-ui/react";
import { Logo } from "../../components/logo/Logo";
import ImageBackground from "../../components/background/ImageBackground";
import Background from "../../../src/assets/backgroundImages/namecheap/bg1.resized.jpg"; //1-5
import { dividerColor } from "../../config";
import NavBar from "../../components/section/NavBar";

const PhotoBook = () => {
  return (
    <ImageBackground imageURL={Background}>
      <HStack justifyContent={"space-between"} width={"95%"}>
        <Box>
          <Logo width={"100%"} height={"100%"} />
        </Box>
        <NavBar />
      </HStack>
      <Center width={"100%"}>
        <Divider
          width={"95%"}
          marginTop={3}
          marginBottom={3}
          orientation="horizontal"
          borderColor={dividerColor}
        />
      </Center>
      <Center width={"100%"}>
        <Text>FOTOKSIĄŻKA</Text>
      </Center>
    </ImageBackground>
  );
};

export default PhotoBook;
