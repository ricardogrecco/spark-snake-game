/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import MobileLayout from "./components/layout/MobileLayout";
import Footer from "./components/partials/Footer";
import Drawer from "./components/partials/Drawer";
import { GiHamburgerMenu } from "react-icons/gi";
import SparkLogo from "../public/assets/logo-spark2.svg";

export default function Home() {
  return (
    <Drawer>
      <div className="flex flex-col items-center justify-center">
        <MobileLayout>
          <main className=" min-h-screen w-full flex flex-col items-center p-8">
            <label
              htmlFor="side-drawer"
              className="btn btn-ghost drawer-button self-end fixed -m-5"
            >
              <GiHamburgerMenu className="w-6 h-6" />
            </label>

            <div className="text-center font-semibold flex-grow max-w-sm flex flex-col justify-center gap-5">
              <a href="/" className="flex items-center justify-center">
                <SparkLogo className="w-32 md:w-52 self-center" />
              </a>
              <img
                src="assets/SparkArcade.png"
                className="w-56 md:w-full self-center"
                alt="Spark Arcade"
              />
              <h1>Welcome To Spark Arcade!</h1>
              <p>
                Who doesn&apos;t love a great arcade game? Now, you have the
                chance to combine fun with rewards!
              </p>
              <p>
                Dive into the exciting world of Spark Arcade and play your way
                to winning Spark Gift Cards. It&apos;s easy, it&apos;s fun, and
                best of all, you could walk away with fantastic prizes!
              </p>
              <p>Give it a try and discover what you can win with Spark!</p>
              <div className="space-y-4">
                <Link
                  href="/game"
                  className="btn btn-md md:btn-lg btn-secondary max-w-lg w-full outline-none text-[#fff] text-base"
                >
                  Play now
                </Link>
                <Link
                  href="/tutorial"
                  className="btn btn-md md:btn-lg btn-info max-w-lg w-full text-primary outline-none text-base"
                >
                  How to Play
                </Link>
              </div>
              <Footer />
            </div>
          </main>
        </MobileLayout>
      </div>
    </Drawer>
  );
}
