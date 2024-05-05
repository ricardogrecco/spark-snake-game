import { SnakeProps } from "../types";
import { BOARD_SIZE } from "../utils/constants";

export const generateFruit = (snake: SnakeProps[]) => {
  let newFruit: { x: number; y: number };

  do {
    newFruit = {
      x: Math.floor(Math.random() * BOARD_SIZE),
      y: Math.floor(Math.random() * BOARD_SIZE),
    };
  } while (
    snake.some((cell) => cell.x === newFruit.x && cell.y === newFruit.y)
  );

  return newFruit;
};
