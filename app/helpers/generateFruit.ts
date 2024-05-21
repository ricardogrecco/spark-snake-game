import { FruitProps, SnakeProps } from "../types";
import { BOARD_COLUMNS, BOARD_ROWS } from "../utils/constants";

export const generateFruit = (snake: SnakeProps[], fruit: FruitProps) => {
  let newFruit: FruitProps;

  do {
    newFruit = {
      x: Math.floor(Math.random() * BOARD_COLUMNS),
      y: Math.floor(Math.random() * BOARD_ROWS),
    };
  } while (
    snake.some((cell) => cell.x === newFruit.x && cell.y === newFruit.y) ||
    (fruit.x === newFruit.x && fruit.y === newFruit.y)
  );

  return newFruit;
};
