"use client";

import { isSnakeNearFruit } from "@/app/helpers/isSnakeNearFruit";
import { FruitProps, SnakeProps } from "@/app/types";
import { BOARD_SIZE } from "@/app/utils/constants";
import dynamic from "next/dynamic";

const Cell = dynamic(() => import("./Cell"), { ssr: false });

type BoardProps = {
  snake: SnakeProps[];
  fruit: FruitProps;
};

export default function Board({ snake, fruit }: BoardProps) {
  return (
    <div className="grid bg-base-100 rounded-md scale-110 lg:scale-150 lg:my-20">
      {Array.from({ length: BOARD_SIZE }, (_, i) => (
        <div key={i} className="flex">
          {Array.from({ length: BOARD_SIZE }, (_, j) => (
            <Cell
              key={j}
              isSnakeHead={snake[0].x === j && snake[0].y === i}
              isSnakeBody={snake.some(
                (cell, index) => index !== 0 && cell.x === j && cell.y === i
              )}
              direction={
                snake.find((cell) => cell.x === j && cell.y === i)?.direction ||
                "RIGHT"
              }
              isFruit={fruit.x === j && fruit.y === i}
              isNearFruit={isSnakeNearFruit(snake[0], fruit)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
