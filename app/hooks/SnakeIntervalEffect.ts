import { MutableRefObject, useEffect } from "react";
import { SNAKE_SPEED, SNAKE_SPEED_INCREMENT } from "../utils/constants";

export const useSnakeIntervalEffect = (
  tailLength: number,
  intervalId: MutableRefObject<NodeJS.Timeout | null>,
  setInterval: (callback: () => void, ms: number) => NodeJS.Timeout,
  moveSnake: () => void,
  isGameOver: boolean
) => {
  useEffect(() => {
    if (isGameOver) {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
      return;
    }

    intervalId.current = setInterval(
      moveSnake,
      SNAKE_SPEED - Math.sqrt(tailLength) * SNAKE_SPEED_INCREMENT
    );

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, [moveSnake, tailLength, isGameOver, setInterval]);
};
