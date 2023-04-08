import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./views/HomeView/Home";
import PhotoBook from "./views/PhotoBookView/PhotoBook";
import About from "./views/About/About";
import Contact from "./views/Contact/PhotoBook";
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
