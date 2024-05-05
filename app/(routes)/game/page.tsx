"use client";

import ArrowKeys from "@/app/components/partials/ArrowKeys";
import Board from "@/app/components/partials/game/Board";
import { generateFruit } from "@/app/helpers/generateFruit";
import MoveSnakeCallback from "@/app/hooks/MoveSnakeCallback";
import { FruitProps, SnakeDirection, SnakeProps } from "@/app/types";
import { BOARD_SIZE } from "@/app/utils/constants";
import { useEffect, useRef, useState } from "react";

export default function GamePage() {
  const [direction, setDirection] = useState<SnakeDirection>("RIGHT");
  const [trailLength, setTrailLength] = useState(1);
  const intervalId = useRef<NodeJS.Timeout | null>(null);
  const [snake, setSnake] = useState<SnakeProps[]>([
    {
      x: Math.floor(BOARD_SIZE / 2),
      y: Math.floor(BOARD_SIZE / 2),
      direction: "RIGHT",
    },
  ]);
  const [fruit, setFruit] = useState<FruitProps>(generateFruit(snake));

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
          setDirection("UP");
          break;
        case "ArrowRight":
          setDirection("RIGHT");
          break;
        case "ArrowDown":
          setDirection("DOWN");
          break;
        case "ArrowLeft":
          setDirection("LEFT");
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const moveSnake = MoveSnakeCallback(
    setSnake,
    direction,
    trailLength,
    intervalId,
    setTrailLength,
    fruit,
    setFruit
  );

  useEffect(() => {
    intervalId.current = setInterval(
      moveSnake,
      1000 - Math.sqrt(trailLength) * 100
    );

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, [moveSnake]);

  return (
    <main className="bg-gradient-to-br from-[#5A12AA] to-[#290057] w-full h-full flex flex-col items-center justify-evenly gap-5 p-10 lg:p-16">
      <section className="flex flex-row justify-between items-center w-full">
        <div className="flex items-center flex-row">
          <img
            src="assets/Fruit.svg"
            className="inline-block"
            alt="Fruit Score"
          />
          <span className="inline-block text-xl font-bold">1</span>
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
