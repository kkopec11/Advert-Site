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
      bgColor={"#FFFFFF"}
      _hover={{
        // bgGradient: gradientColor2,
        bgColor: "#4ca5ff",
        // fontWeight: 700,
      }}
      bgClip="text"
    >
      {children}
    </Text>
  );
};

export default OneColorText;
