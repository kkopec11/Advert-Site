import React from "react";
import { Text } from "@chakra-ui/react";

interface ChildrenProps {
  children: string;
}

const OneColorText: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <Text
      fontSize={"22px"}
      bgColor={"#F69608"}
      _hover={{
        bgColor: "#EB6E00",
      }}
      bgClip="text"
    >
      {children}
    </Text>
  );
};

export default OneColorText;
