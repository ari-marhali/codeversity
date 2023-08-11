import { Flex } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <Flex
      bg="#8d99ae"
      w="100%"
      justify="center"
      align="center"
      textColor="#2b2d42"
      fontSize="26px"
      fontWeight="700"
      textShadow="1px 1px 1px #edf2f4"
      boxShadow="0 2px 5px #2b2d42"
      p="5px 15px 5px 15px"
    >
      <img src="./src/icon.png" width="60px" />
      <p style={{ margin: "auto" }}>To Do List</p>
      <img src="./src/chakra-ui.png" width="50px" />
    </Flex>
  );
};
