/* eslint-disable @next/next/no-img-element */
"use client";

import Footer from "@/app/components/partials/Footer";
import { MIN_SPARKS } from "@/app/utils/constants";
import dynamic from "next/dynamic";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const ArrowKeys = dynamic(() => import("@/app/components/partials/ArrowKeys"), {
  ssr: false,
});

export default function TutorialPage() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center p-8 nest-hub:tutorial-main">
      <div className="flex flex-row justify-between items-center w-full nest-hub:tutorial">
        <Link href="/" className="btn btn-ghost drawer-button -m-5">
          <MdOutlineKeyboardArrowLeft className="w-8 h-8" />
        </Link>
        <label
          htmlFor="side-drawer"
          className="btn btn-ghost drawer-button -m-5"
        >
          <GiHamburgerMenu className="w-6 h-6" />
        </label>
      </div>

      <div className="flex-grow font-semibold leading-[24px] flex flex-col gap-5 text-center justify-center mt-5 max-w-sm">
        <h1 className="font-bold text-3xl xl:text-4xl">How To Play</h1>
        <p>
          Collect as many sparks{" "}
          <img src="assets/Spark.svg" className="inline w-6 h-6" alt="Spark" />{" "}
          as you can before the timer runs out.{" "}
        </p>
        <div className="-my-3">
          <img
            src="assets/TutorialSnake2.png"
            className="inline w-96"
            alt="Tutorial Snake"
          />
        </div>
        <p>
          Got a unique code? Get at least {MIN_SPARKS} sparks then enter your
          code and details to go in the draw.
        </p>
        <p>
          To begin the game tap one of the arrow keys at the bottom of the
          screen.
        </p>
        <div className="scale-75 flex flex-row justify-center items-center -my-8">
          <ArrowKeys />
        </div>
        <p>
          Use the arrows to move around the board. Don’t hit the edges and don’t
          hit your tail.
        </p>
        <p>Good luck!</p>
        <div className="-mb-2">
          <Link
            href="/game"
            className="btn btn-md md:btn-lg btn-secondary max-w-lg w-full text-lg outline-none text-[#fff]"
          >
            Play now
          </Link>
        </div>
        <Footer />
      </div>
    </main>
  );
}
