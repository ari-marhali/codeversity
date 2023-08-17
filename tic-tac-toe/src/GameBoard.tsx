import { useEffect, useState } from "react";
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
};

export const GameBoard: React.FC<GameBoardProps> = (props) => {
  const [board, setBoard] = useState<Field[]>(initializer(props.size));

  const clickHandler = (index: number) => {
    if (!board[index].value && !props.gameWon) {
      const newBoard = board.map((field) =>
        field.index === index
          ? props.player
            ? { ...field, value: "X" }
            : { ...field, value: "O" }
          : field
      );
      setBoard(newBoard);
      const gameWon = checkGameWon(newBoard, index, props.size);
      props.gameWonChecker(gameWon);
      props.useHandler(gameWon);
    }
  };

  useEffect(() => {
    !props.started && setBoard(initializer(props.size));
  }, [props.size]);

  return (
    <SimpleGrid
      columns={props.size}
      h="75%"
      aspectRatio="1/1"
      boxShadow="0 0 5px 3px black"
    >
      {board.map((field, index) => (
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
