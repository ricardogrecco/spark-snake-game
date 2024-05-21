"use client";

import { createContext, useEffect, useRef, useState } from "react";
import { FruitProps, SnakeDirection, SnakeProps } from "../types";
import {
  BOARD_COLUMNS,
  BOARD_ROWS,
  SNAKE_SPEED,
  SNAKE_SPEED_INCREMENT,
  TIMER,
} from "../utils/constants";
import { generateFruit } from "../helpers/generateFruit";

import useMoveSnakeCallback from "../hooks/MoveSnakeCallback";

import useSound from "use-sound";

type GameContextType = {
  // Direction
  direction: SnakeDirection;
  setDirection: React.Dispatch<React.SetStateAction<SnakeDirection>>;
  // Tail Length
  tailLength: number;
  setTailLength: React.Dispatch<React.SetStateAction<number>>;
  // Snake
  snake: SnakeProps[];
  setSnake: React.Dispatch<React.SetStateAction<SnakeProps[]>>;
  // Fruit
  fruit: FruitProps;
  setFruit: React.Dispatch<React.SetStateAction<FruitProps>>;
  // Score
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  // Game Over
  gameOver: boolean;
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  // Intervals
  snakeInterval: React.MutableRefObject<NodeJS.Timeout | null>;
  timer: number;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  timerInterval: React.MutableRefObject<NodeJS.Timeout | null>;
  // Sounds
  muteSounds: boolean;
  setMuteSounds: React.Dispatch<React.SetStateAction<boolean>>;
  soundEat: () => void;
  soundMove: () => void;
  soundGameOver: () => void;
};

export const GameContext = createContext<GameContextType>({
  // Direction
  direction: "RIGHT",
  setDirection: () => {},
  // Tail Length
  tailLength: 1,
  setTailLength: () => {},
  // Snake
  snake: [],
  setSnake: () => {},
  // Fruit
  fruit: { x: 0, y: 0 },
  setFruit: () => {},
  // Score
  score: 0,
  setScore: () => {},
  // Game Over
  gameOver: false,
  setGameOver: () => {},
  // Intervals
  snakeInterval: { current: null },
  timer: 1000 * 60,
  setTimer: () => {},
  timerInterval: { current: null },
  // Sounds
  muteSounds: false,
  setMuteSounds: () => {},
  soundEat: () => {},
  soundMove: () => {},
  soundGameOver: () => {},
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
      x: Math.floor(BOARD_ROWS / 2),
      y: Math.floor(BOARD_COLUMNS / 2),
      direction: "RIGHT",
    },
  ]);
  const [fruit, setFruit] = useState<FruitProps>(
    generateFruit(snake, {
      x: Math.floor(BOARD_ROWS / 2),
      y: Math.floor(BOARD_COLUMNS / 2),
    })
  );
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const [timer, setTimer] = useState<number>(1000 * TIMER);
  const timerInterval = useRef<NodeJS.Timeout | null>(null);

  const moveSnake = useMoveSnakeCallback();

  // SOUNDS
  const [muteSounds, setMuteSounds] = useState<boolean>(false);
  const [soundEat] = useSound("/sounds/Eat.wav", {
    soundEnabled: !muteSounds,
  });
  const [soundMove] = useSound("/sounds/Move.wav", {
    soundEnabled: !muteSounds,
  });
  const [soundGameOver] = useSound("/sounds/Die.wav", {
    soundEnabled: !muteSounds,
  });

  useEffect(() => {
    if (gameOver) {
      if (timerInterval.current) clearInterval(timerInterval.current);
      if (snakeInterval.current) clearInterval(snakeInterval.current);
      soundGameOver();
    } else {
      if (snakeInterval.current) clearInterval(snakeInterval.current);

      setSnake([
        {
          x: Math.floor(BOARD_COLUMNS / 2),
          y: Math.floor(BOARD_ROWS / 2),
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
          // Sounds
          muteSounds,
          setMuteSounds,
          soundEat,
          soundMove,
          soundGameOver,
        } as GameContextType
      }
    >
      {children}
    </GameContext.Provider>
  );
}
