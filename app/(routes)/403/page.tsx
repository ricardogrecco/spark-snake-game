"use client";

import Footer from "@/app/components/partials/Footer";
import { GiHamburgerMenu } from "react-icons/gi";
import SparkLogo from "@/public/assets/logo-spark2.svg";
import Link from "next/link";

export default function ForbiddenPage() {
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
      <div className="flex w-full max-w-sm flex-grow flex-col justify-between text-center font-semibold leading-[24px]">
        <div className="flex flex-grow flex-col items-center justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold lg:text-4xl">Oppss!</h1>
            <p className="text-xl font-medium">
              You don&apos;t have permissions to load this page.
            </p>
          </div>
          <Link href="/" className="btn btn-secondary btn-lg w-full text-lg">
            Return to home
          </Link>
          <Link
            href="/tutorial"
            className="btn btn-info btn-lg w-full text-lg text-primary"
          >
            How to play
          </Link>
        </div>
        <Footer />
      </div>
    </main>
  );
}
