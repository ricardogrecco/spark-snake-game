import { useEffect } from "react";
import { SnakeDirection, SnakeProps } from "../types";

export const useKeyboardDirectionEffect = (
  snake: SnakeProps[],
  setDirection: (direction: SnakeDirection) => void,
  isGameOver: boolean
) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isGameOver) return;

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
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [snake, setDirection, isGameOver]);
};
