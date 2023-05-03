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
    <Flex height="100vh">
      <Box
        bgImage={`url(${imageURL})`}
        bgSize="cover"
        bgPosition="center"
        flex="1"
      >
        {children}
      </Box>
    </Flex>
  );
};

export default ImageBackground;
