import * as React from "react";
import { Text, Center, VStack } from "@chakra-ui/react";
import { gradientColor1 } from "../../config";

const LowerView = () => {
  return (
    <Center paddingTop={20} flexDirection="column" width={"100%"}>
      <VStack width={"60%"}>
        <Text
          fontSize={"28px"}
          fontWeight={700}
          bgGradient={gradientColor1}
          bgClip="text"
          paddingTop={10}
        >
          Lorem ipsum dolor sit amet.
        </Text>
        <Text paddingTop={10} paddingBottom={10}>
          Non alias commodi nam vitae inventore et laboriosam reiciendis et
          autem nobis sed facilis atque eum illum quia quo optio molestiae? In
          tempora quis sit molestiae saepe qui ducimus aliquam. Qui totam unde
          qui optio nesciunt ut dolores unde.
        </Text>
        <Text>
          Non alias commodi nam vitae inventore et laboriosam reiciendis et
          autem nobis sed facilis atque eum illum quia quo optio molestiae? In
          tempora quis sit molestiae saepe qui ducimus aliquam. Qui totam unde
          qui optio nesciunt ut dolores unde.
        </Text>
        <Text paddingTop={10} paddingBottom={10}>
          Non alias commodi nam vitae inventore et laboriosam reiciendis et
          autem nobis sed facilis atque eum illum quia quo optio molestiae? In
          tempora quis sit molestiae saepe qui ducimus aliquam. Qui totam unde
          qui optio nesciunt ut dolores unde.
        </Text>
      </VStack>
    </Center>
  );
};

export default LowerView;
