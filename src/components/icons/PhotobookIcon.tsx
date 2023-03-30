import * as React from "react";
import { chakra, ImageProps, forwardRef } from "@chakra-ui/react";
import icon from "../../assets/logos/picture.svg";

export const PhotobookIcon = forwardRef<ImageProps, "img">((props, ref) => {
  return <chakra.img src={icon} ref={ref} {...props} />;
});
