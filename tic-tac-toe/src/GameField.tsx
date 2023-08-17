import { Field } from "./GameBoard";
import { Flex, Text } from "@chakra-ui/react";

interface FieldProps extends Field {
  size: number;
  clickHandler: (index: number) => void;
}

export const GameField: React.FC<FieldProps> = (props: FieldProps) => (
  <Flex
    key={props.index}
    bg="#fdf0d5"
    borderTop={props.index >= props.size ? "2px solid #003049" : "none"}
    borderBottom={
      props.index < props.size * (props.size - 1) ? "2px solid #003049" : "none"
    }
    borderLeft={props.index % props.size !== 0 ? "2px solid #003049" : "none"}
    borderRight={
      (props.index + 1) % props.size !== 0 ? "2px solid #003049" : "none"
    }
    aspectRatio="1/1"
    fontSize={`${40 / props.size}vh`}
    onClick={() => {
      props.clickHandler(props.index);
    }}
    cursor={props.value ? "not-allowed" : "pointer"}
    color={props.value === "X" ? "#c1121f" : "#669bbc"}
    textShadow="1px 1px 3px black"
    _hover={props.value === "" ? { bg: "#FEF9ED" } : {}}
  >
    <Text
      w="100%"
      h="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      {props.value}
    </Text>
  </Flex>
);
