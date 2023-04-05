import * as React from "react";
import {
  Box,
  HStack,
  Text,
  Divider,
  Center,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { Logo } from "../../components/logo/Logo";
import { backgroundColor, dividerColor } from "../../config";
import NavBar from "../../components/section/NavBar";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

const PhotoBook = () => {
  return (
    <Flex minHeight="100vh">
      <Box bgColor={backgroundColor} width="100vw">
        <HStack justifyContent={"space-between"} width={"95%"}>
          <Box>
            <Logo width={"100%"} height={"100%"} />
          </Box>
          <NavBar />
        </HStack>
        <Center width={"100%"}>
          <Divider
            width={"95%"}
            marginTop={3}
            marginBottom={3}
            orientation="horizontal"
            borderColor={dividerColor}
          />
        </Center>
        <VStack>
          <Text>FOTOKSIĄŻKA</Text>
          <Box width="400px">
            <Swiper
              spaceBetween={30}
              effect={"fade"}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[EffectFade, Navigation, Pagination]}
            >
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
              </SwiperSlide>
            </Swiper>
          </Box>
        </VStack>
      </Box>
    </Flex>
  );
};

export default PhotoBook;
