import { FruitProps, SnakeProps } from "../types";
import { BOARD_SIZE } from "../utils/constants";

export const generateFruit = (snake: SnakeProps[]) => {
  let newFruit: FruitProps;

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
