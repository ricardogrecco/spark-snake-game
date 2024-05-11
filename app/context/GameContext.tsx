"use client";

import { createContext, useEffect, useRef, useState } from "react";
import { FruitProps, SnakeDirection, SnakeProps } from "../types";
import {
  BOARD_SIZE,
  SNAKE_SPEED,
  SNAKE_SPEED_INCREMENT,
  TIMER,
} from "../utils/constants";
import { generateFruit } from "../helpers/generateFruit";
import { useKeyboardDirectionEffect } from "../hooks/KeyboardDirectionEffect";
import useMoveSnakeCallback from "../hooks/MoveSnakeCallback";
import { useSnakeIntervalEffect } from "../hooks/SnakeIntervalEffect";

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
  timer: number;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  timerInterval: React.MutableRefObject<NodeJS.Timeout | null>;
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
  timer: 1000 * 60,
  setTimer: () => {},
  timerInterval: { current: null },
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
  const [fruit, setFruit] = useState<FruitProps>(
    generateFruit(snake, {
      x: Math.floor(BOARD_SIZE / 2),
      y: Math.floor(BOARD_SIZE / 2),
    })
  );
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const [timer, setTimer] = useState<number>(1000 * TIMER);
  const timerInterval = useRef<NodeJS.Timeout | null>(null);

  const moveSnake = useMoveSnakeCallback();

  useEffect(() => {
    if (gameOver) {
      if (timerInterval.current) clearInterval(timerInterval.current);
      if (snakeInterval.current) clearInterval(snakeInterval.current);
    } else {
      if (snakeInterval.current) clearInterval(snakeInterval.current);

      setSnake([
        {
          x: Math.floor(BOARD_SIZE / 2),
          y: Math.floor(BOARD_SIZE / 2),
          direction: "RIGHT",
        },
      ]);

      setTailLength(1);

      setFruit(generateFruit(snake, fruit));

      setScore(0);

      snakeInterval.current = setInterval(
        moveSnake,
        SNAKE_SPEED - Math.sqrt(tailLength) * SNAKE_SPEED_INCREMENT
      );

      setTimer(1000 * TIMER);
      timerInterval.current = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 0) {
            clearInterval(timerInterval.current!);
            setGameOver(true);
            return 0;
          }

          return prevTimer - 1000;
        });
      }, 1000);
    }

    return () => {
      if (timerInterval.current) clearInterval(timerInterval.current);
      if (snakeInterval.current) clearInterval(snakeInterval.current);
    };
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
          // timer
          timer,
          setTimer,
          timerInterval,
        } as GameContextType
      }
    >
      {children}
    </GameContext.Provider>
  );
}
