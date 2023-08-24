import { Field } from "./GameBoard";

export const initializer = (size: number) => {
  const mainArr: Field[] = Array.from({ length: size * size }, (_, index) => ({
    index: index,
    value: "",
  }));
  return mainArr;
};

export const checkGameWon = (board: Field[], index: number, size: number) => {
  const char = board[index].value;
  const rowStart = Math.floor(index / size) * size;
  const rowEnd = rowStart + size;
  const colStart = index % size;
  const colEnd = colStart + (size - 1) * size;
  let result = true;

  for (let i = rowStart; i < rowEnd; i++) {
    if (board[i].value !== char) {
      result = false;
      break;
    }
  }

  if (!result) {
    result = true;
    for (let i = colStart; i <= colEnd; i += size) {
      if (board[i].value !== char) {
        result = false;
        break;
      }
    }
  }

  if (!result && Math.floor(index / size) === index % size) {
    result = true;
    for (let i = 0; i < size; i++) {
      if (board[i * size + i].value !== char) {
        result = false;
        break;
      }
    }
  }

  if (!result && Math.floor(index / size) + (index % size) === size - 1) {
    result = true;
    for (let i = 1; i <= size; i++) {
      if (board[(size - 1) * i].value !== char) {
        result = false;
        break;
      }
    }
  }
  return result;
};
