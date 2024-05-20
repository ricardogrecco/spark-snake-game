"use client";
import { SnakeDirection } from "@/app/types";

// SVGS
import SNAKE_HEAD_OPEN from "@/public/assets/SnakeHeadOpen.svg";
import SNAKE_HEAD from "@/public/assets/SnakeHead.svg";
import SNAKE_BODY from "@/public/assets/SnakeBody.svg";
import FRUIT from "@/public/assets/Fruit.svg";
import CRASH from "@/public/assets/Crash.svg";

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
    return (
      <div
        className={`w-5 h-5 flex items-center justify-center ${
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
              className={`w-10 h-10 animate-crashFade
            `}
            />
          </span>
        )}
        {isSnakeHead && isNearFruit && (
          <SNAKE_HEAD_OPEN
            alt="Snake Head Open"
            className={`w-5 h-5 absolute 
              ${
                direction === "UP"
                  ? "transform -rotate-90"
                  : direction === "DOWN"
                  ? "transform rotate-90"
                  : direction === "LEFT"
                  ? "transform rotate-180"
                  : ""
              }
            `}
          />
        )}
        {isSnakeHead && !isNearFruit && (
          <SNAKE_HEAD
            alt="Snake Head"
            className={`w-5 h-5 absolute 
              ${
                direction === "UP"
                  ? "transform -rotate-90"
                  : direction === "DOWN"
                  ? "transform rotate-90"
                  : direction === "LEFT"
                  ? "transform rotate-180"
                  : ""
              }
            `}
          />
        )}

        {isSnakeBody && (
          <SNAKE_BODY alt="Snake Body" className="absolute w-4 h-4" />
        )}

        {isFruit && <FRUIT alt="Fruit" className="absolute w-5 h-5" />}
      </div>
    );
  }
);

Cell.displayName = "Cell";

export default Cell;
