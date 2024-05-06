import { MutableRefObject, useEffect } from "react";

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
      500 - Math.sqrt(tailLength) * 50
    );

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, [moveSnake, tailLength, isGameOver, setInterval]);
};
