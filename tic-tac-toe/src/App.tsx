import { Flex, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Field, GameBoard } from "./GameBoard";
import { GameState } from "./GameState";
import { GameStart } from "./GameStart";
import { GameEnd } from "./GameEnd";
import { GameRunning } from "./GameRunning";
import { graphql } from "relay-runtime";
import { useLazyLoadQuery, useMutation } from "react-relay";
import { initializer } from "./GameBoardUtils";
import { AppQuery } from "./__generated__/AppQuery.graphql";

const saveGame = graphql`
  mutation AppMutation(
    $player: Boolean!
    $size: Int!
    $used: Int!
    $board: [FieldRef!]!
  ) {
    deleteField(filter: {}) {
      msg
    }
    deleteGameBoard(filter: {}) {
      msg
    }
    addGameBoard(
      input: { board: $board, size: $size, used: $used, player: $player }
    ) {
      gameBoard {
        player
        size
        used
        board(order: { asc: index }) {
          index
          value
        }
      }
    }
  }
`;

const loadGame = graphql`
  query AppQuery {
    queryGameBoard {
      board(order: { asc: index }) {
        index
        value
      }
      player
      size
      used
    }
  }
`;

export const App: React.FC = () => {
  const [size, setSize] = useState(3);
  const [gameWon, setGameWon] = useState(false);
  const [used, setUsed] = useState(0);
  const [player, setPlayer] = useState(true);
  const [started, setStarted] = useState(false);
  const [board, setBoard] = useState<Field[]>(initializer(size));

  const [commitMutation, isMutationInFlight] = useMutation(saveGame);
  const data = useLazyLoadQuery<AppQuery>(loadGame, {});

  const boardSetter = (board: Field[]) => {
    setBoard(board);
  };

  const gameWonChecker = (result: boolean) => {
    setGameWon(result);
  };

  const useHandler = (gameWon: boolean) => {
    setUsed((prevUsed) => prevUsed + 1);
    !gameWon && setPlayer((prevPlayer) => !prevPlayer);
  };

  const sizeChange = (newSize: number) => {
    setBoard(initializer(newSize));
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

  const saveGameHandler = () => {
    commitMutation({
      variables: {
        size: size,
        used: used,
        player: player,
        board: board,
      },
    });
  };

  const loadGameHandler = () => {
    if (data.queryGameBoard) {
      const game = data.queryGameBoard[0];
      if (game) {
        setSize(game.size);
        setBoard([...game.board]);
        setUsed(game.used);
        setPlayer(game.player);
        setStarted(true);
      }
    }
  };
  console.log(board);
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
          used={used}
          board={board}
          boardSetter={boardSetter}
        />
        {started ? (
          gameWon || used === size * size ? (
            <GameEnd newGame={newGame} />
          ) : (
            <GameRunning
              newGame={newGame}
              saveGameHandler={saveGameHandler}
              saving={isMutationInFlight}
            />
          )
        ) : (
          <GameStart
            size={size}
            changeHandler={sizeChange}
            startHandler={startHandler}
            loadGameHandler={loadGameHandler}
          />
        )}
      </VStack>
    </Flex>
  );
};
