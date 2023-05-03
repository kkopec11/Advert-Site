import * as React from "react";
import { Center } from "@chakra-ui/react";
import Sessions from "../HomeView/components/Sessions";
import WhyWe from "../HomeView/components/WhyWe";
import BuyPhotobook from "../../components/section/BuyPhotobook";
import DescView from "../DescView/DescView";

const LowerView = () => {
  return (
    <Center paddingTop={10} flexDirection="column" width={"100%"}>
      <DescView />
      <Sessions />
      <WhyWe />
      <BuyPhotobook />
    </Center>
  );
};

export default LowerView;
