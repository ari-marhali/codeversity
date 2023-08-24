import { GameField } from "./GameField";
import { SimpleGrid } from "@chakra-ui/react";
import { checkGameWon, initializer } from "./gameBoardHelpers";
import { Dispatch, SetStateAction, useState } from "react";

export interface Field {
  index: number;
  value: string;
}
type GameBoardProps = {
  size: number;
  gameWon: boolean;
  player: boolean;
  setGameWon: Dispatch<SetStateAction<boolean>>;
  fieldUseHandler: () => void;
  isStarted: boolean;
  used: number;
};

export const GameBoard: React.FC<GameBoardProps> = (props) => {
  const [board, setBoard] = useState<Field[]>(initializer(props.size));

  const clickHandler = (index: number) => {
    if (!board[index].value && !props.gameWon && props.isStarted) {
      const newBoard = board.map((field) =>
        field.index === index
          ? props.player
            ? { ...field, value: "X" }
            : { ...field, value: "O" }
          : field
      );
      setBoard(newBoard);
      const gameWon = checkGameWon(newBoard, index, props.size);
      props.setGameWon(gameWon);
      props.fieldUseHandler();
    }
  };

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
