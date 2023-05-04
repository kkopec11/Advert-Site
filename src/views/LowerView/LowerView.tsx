import * as React from "react";
import { Box, Center } from "@chakra-ui/react";
import Sessions from "../HomeView/components/Sessions";
import WhyWe from "../HomeView/components/WhyWe";
import BuyPhotobook from "../../components/section/BuyPhotobook";
import DescView from "../DescView/DescView";
import Contact from "../../views/Contact/Contact";

const LowerView = () => {
  return (
    <Center paddingTop={10} flexDirection="column" width={"100%"} gap={20}>
      <Box boxShadow={"dark-lg"} borderRadius={"20px"} margin={5}>
        <DescView />
      </Box>
      <Box
        boxShadow={"dark-lg"}
        borderRadius={"20px"}
        margin={5}
        paddingBottom={5}
      >
        <Sessions />
      </Box>
      <Box boxShadow={"dark-lg"} borderRadius={"20px"} margin={5}>
        <WhyWe />
      </Box>
      <Box boxShadow={"dark-lg"} borderRadius={"20px"} margin={5}>
        <Contact />
      </Box>
    </Center>
  );
};

export default LowerView;
