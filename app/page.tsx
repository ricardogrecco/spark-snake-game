/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import MobileLayout from "./components/layout/MobileLayout";
import Footer from "./components/partials/Footer";
import { SPARK_GIFT_CARDS } from "@/app/utils/constants";
import Drawer from "./components/partials/Drawer";
import { GiHamburgerMenu } from "react-icons/gi";
import SparkLogo from "../public/assets/logo-spark2.svg";

export default function Home() {
  return (
    <Drawer>
      <div className="flex flex-col items-center justify-center">
        <MobileLayout>
          <main className="flex min-h-screen w-full flex-col items-center p-8">
            <label
              htmlFor="side-drawer"
              className="btn btn-ghost drawer-button fixed -m-5 self-end"
            >
              <GiHamburgerMenu className="h-6 w-6" />
            </label>

            <div className="flex max-w-sm flex-grow flex-col justify-center gap-5 text-center font-semibold">
              <a href="/" className="flex items-center justify-center">
                <SparkLogo className="w-32 self-center md:w-52" />
              </a>
              <img
                src="assets/SparkArcade.png"
                className="w-72 self-center md:w-full"
                alt="Spark Arcade"
              />
              <h1>Welcome To Spark Arcade!</h1>
              <p>We are celebrating our 10th anniversary!</p>
              <p>
                Join the fun at Spark Arcade for a chance to win a Spark Gift&nbsp;Card worth up to $1,000. We have {SPARK_GIFT_CARDS} prizes totalling $15,000 to be won.
              </p>
              <p>Give it a try and see what you can win!</p>
              <div className="space-y-4">
                <Link
                  href="/game"
                  className="btn btn-secondary btn-md w-full max-w-lg text-base text-[#fff] outline-none md:btn-lg"
                >
                  Play now
                </Link>
                <Link
                  href="/tutorial"
                  className="btn btn-info btn-md w-full max-w-lg text-base text-primary outline-none md:btn-lg"
                >
                  How to play
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
