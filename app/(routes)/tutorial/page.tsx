/* eslint-disable @next/next/no-img-element */
"use client";

import Footer from "@/app/components/partials/Footer";
import { MIN_SPARKS, SPARK_GIFT_CARDS } from "@/app/utils/constants";
import dynamic from "next/dynamic";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const ArrowKeys = dynamic(() => import("@/app/components/partials/ArrowKeys"), {
  ssr: false,
});

export default function TutorialPage() {
  return (
    <main className="nest-hub:tutorial-main flex min-h-screen w-full flex-col items-center p-8">
      <div className="nest-hub:tutorial flex w-full flex-row items-center justify-between">
        <Link href="/" className="btn btn-ghost drawer-button -m-5">
          <MdOutlineKeyboardArrowLeft className="h-8 w-8" />
        </Link>
        <label
          htmlFor="side-drawer"
          className="btn btn-ghost drawer-button -m-5"
        >
          <GiHamburgerMenu className="h-6 w-6" />
        </label>
      </div>

      <div className="mt-5 flex max-w-sm flex-grow flex-col justify-center gap-5 text-center font-semibold leading-[24px]">
        <h1 className="text-3xl font-bold xl:text-4xl">How To Play</h1>
        <p>
          Collect as many sparks{" "}
          <img
            src="assets/Spark.svg"
            className="inline h-6 w-6"
            alt="Spark icon"
          />{" "}
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
          Get at least {MIN_SPARKS} Sparks for your chance to unlock one of{" "}
          {SPARK_GIFT_CARDS} Spark Gift Cards.
        </p>
        <p>
          To begin the game tap one of the arrow keys at the bottom of the
          screen.
        </p>
        <div className="-my-8 flex scale-75 flex-row items-center justify-center">
          <ArrowKeys />
        </div>
        <p>
          Use the arrows to move around the board. Don&apos;t hit the edges and
          don&apos;t hit your tail.
        </p>
        <p>Good luck!</p>
        <div className="-mb-2">
          <Link
            href="/game"
            className="btn btn-secondary btn-md w-full max-w-lg text-lg text-[#fff] outline-none md:btn-lg"
          >
            Play now
          </Link>
        </div>
        <Footer />
      </div>
    </main>
  );
}
