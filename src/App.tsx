import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Fonts from "./Fonts";
import "@fontsource/linden-hill";
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  HStack,
  Text,
  Divider,
  Flex,
  Center,
  VStack,
  Container,
} from "@chakra-ui/react";
import { Logo } from "./components/logo/Logo";
import OneColorText from "./components/text/OneColorText";
import OneView from "./views/OneView/OneView";

export const App = () => (
  <ChakraProvider theme={theme}>
    <OneView />
  </ChakraProvider>
);
