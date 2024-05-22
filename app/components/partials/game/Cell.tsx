"use client";
import { SnakeDirection } from "@/app/types";

// SVGS
import SNAKE_HEAD_OPEN from "@/public/assets/SnakeHeadOpen2.svg";
import SNAKE_HEAD from "@/public/assets/SnakeHead2.svg";
import SNAKE_BODY from "@/public/assets/SnakeBody2.svg";
import FRUIT from "@/public/assets/Fruit.svg";
import CRASH from "@/public/assets/Crash.svg";
import SNAKE_HEAD_OVER from "@/public/assets/SnakeHeadOver2.svg";

import React from "react";

type CellProps = {
  isSnakeHead: boolean;
  isSnakeBody: boolean;
  direction: SnakeDirection;
  isFruit: boolean;
  isNearFruit: boolean;
  checkered?: boolean;
  isGameOver: boolean;
};

const Cell = React.memo(
  ({
    isSnakeHead,
    isSnakeBody,
    direction,
    isFruit,
    isNearFruit,
    checkered = false,
    isGameOver = false,
  }: CellProps) => {
    const snakeHeadDirectionClass = `size-14 filter-snake-glow absolute 
              ${
                direction === "UP"
                  ? "transform -rotate-90"
                  : direction === "DOWN"
                  ? "transform rotate-90"
                  : direction === "LEFT"
                  ? "transform scale-x-[-1]"
                  : ""
              }
            `;

    return (
      <div
        className={`size-10 flex items-center justify-center ${
          checkered ? "bg-[#3D0E6F]" : "bg-[#4F0B97]"
        }`}
      >
        {isGameOver && isSnakeHead && (
          <span
            className={`absolute  ${
              direction === "UP"
                ? "transform rotate-90 -mb-3"
                : direction === "DOWN"
                ? "transform -rotate-90 -mt-3"
                : direction === "LEFT"
                ? "transform -mr-3"
                : "transform rotate-180 -ml-3"
            }`}
          >
            <CRASH
              alt="Crash"
              className={`size-20 animate-crashFade
            `}
            />
          </span>
        )}
        {!isGameOver && isSnakeHead && isNearFruit && (
          <SNAKE_HEAD_OPEN
            alt="Snake Head Open"
            className={snakeHeadDirectionClass}
          />
        )}
        {!isGameOver && isSnakeHead && !isNearFruit && (
          <SNAKE_HEAD alt="Snake Head" className={snakeHeadDirectionClass} />
        )}
        {isGameOver && isSnakeHead && (
          <SNAKE_HEAD_OVER
            alt="Snake Head Over"
            className={snakeHeadDirectionClass}
          />
        )}

        {isSnakeBody && (
          <SNAKE_BODY alt="Snake Body" className="absolute size-8" />
        )}

        {isFruit && (
          <FRUIT alt="Fruit" className="absolute size-7 filter-glow" />
        )}
      </div>
    );
  }
);

Cell.displayName = "Cell";

export default Cell;
