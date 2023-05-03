import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import InitialView from "./views/InitialView/InitialView";
import LowerView from "./views/LowerView/LowerView";

export const App = () => (
  <ChakraProvider theme={theme}>
    <InitialView />
    <LowerView />
  </ChakraProvider>
);
