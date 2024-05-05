"use client";
import { SnakeDirection } from "@/app/types";

type CellProps = {
  isSnakeHead: boolean;
  isSnakeBody: boolean;
  direction: SnakeDirection;
  isFruit: boolean;
  isNearFruit: boolean;
  checkered: boolean;
};

export default function Cell({
  isSnakeHead,
  isSnakeBody,
  direction,
  isFruit,
  isNearFruit,
  checkered = false,
}: CellProps) {
  return (
    <div
      className={`w-5 h-5 flex items-center justify-center ${
        checkered && "bg-base-300"
      }`}
    >
      {isSnakeHead && (
        <img
          src={
            isNearFruit ? "assets/SnakeHeadOpen.svg" : "assets/SnakeHead.svg"
          }
          alt="Snake Head"
          className={
            direction === "UP"
              ? "transform rotate-90"
              : direction === "DOWN"
              ? "transform -rotate-90"
              : direction === "LEFT"
              ? "transform rotate-180"
              : ""
          }
        />
      )}
      {isSnakeBody && <img src="assets/SnakeBody.svg" alt="Snake Body" />}
      {isFruit && <img src="assets/Fruit.svg" alt="Fruit" />}
    </div>
  );
}
