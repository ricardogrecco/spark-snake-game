import { useCallback, useContext } from "react";
import { BOARD_COLUMNS, BOARD_ROWS } from "../utils/constants";
import { generateFruit } from "../helpers/generateFruit";
import { GameContext } from "../context/GameContext";

const useMoveSnakeCallback = () => {
  const {
    direction,
    snake,
    setSnake,
    tailLength,
    setTailLength,
    snakeInterval,
    fruit,
    setFruit,
    gameOver,
    setGameOver,
    setScore,
    soundEat,
    loading,
    playState,
  } = useContext(GameContext);

  return useCallback(() => {
    if (gameOver || loading) {
      if (snakeInterval.current) clearInterval(snakeInterval.current);
      return;
    }

    setSnake((prevSnake) => {
      const newSnake = [...prevSnake];
      const head = { ...newSnake[0] };

      switch (direction.current) {
        case "UP":
          head.y -= 1;
          head.direction = direction.current;
          break;
        case "RIGHT":
          head.x += 1;
          head.direction = direction.current;
          break;
        case "DOWN":
          head.y += 1;
          head.direction = direction.current;
          break;
        case "LEFT":
          head.x -= 1;
          head.direction = direction.current;
          break;
      }

      // Check if the snake is outside the board
      if (
        head.x < 0 ||
        head.x >= BOARD_COLUMNS ||
        head.y < 0 ||
        head.y >= BOARD_ROWS
      ) {
        if (snakeInterval.current) clearInterval(snakeInterval.current);
        setGameOver(true);
        return prevSnake;
      }

      if (newSnake.some((cell) => cell.x === head.x && cell.y === head.y)) {
        if (snakeInterval.current) clearInterval(snakeInterval.current);
        setGameOver(true);
        return prevSnake;
      }

      if (head.x === fruit.x && head.y === fruit.y) {
        setTailLength((prevLength) => prevLength + 1);
        setFruit(generateFruit(newSnake, fruit));
        setScore((score) => score + 1);
        soundEat();
      }

      newSnake.unshift(head);

      if (newSnake.length > tailLength) {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [
    direction,
    snake,
    tailLength,
    gameOver,
    setSnake,
    setTailLength,
    fruit,
    setFruit,
    setScore,
    setGameOver,
    snakeInterval,
    playState,
    loading,
    soundEat,
  ]);
};

export default useMoveSnakeCallback;
