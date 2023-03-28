import React from "react";
import { Text } from "@chakra-ui/react";
import { fontDefaultColor, gradientColor2 } from "../../config";

interface ChildrenProps {
  children: string;
}

const OneColorText: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <Text
      fontSize={"18px"}
      bgColor={fontDefaultColor}
      _hover={{
        bgGradient: gradientColor2,
      }}
      bgClip="text"
    >
      {children}
    </Text>
  );
};

export default OneColorText;
