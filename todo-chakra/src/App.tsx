import { Flex } from "@chakra-ui/react";
import { AddItem } from "./AddItem";

export const App: React.FC = () => {
  return (
    <Flex bg="#edf2f4" h="100%" display="flex" justify="center">
      <AddItem />
    </Flex>
  );
};
