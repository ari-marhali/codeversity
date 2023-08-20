import {
  Button,
  Flex,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { faDownload, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type GameStartProps = {
  size: number;
  changeHandler: (newSize: number) => void;
  startHandler: () => void;
  loadGameHandler: () => void;
};

export const GameStart: React.FC<GameStartProps> = (props) => (
  <Flex w="100%" align="center" justify="center">
    <NumberInput
      value={props.size}
      onChange={(_, value) => props.changeHandler(value)}
      min={3}
      boxShadow="0 0 5px 1px black"
      w="20%"
      p="none"
      borderRadius="8px"
      mr="5%"
      _hover={{ boxShadow: "0 0 5px 2px black" }}
      aria-labelledby="Select Size"
    >
      <NumberInputField
        textAlign="center"
        fontSize="3vh"
        color="#003049"
        border="none"
        bg="#fdf0d5"
      />
      <NumberInputStepper color="#003049">
        <NumberIncrementStepper borderColor="#9CA8B8" />
        <NumberDecrementStepper
          borderColor="#9CA8B8"
          _disabled={{ borderColor: "#9CA8B8", color: "#ABB4C3" }}
        />
      </NumberInputStepper>
    </NumberInput>
    <Button
      rightIcon={<FontAwesomeIcon icon={faPlay} style={{ color: "#003049" }} />}
      bg="#fdf0d5"
      variant="solid"
      color="#003049"
      ml="5%"
      mr="5%"
      w="20%"
      boxShadow="0 0 4px 1px black"
      borderRadius="8px"
      fontSize="2vh"
      _hover={{ boxShadow: "0 0 5px 2px black" }}
      onClick={() => props.startHandler()}
    >
      Start
    </Button>
    <Button
      rightIcon={
        <FontAwesomeIcon icon={faDownload} style={{ color: "#003049" }} />
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
      onClick={() => props.loadGameHandler()}
    >
      Load
    </Button>
  </Flex>
);
