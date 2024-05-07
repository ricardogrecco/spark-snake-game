"use client";

import { createContext, useEffect, useRef, useState } from "react";
import { FruitProps, SnakeDirection, SnakeProps } from "../types";
import { BOARD_SIZE } from "../utils/constants";
import { generateFruit } from "../helpers/generateFruit";

type GameContextType = {
  direction: SnakeDirection;
  setDirection: React.Dispatch<React.SetStateAction<SnakeDirection>>;
  tailLength: number;
  setTailLength: React.Dispatch<React.SetStateAction<number>>;
  snake: SnakeProps[];
  setSnake: React.Dispatch<React.SetStateAction<SnakeProps[]>>;
  fruit: FruitProps;
  setFruit: React.Dispatch<React.SetStateAction<FruitProps>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  gameOver: boolean;
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  snakeInterval: React.MutableRefObject<NodeJS.Timeout | null>;
};

export const GameContext = createContext<GameContextType>({
  direction: "RIGHT",
  setDirection: () => {},
  tailLength: 1,
  setTailLength: () => {},
  snake: [],
  setSnake: () => {},
  fruit: { x: 0, y: 0 },
  setFruit: () => {},
  score: 0,
  setScore: () => {},
  gameOver: false,
  setGameOver: () => {},
  snakeInterval: { current: null },
});

export default function GameProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [direction, setDirection] = useState<SnakeDirection>("RIGHT");
  const [tailLength, setTailLength] = useState(1);
  const snakeInterval = useRef<NodeJS.Timeout | null>(null);
  const [snake, setSnake] = useState<SnakeProps[]>([
    {
      x: Math.floor(BOARD_SIZE / 2),
      y: Math.floor(BOARD_SIZE / 2),
      direction: "RIGHT",
    },
  ]);
  const [fruit, setFruit] = useState<FruitProps>(generateFruit(snake));
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);

  useEffect(() => {
    if (!gameOver) {
      if (snakeInterval.current) {
        clearInterval(snakeInterval.current);
      }

      setSnake([
        {
          x: Math.floor(BOARD_SIZE / 2),
          y: Math.floor(BOARD_SIZE / 2),
          direction: "RIGHT",
        },
      ]);

      setTailLength(1);

      setFruit(generateFruit(snake));

      setScore(0);

      const interval = setInterval(() => {}, 100);

      snakeInterval.current = interval;
    }
  }, [gameOver]);

  return (
    <GameContext.Provider
      value={
        {
          // Snake Direction
          direction,
          setDirection,
          // Tail Length
          tailLength,
          setTailLength,
          // Snake
          snake,
          setSnake,
          // Fruit
          fruit,
          setFruit,
          // Score
          score,
          setScore,
          // Game Over
          gameOver,
          setGameOver,
          // Intervals
          snakeInterval,
        } as GameContextType
      }
    >
      {children}
    </GameContext.Provider>
  );
}
