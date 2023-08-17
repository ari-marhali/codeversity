import { Button, Flex } from "@chakra-ui/react";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type GameEndProps = {
  newGame: () => void;
};
export const GameEnd: React.FC<GameEndProps> = (props) => (
  <Flex w="100%" align="center" justify="center">
    <Button
      rightIcon={
        <FontAwesomeIcon icon={faRotateRight} style={{ color: "#003049" }} />
      }
      bg="#fdf0d5"
      variant="solid"
      color="#003049"
      ml="30px"
      w="30%"
      boxShadow="0 0 4px 1px black"
      borderRadius="8px"
      fontSize="2vh"
      _hover={{ boxShadow: "0 0 5px 2px black" }}
      onClick={() => props.newGame()}
    >
      Restart
    </Button>
  </Flex>
);
