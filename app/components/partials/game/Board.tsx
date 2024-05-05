"use client";

import { FruitProps, SnakeProps } from "@/app/types";
import Cell from "./Cell";
import { BOARD_SIZE } from "@/app/utils/constants";

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
              isNearFruit={false}
              checkered={(i + j) % 2 ? true : false}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
