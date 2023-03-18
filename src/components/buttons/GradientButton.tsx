import React, { Children } from "react";
import { Box } from "@chakra-ui/react";

interface ChildrenProps {
  children: string;
}

const GradientButton: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <Box
      as="button"
      p={4}
      //   color="black"
      color="white"
      fontWeight="bold"
      borderRadius="md"
      bgGradient="linear(to-br, #ffa95e, #fcd4f3)"
      _hover={{
        bgGradient: "linear(to-r,#b15200, #be4ca3)",
        color: "white",
      }}
    >
      {children}
    </Box>
  );
};

export default GradientButton;
