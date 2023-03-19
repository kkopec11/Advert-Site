import React from "react";
import { Box, Flex } from "@chakra-ui/react";

interface Props {
  imageURL: string;
  children?: React.ReactNode;
}

const ImageBackground: React.FC<Props> = ({ imageURL, children }) => {
  return (
    <Flex minHeight="100vh">
      <Box flex="2" backgroundColor="#ffffff" width="80vw">
        {children}
      </Box>
      <Box
        bgImage={`url(${imageURL})`}
        bgSize="cover"
        bgPosition="right"
        flex="1"
      />
    </Flex>
  );
};

export default ImageBackground;
