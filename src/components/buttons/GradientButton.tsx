import React, { Children } from "react";
import { Box } from "@chakra-ui/react";
import { fontButton, gradientColor1, gradientColor2 } from "../../config";

interface ChildrenProps {
  children: string;
}

const GradientButton: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <Box
      boxShadow={"xl"}
      as="button"
      p={4}
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
      {children}
    </Box>
  );
};

export default GradientButton;
