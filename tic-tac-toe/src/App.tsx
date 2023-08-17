import { Flex, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { GameBoard } from "./GameBoard";
import { GameState } from "./GameState";
import { GameStart } from "./GameStart";
import { GameEnd } from "./GameEnd";
import { GameRunning } from "./GameRunning";

/* const query = graphql`
  query AppQuery {
    queryListItem {
      id
      text
      done
    }
  }
`;

const updateListItem = graphql`
  mutation AppMutation($id: [ID!]!, $done: Boolean!) {
    updateListItem(input: { filter: { id: $id }, set: { done: $done } }) {
      listItem {
        id
        done
      }
    }
  }
`; */

export const App: React.FC = () => {
  const [size, setSize] = useState(3);
  const [gameWon, setGameWon] = useState(false);
  const [used, setUsed] = useState(0);
  const [player, setPlayer] = useState(true);
  const [started, setStarted] = useState(false);

  const gameWonChecker = (result: boolean) => {
    setGameWon(result);
  };

  const useHandler = (gameWon: boolean) => {
    setUsed((prevUsed) => prevUsed + 1);
    !gameWon && setPlayer((prevPlayer) => !prevPlayer);
  };

  const sizeChange = (newSize: number) => {
    setSize(newSize);
  };

  const startHandler = () => setStarted(true);

  const newGame = () => {
    setSize(3);
    setGameWon(false);
    setUsed(0);
    setPlayer(true);
    setStarted(false);
  };

  return (
    <Flex
      h="100vh"
      bg="#edf2f4"
      justify="center"
      align="center"
      fontFamily="Fredoka, sans-serif"
    >
      <VStack spacing="5%" h="80%">
        <GameState
          player={player}
          gameWon={gameWon}
          full={used === size * size}
          started={started}
        />
        <GameBoard
          size={size}
          gameWon={gameWon}
          gameWonChecker={gameWonChecker}
          useHandler={useHandler}
          player={player}
          started={started}
        />
        {started ? (
          gameWon || used === size * size ? (
            <GameEnd newGame={newGame} />
          ) : (
            <GameRunning newGame={newGame} />
          )
        ) : (
          <GameStart
            size={size}
            changeHandler={sizeChange}
            startHandler={startHandler}
          />
        )}
      </VStack>
    </Flex>
  );
};
