"use client";

import { isSnakeNearFruit } from "@/app/helpers/isSnakeNearFruit";
import { FruitProps, SnakeProps } from "@/app/types";
import { BOARD_COLUMNS, BOARD_ROWS } from "@/app/utils/constants";
import dynamic from "next/dynamic";

const Cell = dynamic(() => import("./Cell"), { ssr: false });

type BoardProps = {
  snake: SnakeProps[];
  fruit: FruitProps;
  isGameOver: boolean;
};

export default function Board({ snake, fruit, isGameOver }: BoardProps) {
  return (
    <div className="grid rounded-[12px] scale-110 lg:scale-150 lg:my-20 border-[#EC76FF] border-[0.2rem] shadow-neonpink p-[5px]">
      <div className="overflow-hidden rounded-[7px]">
        {Array.from({ length: BOARD_ROWS }, (_, i) => (
          <div key={i} className="flex">
            {Array.from({ length: BOARD_COLUMNS }, (_, j) => (
              <Cell
                key={j}
                isSnakeHead={snake[0].x === j && snake[0].y === i}
                isSnakeBody={snake.some(
                  (cell, index) => index !== 0 && cell.x === j && cell.y === i
                )}
                direction={
                  snake.find((cell) => cell.x === j && cell.y === i)
                    ?.direction ?? "RIGHT"
                }
                isFruit={fruit.x === j && fruit.y === i}
                isNearFruit={isSnakeNearFruit(snake[0], fruit)}
                isGameOver={isGameOver}
                checkered={(i + j) % 2 === 0}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
