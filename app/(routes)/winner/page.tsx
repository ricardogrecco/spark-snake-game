"use client";

import Footer from "@/app/components/partials/Footer";
import { GIFT_CARD_VALUE } from "@/app/utils/constants";
import { GiHamburgerMenu } from "react-icons/gi";
import SparkLogo from "@/public/assets/logo-spark2.svg";
import dynamic from "next/dynamic";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const WinnerForm = dynamic(() => import("@/app/components/forms/WinnerForm"), {
  ssr: false,
});

export default function WinnerPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center p-8">
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
      >
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
              To redeem your card all we need is your delivery address details
              and we&apos;ll sned it out to you as soon as we can.
            </p>
          </div>
          <WinnerForm />
          <Footer />
        </div>
      </GoogleReCaptchaProvider>
    </main>
  );
}
