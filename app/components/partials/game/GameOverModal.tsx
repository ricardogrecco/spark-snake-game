"use client";

import { GameContext } from "@/app/context/GameContext";
import { MIN_SPARKS } from "@/app/utils/constants";
import Link from "next/link";
import { useContext, useEffect } from "react";

export default function GameOverModal() {
  const { score, gameOver, setGameOver } = useContext(GameContext);

  const handleModalClose = () => {
    const modal = document.getElementById(
      "game-over-modal"
    ) as HTMLDialogElement;
    modal.close();
  };

  useEffect(() => {
    if (gameOver) {
      const modal = document.getElementById(
        "game-over-modal"
      ) as HTMLDialogElement;

      setTimeout(() => {
        modal.showModal();
      }, 2000);
    }
  }, [gameOver]);

  return (
    <dialog id="game-over-modal" className="modal">
      <div className="modal-box bg-[#772BCB] max-w-sm flex flex-col items-center justify-evenly gap-8 p-10">
        <h2 className="text-4xl font-bold">Your Score</h2>
        <h1 className="text-9xl font-bold">{score}</h1>
        <div className="w-full flex flex-col items-center gap-3 text-[#fff]">
          {score < MIN_SPARKS && (
            <p className="text-center text-xl mb-5 font-medium">
              Collect a minimum of {MIN_SPARKS} points to proceed.
            </p>
          )}
          {score >= MIN_SPARKS && (
            <>
              <h1 className="font-bold text-xl">Congratulations!</h1>
              <p className="text-center text-xl mb-5 font-medium">
                You have won the chance to unlock a prize.
              </p>
            </>
          )}
          {score >= MIN_SPARKS && (
            <Link
              className="btn btn-md md:btn-lg btn-secondary text-base w-full outline-none"
              href="https://www.spark.co.nz/forms/snake-game"
            >
              Submit
            </Link>
          )}
          <button
            className={`btn btn-md md:btn-lg text-base w-full outline-none ${
              score >= MIN_SPARKS ? "btn-info text-primary" : "btn-secondary"
            }`}
            onClick={() => {
              handleModalClose();
              setGameOver(false);
            }}
          >
            {score >= MIN_SPARKS ? "Play again" : "Try again"}
          </button>
          {score < MIN_SPARKS && (
            <Link
              href="/tutorial"
              className="btn btn-md md:btn-lg text-base w-full outline-none btn-info text-primary"
            >
              How to play
            </Link>
          )}
        </div>
      </div>
    </dialog>
  );
}
