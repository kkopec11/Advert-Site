import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./views/HomeView/Home";
import PhotoBook from "./views/PhotoBookView/PhotoBook";
import About from "./views/About/About";
import Contact from "./views/Contact/PhotoBook";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fotoksiazka" element={<PhotoBook />} />
        <Route path="/info" element={<About />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
    </Router>
  </ChakraProvider>
);
