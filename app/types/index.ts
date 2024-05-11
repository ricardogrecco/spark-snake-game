export type SnakeDirection = "UP" | "DOWN" | "LEFT" | "RIGHT";

export type SnakeProps = {
  x: number;
  y: number;
  direction: SnakeDirection;
};

export type FruitProps = {
  x: number;
  y: number;
};
