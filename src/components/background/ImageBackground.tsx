import React from "react";
import { Box, Flex, Divider } from "@chakra-ui/react";
import Navbar from "../navbar/Navbar";
interface Props {
  imageURL: string;
  children?: React.ReactNode;
}

const ImageBackground: React.FC<Props> = ({ imageURL, children }) => {
  return (
    <Flex minHeight="100vh">
      <Box
        flex="0.4"
        backgroundColor="#ffffff"
        width="80vw"
        borderRight={"1px"}
      >
        {children}
      </Box>
      <Box
        bgImage={`url(${imageURL})`}
        bgSize="cover"
        bgPosition="right"
        flex="1"
      >
        {<Navbar />}
      </Box>
    </Flex>
  );
};

export default ImageBackground;
