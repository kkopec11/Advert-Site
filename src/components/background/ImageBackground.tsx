import React from "react";
import { Box, Flex, Divider, Center } from "@chakra-ui/react";
import Navbar from "../navbar/Navbar";
import BottomText from "../text/BottomText";
interface Props {
  imageURL: string;
  children?: React.ReactNode;
}

const ImageBackground: React.FC<Props> = ({ imageURL, children }) => {
  return (
    <Flex minHeight="100vh">
      <Box
        bgImage={`url(${imageURL})`}
        bgSize="cover"
        bgPosition="right"
        flex="1"
      >
        {children}
      </Box>
      {/* <Box
        flex="1"
        backgroundColor="#ffffff"
        // backgroundColor="#000000"
      >
        {
          <Box paddingTop={5}>
            <Navbar />
            <Center paddingTop={20}>
              <BottomText />
            </Center>
          </Box>
        }
      </Box> */}
    </Flex>
  );
};

export default ImageBackground;
