import { useEffect } from "react";
import { SnakeDirection, SnakeProps } from "../types";
import { SNAKE_SPEED, SNAKE_SPEED_INCREMENT } from "../utils/constants";

export const useKeyboardDirectionEffect = (
  snake: SnakeProps[],
  setDirection: (direction: SnakeDirection) => void,
  isGameOver: boolean,
  tailLength: number
) => {
  useEffect(() => {
    let isMoving = false;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (isGameOver || isMoving) return;

      isMoving = true;

      switch (event.key) {
        case "ArrowUp":
          if (snake[0].direction !== "DOWN") {
            setDirection("UP");
          }
          break;
        case "ArrowRight":
          if (snake[0].direction !== "LEFT") {
            setDirection("RIGHT");
          }
          break;
        case "ArrowDown":
          if (snake[0].direction !== "UP") {
            setDirection("DOWN");
          }
          break;
        case "ArrowLeft":
          if (snake[0].direction !== "RIGHT") {
            setDirection("LEFT");
          }
          break;
      }

      setTimeout(() => {
        isMoving = false;
      }, SNAKE_SPEED - Math.sqrt(tailLength) * SNAKE_SPEED_INCREMENT);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [snake, setDirection, isGameOver]);
};
