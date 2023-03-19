import React from "react";
import { Text } from "@chakra-ui/react";

interface ChildrenProps {
  children: string;
}

const OneColorText: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <Text
      fontSize={"22px"}
      fontWeight={500}
      bgColor={"#000000"}
      _hover={{
        // bgColor: "#EB6E00",
        bgGradient: "linear(to-br,#b15200, #be4ca3)",
      }}
      bgClip="text"
    >
      {children}
    </Text>
  );
};

export default OneColorText;
