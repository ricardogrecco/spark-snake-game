import { useCallback, useContext } from "react";
import { BOARD_SIZE } from "../utils/constants";
import { generateFruit } from "../helpers/generateFruit";
import { GameContext } from "../context/GameContext";

const useMoveSnakeCallback = () => {
  const {
    direction,
    setSnake,
    tailLength,
    setTailLength,
    snakeInterval,
    fruit,
    setFruit,
    gameOver,
    setGameOver,
    setScore,
  } = useContext(GameContext);

  return useCallback(() => {
    if (gameOver) {
      if (snakeInterval.current) clearInterval(snakeInterval.current);
      return;
    }

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
        if (snakeInterval.current) clearInterval(snakeInterval.current);
        setGameOver(true);
        console.log("Game Over", {
          newSnake,
          gameOver,
          timestamp: Date.now(),
        });
        return prevSnake;
      }

      if (newSnake.some((cell) => cell.x === head.x && cell.y === head.y)) {
        if (snakeInterval.current) clearInterval(snakeInterval.current);
        setGameOver(true);
        console.log("Game Over", {
          newSnake,
          gameOver,
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
    gameOver,
    setSnake,
    setTailLength,
    fruit,
    setFruit,
    setScore,
    setGameOver,
    snakeInterval,
  ]);
};

export default useMoveSnakeCallback;
