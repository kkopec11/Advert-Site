import React, { Children } from "react";
import { Box } from "@chakra-ui/react";

interface ChildrenProps {
  children: string;
}

const GradientButton: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <Box
      boxShadow={"xl"}
      as="button"
      p={4}
      //   color="black"
      color="white"
      fontWeight="bold"
      borderRadius="40px"
      bgGradient="linear(to-br, #ffa95e, #c284b3)"
      _hover={{
        bgGradient: "linear(to-br,#b15200, #be4ca3)",
        color: "white",
        boxShadow: "dark-lg",
      }}
    >
      {children}
    </Box>
  );
};

export default GradientButton;
