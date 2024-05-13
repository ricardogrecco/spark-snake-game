import { useContext, useEffect } from "react";
import { SNAKE_SPEED, SNAKE_SPEED_INCREMENT } from "../utils/constants";
import { GameContext } from "../context/GameContext";

export const useKeyboardDirectionEffect = () => {
  const { snake, setDirection, gameOver, tailLength, soundMove } =
    useContext(GameContext);

  useEffect(() => {
    let isMoving = false;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (gameOver || isMoving) return;

      isMoving = true;

      switch (event.key) {
        case "ArrowUp":
          if (snake[0].direction !== "DOWN") {
            setDirection("UP");
            snake[0].direction !== "UP" && soundMove();
          }
          break;
        case "ArrowRight":
          if (snake[0].direction !== "LEFT") {
            setDirection("RIGHT");
            snake[0].direction !== "RIGHT" && soundMove();
          }
          break;
        case "ArrowDown":
          if (snake[0].direction !== "UP") {
            setDirection("DOWN");
            snake[0].direction !== "DOWN" && soundMove();
          }
          break;
        case "ArrowLeft":
          if (snake[0].direction !== "RIGHT") {
            setDirection("LEFT");
            snake[0].direction !== "LEFT" && soundMove();
          }
          break;
      }

      setTimeout(() => {
        isMoving = false;
      }, (SNAKE_SPEED - Math.sqrt(tailLength) * SNAKE_SPEED_INCREMENT) * 0.75);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [snake, setDirection, gameOver]);
};
