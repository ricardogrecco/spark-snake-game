"use client";

import Footer from "@/app/components/partials/Footer";
import { GiHamburgerMenu } from "react-icons/gi";
import SparkLogo from "@/public/assets/logo-spark2.svg";

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center p-8">
      <div className="flex w-full flex-row items-center justify-between">
        <SparkLogo className="w-32 self-center md:w-52" />
        <label
          htmlFor="side-drawer"
          className="btn btn-ghost drawer-button -m-5"
        >
          <GiHamburgerMenu className="h-6 w-6" />
        </label>
      </div>
      <div className="mt-5 flex max-w-sm flex-grow flex-col justify-between text-center font-semibold leading-[24px]">
        <div className="mt-20 space-y-2">
          <h1 className="text-3xl font-bold lg:text-4xl">All Done.</h1>
          <p className="font-medium">
            We&apos;ll be in touch shortly with your prize.
          </p>
        </div>
        <Footer />
      </div>
    </main>
  );
}
