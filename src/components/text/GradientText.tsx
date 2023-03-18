import React, { Children } from "react";
import { Text } from "@chakra-ui/react";

interface ChildrenProps {
  children: string;
}

const GradientText: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <Text
      fontSize={"22px"}
      bgGradient="linear(to-l, #ee8bd7, #EB6E00)"
      bgClip="text"
      _hover={{
        bgGradient: "linear(to-r,#b15200, #be4ca3)",
      }}
    >
      {children}
    </Text>
  );
};

export default GradientText;
