"use client";

import {
  BiSolidDownArrow,
  BiSolidLeftArrow,
  BiSolidRightArrow,
  BiSolidUpArrow,
} from "react-icons/bi";

type ArrowKeysProps = {
  disabled?: boolean;
  playState?: boolean;
};

export default function ArrowKeys({
  disabled = true,
  playState = false,
}: ArrowKeysProps) {
  const dispatchArrowKey = (key: string) => {
    if (disabled) return;
    const event = new KeyboardEvent("keydown", { key });
    window.dispatchEvent(event);
  };

  return (
    <section className="w-48 h-48 lg:w-48 lg:h-48 self-center -mb-14">
      <div className="grid grid-cols-3 grid-rows-3 h-full w-full justify-items-center">
        <div className="w-full h-full"></div>
        <div className="bg-[#772BCB] w-full h-full pt-2 px-2 rounded-t-[10px] mt-2">
          <button
            onClick={() => dispatchArrowKey("ArrowUp")}
            className={`bg-[#4D00A0] btn w-22 h-3 p-3 items-center flex justify-center rounded-[5.36px] ring-neon ring-1 ring-offset-neon ring-offset-1 shadow-neon relative z-10 ${
              !playState && "animate-key-glow"
            }`}
          >
            <BiSolidUpArrow className="w-full h-full text-[#fff]" />
          </button>
        </div>
        <div className="w-full h-full"></div>
        <div className="bg-[#772BCB] w-max h-full pl-2 py-2 rounded-l-[10px] ml-2">
          <button
            onClick={() => dispatchArrowKey("ArrowLeft")}
            className={`bg-[#4D00A0] btn w-22 h-3 p-3 items-center flex justify-center rounded-[5.36px] ring-neon ring-1 ring-offset-neon ring-offset-1 shadow-neon relative ${
              !playState && "animate-key-glow"
            }`}
          >
            <BiSolidLeftArrow className="w-full h-full text-[#fff]" />
          </button>
        </div>
        <div className="bg-[#772BCB] w-full h-full p-2">
          <button
            onClick={() => dispatchArrowKey("ArrowDown")}
            className={`bg-[#4D00A0] btn w-22 h-3 p-3 items-center flex justify-center rounded-[5.36px] ring-neon ring-1 ring-offset-neon ring-offset-1 shadow-neon relative z-10 ${
              !playState && "animate-key-glow"
            }`}
          >
            <BiSolidDownArrow className="w-full h-full text-[#fff]" />
          </button>
        </div>
        <div className="bg-[#772BCB] w-max h-full pr-2 py-2 rounded-r-[10px] mr-2">
          <button
            onClick={() => dispatchArrowKey("ArrowRight")}
            className={`bg-[#4D00A0] btn w-22 h-3 p-3 items-center flex justify-center rounded-[5.36px] ring-neon ring-1 ring-offset-neon ring-offset-1 shadow-neon relative ${
              !playState && "animate-key-glow"
            }`}
          >
            <BiSolidRightArrow className="w-full h-full text-[#fff]" />
          </button>
        </div>
      </div>
    </section>
  );
}
