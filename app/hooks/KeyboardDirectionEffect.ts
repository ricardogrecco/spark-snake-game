import { useContext, useEffect, useRef } from "react";
import { SnakeDirection } from "../types";
import { SNAKE_SPEED, SNAKE_SPEED_INCREMENT } from "../utils/constants";
import { GameContext } from "../context/GameContext";

export const useKeyboardDirectionEffect = () => {
  const { snake, setDirection, gameOver, tailLength } = useContext(GameContext);

  const directionBuffer = useRef<SnakeDirection | null>(null);

  useEffect(() => {
    let isMoving = false;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (gameOver || isMoving) return;

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
  }, [snake, setDirection, gameOver]);

  useEffect(() => {
    if (directionBuffer.current) {
      setDirection(directionBuffer.current);
      directionBuffer.current = null;
    }
  }, [snake]);
};
