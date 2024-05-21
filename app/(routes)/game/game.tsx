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
import { MdVolumeOff, MdVolumeUp } from "react-icons/md";

const Board = dynamic(() => import("@/app/components/partials/game/Board"), {
  ssr: false,
});

export default function MainGame() {
  const { snake, fruit, score, gameOver, timer, muteSounds, setMuteSounds } =
    useContext(GameContext);

  useKeyboardDirectionEffect();

  const moveSnake = useMoveSnakeCallback();

  useSnakeIntervalEffect(moveSnake);

  return (
    <div className="bg-gradient-to-br from-[#690FA6] to-[#A60E7E] h-screen flex flex-col items-center justify-center gap-5 p-10 xl:p-16 ">
      <section className="scale-90 md:scale-125 lg:scale-75 xl:scale-100 nest-hub:board nest-hub-max:board">
        {/* Score & Timer & Volume */}
        <div className="flex flex-row justify-between items-center w-full mb-10 lg:mb-24 scale-110 lg:scale-150">
          <div className="flex items-center flex-row gap-2">
            <Fruit className="w-8 h-8 filter-glow" alt="Fruit Score" />
            <span className="inline-block text-3xl font-bold text-glow">
              {score}
            </span>
          </div>
          <span
            className={`text-3xl font-bold ${
              timer / 1000 <= 10
                ? "text-warning text-glow-warning"
                : "text-glow"
            } ${
              !gameOver && timer / 1000 <= 10 && "animate-bounce duration-1000"
            }`}
          >
            {formatTime(timer)}
          </span>
          <button onClick={() => setMuteSounds((sounds) => !sounds)}>
            {muteSounds ? (
              <MdVolumeOff className="w-8 h-8 filter-glow" />
            ) : (
              <MdVolumeUp className="w-8 h-8 filter-glow" />
            )}
          </button>
        </div>
        <Board snake={snake} fruit={fruit} isGameOver={gameOver} />
      </section>
      <section className="scale-110 mb-12 md:scale-150 md:mt-24 lg:-mt-10 xl:scale-170 xl:mt-10 nest-hub:keys nest-hub-max:keys">
        <ArrowKeys disabled={false} />
      </section>
    </div>
  );
}
