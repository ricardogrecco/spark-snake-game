import React, { MutableRefObject, useCallback } from "react";
import { SnakeProps, SnakeDirection, FruitProps } from "../types";
import { BOARD_SIZE } from "../utils/constants";
import { generateFruit } from "../helpers/generateFruit";

type MoveSnakeCallbackProps = {};

export default function MoveSnakeCallback(
  setSnake: React.Dispatch<React.SetStateAction<SnakeProps[]>>,
  direction: SnakeDirection,
  trailLength: number,
  intervalId: MutableRefObject<NodeJS.Timeout | null>,
  setTrailLength: React.Dispatch<React.SetStateAction<number>>,
  fruit: FruitProps,
  setFruit: React.Dispatch<React.SetStateAction<FruitProps>>
) {
  return useCallback(() => {
    setSnake((prevSnake) => {
      const newSnake = [...prevSnake];
      const head = { ...newSnake[0] };

      switch (direction) {
        case "UP":
          head.y -= 1;
          head.direction = "UP";
          break;
        case "RIGHT":
          head.x += 1;
          head.direction = "RIGHT";
          break;
        case "DOWN":
          head.y += 1;
          head.direction = "DOWN";
          break;
        case "LEFT":
          head.x -= 1;
          head.direction = "LEFT";
          break;
      }

      // Check if the snake is outside the board
      if (
        head.x < 0 ||
        head.x >= BOARD_SIZE ||
        head.y < 0 ||
        head.y >= BOARD_SIZE
      ) {
        if (intervalId.current) clearInterval(intervalId.current);
        return prevSnake;
      }

      if (newSnake.some((cell) => cell.x === head.x && cell.y === head.y)) {
        if (intervalId.current) clearInterval(intervalId.current);
        return prevSnake;
      }

      if (head.x === fruit.x && head.y === fruit.y) {
        setTrailLength((prevLength) => prevLength + 1); // increase the trail length
        setFruit(generateFruit(newSnake));
      }

      newSnake.unshift(head);

      if (newSnake.length > trailLength) {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, trailLength]);
}
