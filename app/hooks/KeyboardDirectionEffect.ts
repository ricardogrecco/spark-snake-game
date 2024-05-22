import { useContext, useEffect, useRef } from "react";
import { SNAKE_SPEED, SNAKE_SPEED_INCREMENT } from "../utils/constants";
import { GameContext } from "../context/GameContext";
import useMoveSnakeCallback from "./MoveSnakeCallback";

export const useKeyboardDirectionEffect = () => {
  const {
    snake,
    direction,
    gameOver,
    tailLength,
    soundMove,
    loading,
    playState,
    setPlayState,
  } = useContext(GameContext);

  const isMoving = useRef(false);

  useEffect(() => {
    if (loading) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (gameOver || isMoving.current) return;

      isMoving.current = true;

      if (!playState && !loading) {
        setPlayState(true);
      }

      switch (event.key) {
        case "ArrowUp":
          if (snake[0].direction === "NONE" || snake[0].direction !== "DOWN") {
            direction.current = "UP";
            snake[0].direction !== "UP" && soundMove();
          }
          break;
        case "ArrowRight":
          if (snake[0].direction === "NONE" || snake[0].direction !== "LEFT") {
            direction.current = "RIGHT";
            snake[0].direction !== "RIGHT" && soundMove();
          }
          break;
        case "ArrowDown":
          if (snake[0].direction === "NONE" || snake[0].direction !== "UP") {
            direction.current = "DOWN";
            snake[0].direction !== "DOWN" && soundMove();
          }
          break;
        case "ArrowLeft":
          if (snake[0].direction === "NONE" || snake[0].direction !== "RIGHT") {
            direction.current = "LEFT";
            snake[0].direction !== "LEFT" && soundMove();
          }
          break;
      }

      setTimeout(() => {
        isMoving.current = false;
      }, (SNAKE_SPEED - Math.sqrt(tailLength) * SNAKE_SPEED_INCREMENT) * 0.75);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [snake, direction.current, gameOver, loading, playState, setPlayState]);
};
