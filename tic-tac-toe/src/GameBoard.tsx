import { useEffect } from "react";
import { GameField } from "./GameField";
import { SimpleGrid } from "@chakra-ui/react";
import { checkGameWon, initializer } from "./GameBoardUtils";

export interface Field {
  index: number;
  value: string;
}
type GameBoardProps = {
  size: number;
  gameWon: boolean;
  player: boolean;
  gameWonChecker: (result: boolean) => void;
  useHandler: (gameWon: boolean) => void;
  started: boolean;
  used: number;
  board: Field[];
  boardSetter: (board: Field[]) => void;
};

export const GameBoard: React.FC<GameBoardProps> = (props) => {
  const clickHandler = (index: number) => {
    if (!props.board[index].value && !props.gameWon && props.started) {
      const newBoard = props.board.map((field) =>
        field.index === index
          ? props.player
            ? { ...field, value: "X" }
            : { ...field, value: "O" }
          : field
      );
      props.boardSetter(newBoard);
      const gameWon = checkGameWon(newBoard, index, props.size);
      props.gameWonChecker(gameWon);
      props.useHandler(gameWon);
    }
  };

  useEffect(() => {
    props.boardSetter(initializer(props.size));
  }, [props.size, props.started]);

  return (
    <SimpleGrid
      columns={props.size}
      h="75%"
      aspectRatio="1/1"
      boxShadow="0 0 5px 3px black"
    >
      {props.board.map((field, index) => (
        <GameField
          key={index}
          size={props.size}
          clickHandler={clickHandler}
          index={index}
          value={field.value}
        />
      ))}
    </SimpleGrid>
  );
};
