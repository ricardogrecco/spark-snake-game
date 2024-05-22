"use client";

import { GameContext } from "@/app/context/GameContext";
import { MIN_SPARKS } from "@/app/utils/constants";
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
      <div className="modal-box bg-[#772BCB] max-w-sm flex flex-col items-center justify-evenly gap-10 p-10">
        <h2 className="text-4xl font-bold">Your Score</h2>
        <h1 className="text-9xl font-bold ">{score}</h1>
        <div className="w-full flex flex-col items-center gap-3 text-[#fff]">
          {score >= MIN_SPARKS && (
            <a
              className="btn btn-lg btn-secondary text-2xl w-full outline-none"
              href="#"
            >
              Submit
            </a>
          )}
          {score < MIN_SPARKS && (
            <p className="text-center text-xl mb-5 font-medium">
              Collect a minimum of {MIN_SPARKS} points to proceed.
            </p>
          )}
          <button
            className="btn btn-lg btn-info text-2xl w-full text-primary outline-none"
            onClick={() => {
              handleModalClose();
              setGameOver(false);
            }}
          >
            {score > MIN_SPARKS ? "Play again" : "Try again"}
          </button>
        </div>
      </div>
    </dialog>
  );
}
