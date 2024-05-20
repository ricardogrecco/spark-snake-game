import ArrowKeys from "@/app/components/partials/ArrowKeys";
import Footer from "@/app/components/partials/Footer";
import { MIN_SPARKS } from "@/app/utils/constants";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function TutorialPage() {
  return (
    <main className="bg-gradient-to-br from-[#690FA6] to-[#A60E7E] min-h-screen w-full flex flex-col items-center p-10 nest-hub:tutorial-main">
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

      <div className="flex-grow font-medium flex flex-col gap-5 text-center mt-5 max-w-sm lg:max-w-screen-lg xl:max-w-sm">
        <h1>How To Play</h1>
        <p>
          Collect as many sparks{" "}
          <img src="assets/Spark.svg" className="inline w-6 h-6" /> as you can
          before the timer runs out.{" "}
        </p>
        <div className="-my-3">
          <img src="assets/TutorialSnake.svg" className="inline w-48 lg:w-52" />
        </div>
        <p>
          Got a unique code? Get at least {MIN_SPARKS} sparks then enter your
          code and details to go in the draw.
        </p>
        <ArrowKeys />
        <p>
          Tap the arrows to move around the board. Don’t hit the edges and don’t
          hit your tail.
        </p>
        <p>Good luck!</p>
        <div>
          <Link
            href="/game"
            className="btn lg:btn-lg btn-primary max-w-lg w-full font-bold text-lg"
          >
            Play Now
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
