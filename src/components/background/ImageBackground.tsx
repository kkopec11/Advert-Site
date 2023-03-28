import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { backgroundColor } from "../../config";

interface Props {
  imageURL: string;
  children?: React.ReactNode;
}

const ImageBackground: React.FC<Props> = ({ imageURL, children }) => {
  return (
    <Flex minHeight="100vh">
      <Box flex="2" bgColor={backgroundColor} width="80vw" borderRight={"2px"}>
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
