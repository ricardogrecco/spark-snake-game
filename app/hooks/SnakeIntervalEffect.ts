import { useContext, useEffect } from "react";
import { SNAKE_SPEED, SNAKE_SPEED_INCREMENT } from "../utils/constants";
import { GameContext } from "../context/GameContext";

export const useSnakeIntervalEffect = (moveSnake: () => void) => {
  const { tailLength, snakeInterval, gameOver, loading, playState, direction } =
    useContext(GameContext);

  useEffect(() => {
    if (gameOver || loading || !playState) {
      if (snakeInterval.current) {
        clearInterval(snakeInterval.current);
      }
      return;
    }

    snakeInterval.current = setInterval(
      moveSnake,
      SNAKE_SPEED - Math.sqrt(tailLength) * SNAKE_SPEED_INCREMENT
    );

    return () => {
      if (snakeInterval.current) {
        clearInterval(snakeInterval.current);
      }
    };
  }, [moveSnake, tailLength, gameOver, direction.current, loading, playState]);
};
