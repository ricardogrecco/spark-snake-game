import Footer from "@/app/components/partials/Footer";
import SparkLogo from "@/public/assets/logo-spark2.svg";
import { GiHamburgerMenu } from "react-icons/gi";

export default function DrawPage() {
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
      <div className="mt-5 flex max-w-sm flex-grow flex-col text-center font-semibold leading-[24px]">
        <div className="flex-grow"></div>
        <Footer />
      </div>
    </main>
  );
}
