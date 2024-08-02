"use client";

import { GameContext } from "@/app/context/GameContext";
import { MIN_SPARKS } from "@/app/utils/constants";
import Link from "next/link";
import { useContext, useEffect } from "react";

export default function GameOverModal() {
  const { score, gameOver, setGameOver } = useContext(GameContext);

  const handleModalClose = () => {
    const modal = document.getElementById(
      "game-over-modal",
    ) as HTMLDialogElement;
    modal.close();
  };

  useEffect(() => {
    if (gameOver) {
      const modal = document.getElementById(
        "game-over-modal",
      ) as HTMLDialogElement;
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          event.preventDefault();
        }
      };

      setTimeout(() => {
        modal.showModal();
        document.addEventListener("keydown", handleKeyDown);
      }, 2000);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [gameOver]);

  return (
    <dialog id="game-over-modal" className="modal">
      <div className="modal-box flex max-w-sm flex-col items-center justify-evenly gap-8 bg-[#772BCB] p-10">
        <h2 className="text-4xl font-bold">Your Score</h2>
        <h1 className="text-9xl font-bold">{score}</h1>
        <div className="flex w-full flex-col items-center gap-3 text-[#fff]">
          {score < MIN_SPARKS && (
            <p className="mb-5 text-center text-xl font-medium">
              Collect a minimum of {MIN_SPARKS} points to proceed.
            </p>
          )}
          {score >= MIN_SPARKS && (
            <>
              <h1 className="text-xl font-bold">Congratulations!</h1>
              <p className="mb-5 text-center text-lg font-medium">
                You have won the chance to go into the draw for a prize.
                <br />
                Please submit to provide your details.
              </p>
            </>
          )}
          {score >= MIN_SPARKS && (
            <Link
              className="btn btn-secondary btn-md w-full text-base outline-none md:btn-lg"
              href="https://www.spark.co.nz/forms/snake-game"
            >
              Submit
            </Link>
          )}
          <button
            className={`btn btn-md w-full text-base outline-none md:btn-lg ${
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
              className="btn btn-info btn-md w-full text-base text-primary outline-none md:btn-lg"
            >
              How to play
            </Link>
          )}
        </div>
      </div>
    </dialog>
  );
}
