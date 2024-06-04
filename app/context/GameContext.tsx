"use client";

import { createContext, useEffect, useMemo, useRef, useState } from "react";
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
  direction: React.MutableRefObject<SnakeDirection>;
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
  // Loading
  loading: boolean;
  // Play State
  playState: boolean;
  setPlayState: React.Dispatch<React.SetStateAction<boolean>>;
  // Move Snake
  moveSnake: () => void;
};

export const GameContext = createContext<GameContextType>({
  // Direction
  direction: { current: "RIGHT" },
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
  // Loading
  loading: false,
  // Play State
  playState: false,
  setPlayState: () => {},
  // Move Snake
  moveSnake: () => {},
});

export default function GameProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // DIRECTION
  const direction = useRef<SnakeDirection>("NONE");

  const [tailLength, setTailLength] = useState(1);
  const snakeInterval = useRef<NodeJS.Timeout | null>(null);
  const [snake, setSnake] = useState<SnakeProps[]>([
    {
      x: Math.floor(BOARD_ROWS / 2),
      y: Math.floor(BOARD_COLUMNS / 2),
      direction: "NONE",
    },
  ]);

  // FRUIT
  const [fruit, setFruit] = useState<FruitProps>(
    generateFruit(snake, {
      x: Math.floor(BOARD_ROWS / 2),
      y: Math.floor(BOARD_COLUMNS / 2),
    })
  );

  // SCORE
  const [score, setScore] = useState<number>(0);

  // PLAY STATE
  const [playState, setPlayState] = useState<boolean>(false);

  // GAME OVER STATE
  const [gameOver, setGameOver] = useState<boolean>(false);

  // TIMER
  const [timer, setTimer] = useState<number>(1000 * TIMER);
  const timerInterval = useRef<NodeJS.Timeout | null>(null);

  // LOADING
  const [loading, setLoading] = useState(true);

  // MOVE SNAKE CALLBACK
  const moveSnake = useMoveSnakeCallback();

  // SOUNDS
  const [muteSounds, setMuteSounds] = useState<boolean>(false);
  const [soundEat] = useSound("/sounds/Eat.wav", {
    volume: !muteSounds ? 1 : 0,
  });
  const [soundMove] = useSound("/sounds/Move.wav", {
    volume: !muteSounds ? 1 : 0,
  });
  const [soundGameOver] = useSound("/sounds/Die.wav", {
    volume: !muteSounds ? 1 : 0,
  });

  useEffect(() => {
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.onload = () => {
        setLoading(false);
      };
    }
  }, []);

  useEffect(() => {
    if (loading) return;

    !playState && !gameOver && setTimer(1000 * TIMER);

    if (gameOver) {
      if (timerInterval.current) clearInterval(timerInterval.current);
      if (snakeInterval.current) clearInterval(snakeInterval.current);
      setPlayState(false);
      direction.current = "NONE";
      soundGameOver();
    } else {
      if (snakeInterval.current) clearInterval(snakeInterval.current);

      setSnake([
        {
          x: Math.floor(BOARD_COLUMNS / 2),
          y: Math.floor(BOARD_ROWS / 2),
          direction: "NONE",
        },
      ]);

      setTailLength(1);

      setScore(0);

      snakeInterval.current = setInterval(
        moveSnake,
        SNAKE_SPEED - Math.sqrt(tailLength) * SNAKE_SPEED_INCREMENT
      );

      if (playState) {
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
    }

    return () => {
      if (timerInterval.current) clearInterval(timerInterval.current);
      if (snakeInterval.current) clearInterval(snakeInterval.current);
    };
  }, [gameOver, loading, playState]);

  const contextValue = useMemo(
    () => ({
      // Snake Direction
      direction,
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
      // Loading
      loading,
      // Play State
      playState,
      setPlayState,
      // Move Snake
      moveSnake,
    }),
    [
      tailLength,
      setTailLength,
      snake,
      setSnake,
      fruit,
      setFruit,
      score,
      setScore,
      gameOver,
      setGameOver,
      snakeInterval,
      timer,
      setTimer,
      timerInterval,
      muteSounds,
      setMuteSounds,
      soundEat,
      soundMove,
      soundGameOver,
      loading,
      playState,
      setPlayState,
    ]
  );

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
}
