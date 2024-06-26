"use client";

import Link from "next/link";
import Footer from "./Footer";
import { IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";

export default function Drawer({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="drawer drawer-end">
      <input id="side-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side">
        <label
          htmlFor="side-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="w-max md:w-full md:max-w-md lg:max-w-lg bg-base-100 h-full p-10 flex flex-col gap-5">
          <div className="w-full flex-grow flex justify-end">
            <label
              className="btn btn-circle btn-secondary border-none -mr-5"
              htmlFor="side-drawer"
            >
              <IoMdClose className="w-8 h-8" />
            </label>
          </div>
          <ul className="space-y-2 lg:space-y-5 text-2xl lg:text-4xl font-bold">
            <li>
              {pathname === "/" ? (
                <label htmlFor="side-drawer" className="cursor-pointer">
                  Home
                </label>
              ) : (
                <Link href="/" className="cursor-pointer">
                  Home
                </Link>
              )}
            </li>
            <li>
              <Link href="/game">Play Now</Link>
            </li>
            <li>
              {pathname === "/tutorial" ? (
                <label htmlFor="side-drawer" className="cursor-pointer">
                  How It Works
                </label>
              ) : (
                <Link href="/tutorial" className="cursor-pointer">
                  How It Works
                </Link>
              )}
            </li>
          </ul>
          <Footer className="flex flex-row w-max font-medium justify-start text-xs md:text-sm" />
        </div>
      </div>
    </div>
  );
}
