import { Flex, Text } from "@chakra-ui/react";

type GameStateProps = {
  player: boolean;
  gameWon: boolean;
  full: boolean;
  isStarted: boolean;
};

export const GameStateUI: React.FC<GameStateProps> = (props) => (
  <Flex
    bg="#003049"
    borderRadius="10px"
    border="2px solid #780000"
    boxShadow="0 0 3px 1px black"
    w="40%"
    justify="center"
    align="center"
    h="6%"
  >
    <Text
      fontSize="3vh"
      color={
        (!props.gameWon && props.full) || !props.isStarted
          ? "#fdf0d5"
          : props.player
          ? "#c1121f"
          : "#669bbc"
      }
      textShadow="0 0 1px #fdf0d5"
      cursor="default"
    >
      {!props.isStarted
        ? "Start Game?"
        : props.gameWon
        ? `Player ${props.player ? 1 : 2} won! 🏆`
        : props.full
        ? "Draw"
        : `Player ${props.player ? 1 : 2}'s turn`}
    </Text>
  </Flex>
);
