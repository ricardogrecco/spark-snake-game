"use client";

import Footer from "@/app/components/partials/Footer";
import { GIFT_CARD_VALUE } from "@/app/utils/constants";
import { GiHamburgerMenu } from "react-icons/gi";
import SparkLogo from "@/public/assets/logo-spark2.svg";

export default function WinnerPage() {
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
      <div className="mt-5 flex min-h-screen max-w-sm flex-grow flex-col text-center font-semibold leading-[24px]">
        <div className="my-5 space-y-4">
          <h1 className="text-3xl font-bold xl:text-4xl">Congratulations!</h1>
          <h2 className="text-2xl font-bold">
            You&apos;ve won a ${GIFT_CARD_VALUE} Spark Gift Card.
          </h2>
          <p>
            To redeem your card all we need is your delivery address details and
            we&apos;ll sned it out to you as soon as we can.
          </p>
        </div>
        <form className="mb-5 space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="input input-lg input-bordered w-full bg-white text-primary"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="input input-lg input-bordered w-full bg-white text-primary"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="input input-lg input-bordered w-full bg-white text-primary"
          />
          <input
            type="text"
            placeholder="Address Line 1"
            className="input input-lg input-bordered w-full bg-white text-primary"
          />
          <input
            type="text"
            placeholder="City"
            className="input input-lg input-bordered w-full bg-white text-primary"
          />
          <input
            type="text"
            placeholder="Postcode"
            className="input input-lg input-bordered w-full bg-white text-primary"
          />
          <button className="btn btn-secondary btn-lg w-full text-lg">
            Submit
          </button>
        </form>

        <Footer />
      </div>
    </main>
  );
}
