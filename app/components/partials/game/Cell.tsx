"use client";
import { SnakeDirection } from "@/app/types";

// SVGS
import SNAKE_HEAD_OPEN from "@/public/assets/SnakeHeadOpen.svg";
import SNAKE_HEAD from "@/public/assets/SnakeHead.svg";
import SNAKE_BODY from "@/public/assets/SnakeBody.svg";
import FRUIT from "@/public/assets/Fruit.svg";
import React from "react";

type CellProps = {
  isSnakeHead: boolean;
  isSnakeBody: boolean;
  direction: SnakeDirection;
  isFruit: boolean;
  isNearFruit: boolean;
  checkered?: boolean;
};

const Cell = React.memo(
  ({
    isSnakeHead,
    isSnakeBody,
    direction,
    isFruit,
    isNearFruit,
    checkered = false,
  }: CellProps) => {
    return (
      <div
        className={`w-5 h-5 flex items-center justify-center ${
          checkered && "bg-base-300"
        }`}
      >
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
