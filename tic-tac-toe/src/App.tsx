import { Flex, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { GameBoard } from "./GameBoard";
import { GameStateUI } from "./GameStateUI";
import { useLazyLoadQuery, useMutation } from "react-relay";
import { saveGame, loadGame } from "./appHelpers";
import { appHelpersQuery } from "./__generated__/appHelpersQuery.graphql";
import { GameBottomUI } from "./GameBottomUI";

export const App: React.FC = () => {
  const [size, setSize] = useState(3);
  const [gameWon, setGameWon] = useState(false);
  const [fieldsUsed, setFieldsUsed] = useState(0);
  const [player, setPlayer] = useState(true);
  const [isStarted, setIsStarted] = useState(false);

  const [commitMutation, isMutationInFlight] = useMutation(saveGame);
  const data = useLazyLoadQuery<appHelpersQuery>(loadGame, {});

  const fieldUseHandler = () => {
    setFieldsUsed((prevFieldsUsed) => prevFieldsUsed + 1);
    setPlayer((prevPlayer) => !prevPlayer);
  };

  const newGame = () => {
    setSize(3);
    setGameWon(false);
    setFieldsUsed(0);
    setPlayer(true);
    setIsStarted(false);

  const saveGameHandler = () => {
    commitMutation({
      variables: {
        size: size,
        fieldsUsed: fieldsUsed,
        player: player,
      },
    });
  };

  const loadGameHandler = () => {
    if (data.queryGameBoard) {
      const game = data.queryGameBoard[0];
      if (game) {
        setSize(game.size);
        setFieldsUsed(game.fieldsUsed);
        setPlayer(game.player);
        setIsStarted(true);
      }
    }
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
        <GameStateUI
          player={player}
          gameWon={gameWon}
          full={fieldsUsed === size * size}
          isStarted={isStarted}
        />
        <GameBoard
          size={size}
          gameWon={gameWon}
          setGameWon={setGameWon}
          fieldUseHandler={fieldUseHandler}
          player={player}
          isStarted={isStarted}
          used={fieldsUsed}
        />
        <GameBottomUI
          isStarted={isStarted}
          gameWon={gameWon}
          fieldsUsed={fieldsUsed}
          size={size}
          newGame={newGame}
          saveGameHandler={saveGameHandler}
          isSaving={isMutationInFlight}
          setSize={setSize}
          setIsStarted={setIsStarted}
          loadGameHandler={loadGameHandler}
        />
      </VStack>
    </Flex>
  );
};
