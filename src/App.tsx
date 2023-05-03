import * as React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import InitialView from "./views/InitialView/InitialView";
import LowerView from "./views/LowerView/LowerView";
import "@fontsource/inter";
import "@fontsource/raleway";
import "@fontsource/carlito";

const theme = extendTheme({
  // fonts: {
  //   heading: `'Inter'`,
  //   body: `'Inter'`,
  // },
  // fonts: {
  //   heading: `'Carlito'`,
  //   body: `'Carlito'`,
  // },
  // fonts: {
  //   heading: `'Raleway'`,
  //   body: `'Raleway'`,
  // },
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <InitialView />
    <LowerView />
  </ChakraProvider>
);
