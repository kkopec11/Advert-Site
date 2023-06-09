import * as React from "react";
import { chakra, ImageProps, forwardRef } from "@chakra-ui/react";
import logo from "./assets/gradient-logo.svg";

export const GradientLogo = forwardRef<ImageProps, "img">((props, ref) => {
  return <chakra.img src={logo} ref={ref} {...props} />;
});
