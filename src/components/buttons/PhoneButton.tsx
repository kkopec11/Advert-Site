import React, { Children } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { fontButton, gradientColor1, gradientColor2 } from "../../config";
import { HiPhone } from "react-icons/hi";

interface ChildrenProps {
  children: any;
}

const PhoneButton: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <Box
      boxShadow={"md"}
      as="button"
      p={3}
      color={fontButton}
      fontWeight="bold"
      borderRadius="40px"
      bgGradient={gradientColor1}
      _hover={{
        bgGradient: gradientColor2,
        color: fontButton,
        boxShadow: "dark-lg",
      }}
    >
      <a href={"tel:" + children}>
        <Flex flexDirection={"row"} gap={2} alignItems={"center"}>
          <HiPhone />
          {children}
        </Flex>
      </a>
    </Box>
  );
};

export default PhoneButton;
