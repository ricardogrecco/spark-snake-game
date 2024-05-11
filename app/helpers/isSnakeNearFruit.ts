import { FruitProps, SnakeProps } from "../types";

export const isSnakeNearFruit = (snake: SnakeProps, fruit: FruitProps) => {
  const diffX = Math.abs(snake.x - fruit.x);
  const diffY = Math.abs(snake.y - fruit.y);

  return diffX <= 2 && diffY <= 2;
};
