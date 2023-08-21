import { Button, Flex } from "@chakra-ui/react";
import { faFloppyDisk, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type GameRunningProps = {
  newGame: () => void;
  saveGameHandler: () => void;
  saving: boolean;
};
export const GameRunning: React.FC<GameRunningProps> = (props) => (
  <Flex w="100%" align="center" justify="center">
    <Button
      rightIcon={
        <FontAwesomeIcon icon={faRotateRight} style={{ color: "#003049" }} />
      }
      bg="#fdf0d5"
      variant="solid"
      color="#003049"
      mr="5%"
      w="20%"
      boxShadow="0 0 4px 1px black"
      borderRadius="8px"
      fontSize="2vh"
      _hover={{ boxShadow: "0 0 5px 2px black" }}
      onClick={() => props.newGame()}
    >
      Restart
    </Button>
    <Button
      rightIcon={
        <FontAwesomeIcon icon={faFloppyDisk} style={{ color: "#003049" }} />
      }
      bg="#fdf0d5"
      variant="solid"
      color="#003049"
      ml="5%"
      w="20%"
      boxShadow="0 0 4px 1px black"
      borderRadius="8px"
      fontSize="2vh"
      _hover={{ boxShadow: "0 0 5px 2px black" }}
      onClick={() => props.saveGameHandler()}
      disabled={props.saving}
    >
      Save
    </Button>
  </Flex>
);
