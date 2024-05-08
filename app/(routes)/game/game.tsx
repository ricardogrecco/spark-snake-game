"use client";

import ArrowKeys from "@/app/components/partials/ArrowKeys";
import { useKeyboardDirectionEffect } from "@/app/hooks/KeyboardDirectionEffect";
import useMoveSnakeCallback from "@/app/hooks/MoveSnakeCallback";
import { useSnakeIntervalEffect } from "@/app/hooks/SnakeIntervalEffect";
import dynamic from "next/dynamic";
import { useContext } from "react";

// SVG
import Fruit from "@/public/assets/Fruit.svg";
import { GameContext } from "@/app/context/GameContext";
import { formatTime } from "@/app/utils/formatTime";

const Board = dynamic(() => import("@/app/components/partials/game/Board"), {
  ssr: false,
});

export default function MainGame() {
  const { snake, fruit, score, gameOver, timer } = useContext(GameContext);

  useKeyboardDirectionEffect();

  const moveSnake = useMoveSnakeCallback();

  useSnakeIntervalEffect(moveSnake);

  return (
    <div className="bg-gradient-to-br from-[#5A12AA]  to-[#290057] h-full flex flex-col items-center justify-evenly gap-5 p-10 lg:p-16">
      <section>
        <div className="flex flex-row justify-between items-center w-full mb-10 lg:mb-24 scale-110 lg:scale-150">
          <div className="flex items-center flex-row gap-2">
            <Fruit className="w-10 h-10" alt="Fruit Score" />
            <span className="inline-block text-2xl font-bold">{score}</span>
          </div>
          <span
            className={`text-2xl font-bold ${
              timer / 1000 <= 10 && "text-warning"
            } ${
              !gameOver && timer / 1000 <= 10 && "animate-bounce duration-1000"
            }`}
          >
            {formatTime(timer)}
          </span>
        </div>
        <Board snake={snake} fruit={fruit} isGameOver={gameOver} />
      </section>
      <section>
        <ArrowKeys />
      </section>
    </div>
  );
}
