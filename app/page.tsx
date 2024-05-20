import Link from "next/link";
import MobileLayout from "./components/layout/MobileLayout";
import Footer from "./components/partials/Footer";
import Drawer from "./components/partials/Drawer";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Home() {
  return (
    <Drawer>
      <div className="flex flex-col items-center justify-center bg-base-300">
        <MobileLayout>
          <main className="bg-gradient-to-br from-[#690FA6] to-[#A60E7E] min-h-screen w-full flex flex-col items-center p-10">
            <label
              htmlFor="side-drawer"
              className="btn btn-ghost drawer-button self-end fixed -m-5"
            >
              <GiHamburgerMenu className="w-6 h-6" />
            </label>
            <img
              src="assets/logo-spark.svg"
              alt="Sparks Logo"
              className="w-32 md:w-56 lg:w-48 xl:w-56"
            />
            <div className="text-center font-medium flex-grow max-w-sm flex flex-col justify-center gap-5 lg:gap-2 xl:gap-10 py-10">
              <h1 className="font-bold text-4xl xl:text-5xl">Game Heading</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
              <div className="space-y-4">
                <Link
                  href="/game"
                  className="btn btn-lg btn-primary max-w-lg w-full font-bold"
                >
                  Play Now
                </Link>
                <Link
                  href="/tutorial"
                  className="btn btn-lg btn-secondary max-w-lg w-full font-bold"
                >
                  How to Play
                </Link>
              </div>
            </div>

            <Footer />
          </main>
        </MobileLayout>
      </div>
    </Drawer>
  );
}
