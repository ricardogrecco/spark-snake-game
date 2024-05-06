import React, { MutableRefObject, useCallback } from "react";
import { SnakeProps, SnakeDirection, FruitProps } from "../types";
import { BOARD_SIZE } from "../utils/constants";
import { generateFruit } from "../helpers/generateFruit";

type MoveSnakeCallbackProps = {
  setSnake: React.Dispatch<React.SetStateAction<SnakeProps[]>>;
  direction: SnakeDirection;
  tailLength: number;
  intervalId: MutableRefObject<NodeJS.Timeout | null>;
  setTailLength: React.Dispatch<React.SetStateAction<number>>;
  fruit: FruitProps;
  setFruit: React.Dispatch<React.SetStateAction<FruitProps>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  isGameOver: boolean;
  setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
};

const useMoveSnakeCallback = ({
  setSnake,
  direction,
  tailLength,
  intervalId,
  setTailLength,
  fruit,
  setFruit,
  setScore,
  isGameOver,
  setIsGameOver,
}: MoveSnakeCallbackProps) => {
  return useCallback(() => {
    if (isGameOver) return;

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
        setIsGameOver(true);
        console.log("Game Over", {
          newSnake,
          isGameOver,
          timestamp: Date.now(),
        });
        return prevSnake;
      }

      if (newSnake.some((cell) => cell.x === head.x && cell.y === head.y)) {
        if (intervalId.current) clearInterval(intervalId.current);
        setIsGameOver(true);
        console.log("Game Over", {
          newSnake,
          isGameOver,
          timestamp: Date.now(),
        });
        return prevSnake;
      }

      if (head.x === fruit.x && head.y === fruit.y) {
        setTailLength((prevLength) => prevLength + 1);
        setFruit(generateFruit(newSnake));
        setScore((score) => score + 1);
      }

      newSnake.unshift(head);

      if (newSnake.length > tailLength) {
        newSnake.pop();
      }

      console.log("Snake", { newSnake, timestamp: Date.now() });
      return newSnake;
    });
  }, [
    direction,
    tailLength,
    isGameOver,
    setSnake,
    setTailLength,
    fruit,
    setFruit,
    setScore,
    setIsGameOver,
    intervalId,
  ]);
};

export default useMoveSnakeCallback;
