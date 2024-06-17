import Link from "next/link";
import MobileLayout from "./components/layout/MobileLayout";
import Footer from "./components/partials/Footer";
import Drawer from "./components/partials/Drawer";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Home() {
  return (
    <Drawer>
      <div className="flex flex-col items-center justify-center">
        <MobileLayout>
          <main className=" min-h-screen w-full flex flex-col items-center p-10">
            <label
              htmlFor="side-drawer"
              className="btn btn-ghost drawer-button self-end fixed -m-5"
            >
              <GiHamburgerMenu className="w-6 h-6" />
            </label>

            <div className="text-center font-semibold flex-grow max-w-sm flex flex-col justify-center gap-5 lg:gap-2 xl:gap-10 py-8">
              <img
                src="assets/logo-spark.svg"
                alt="Sparks Logo"
                className="w-44 md:w-56 lg:w-48 xl:w-56 self-center"
              />
              <h1 className="font-bold text-4xl xl:text-5xl">Spark Chaser</h1>
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
                  className="btn btn-lg btn-primary max-w-lg w-full outline-none text-[#fff]"
                >
                  Play now
                </Link>
                <Link
                  href="/tutorial"
                  className="btn btn-lg btn-info max-w-lg w-full text-primary outline-none"
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
