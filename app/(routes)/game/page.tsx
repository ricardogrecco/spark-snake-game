"use client";

import ArrowKeys from "@/app/components/partials/ArrowKeys";
import { generateFruit } from "@/app/helpers/generateFruit";
import { useKeyboardDirectionEffect } from "@/app/hooks/KeyboardDirectionEffect";
import useMoveSnakeCallback from "@/app/hooks/MoveSnakeCallback";
import { useSnakeIntervalEffect } from "@/app/hooks/SnakeIntervalEffect";
import { FruitProps, SnakeDirection, SnakeProps } from "@/app/types";
import { BOARD_SIZE } from "@/app/utils/constants";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";

const Board = dynamic(() => import("@/app/components/partials/game/Board"), {
  ssr: false,
});

export default function GamePage() {
  const [direction, setDirection] = useState<SnakeDirection>("RIGHT");
  const [tailLength, setTailLength] = useState(1);
  const intervalId = useRef<NodeJS.Timeout | null>(null);
  const [snake, setSnake] = useState<SnakeProps[]>([
    {
      x: Math.floor(BOARD_SIZE / 2),
      y: Math.floor(BOARD_SIZE / 2),
      direction: "RIGHT",
    },
  ]);
  const [fruit, setFruit] = useState<FruitProps>(generateFruit(snake));
  const [score, setScore] = useState<number>(0);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  useKeyboardDirectionEffect(snake, setDirection, isGameOver);

  const moveSnake = useMoveSnakeCallback({
    setSnake,
    direction,
    tailLength,
    intervalId,
    setTailLength,
    fruit,
    setFruit,
    setScore,
    isGameOver,
    setIsGameOver,
  });

  useSnakeIntervalEffect(
    tailLength,
    intervalId,
    setInterval,
    moveSnake,
    isGameOver
  );

  return (
    <main className="bg-gradient-to-br from-[#5A12AA] to-[#290057] w-full h-full flex flex-col items-center justify-evenly gap-5 p-10 lg:p-16">
      <section className="flex flex-row justify-between items-center w-full">
        <div className="flex items-center flex-row gap-2">
          <img
            src="assets/Fruit.svg"
            className="inline-block"
            alt="Fruit Score"
          />
          <span className="inline-block text-xl font-bold">{score}</span>
        </div>
        <span className="text-2xl font-bold">0:01</span>
      </section>
      <section className="">
        <Board snake={snake} fruit={fruit} />
      </section>
      <section className="scale-75">
        <ArrowKeys />
      </section>
    </main>
  );
}
