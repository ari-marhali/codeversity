import { Dispatch, SetStateAction } from "react";
import { GameEnd } from "./GameEndUI";
import { GameRunningUI } from "./GameRunningUI";
import { StartGameUI } from "./StartGameUI";

type GameBottomProps = {
  isStarted: boolean;
  gameWon: boolean;
  fieldsUsed: number;
  size: number;
  newGame: () => void;
  saveGameHandler: () => void;
  isSaving: boolean;
  setSize: Dispatch<SetStateAction<number>>;
  setIsStarted: Dispatch<SetStateAction<boolean>>;
  loadGameHandler: () => void;
};

export const GameBottomUI: React.FC<GameBottomProps> = (props) =>
  props.isStarted ? (
    props.gameWon || props.fieldsUsed === props.size * props.size ? (
      <GameEnd newGame={props.newGame} />
    ) : (
      <GameRunningUI
        newGame={props.newGame}
        saveGameHandler={props.saveGameHandler}
        isSaving={props.isSaving}
      />
    )
  ) : (
    <StartGameUI
      size={props.size}
      setSize={props.setSize}
      setIsStarted={props.setIsStarted}
      loadGameHandler={props.loadGameHandler}
    />
  );
