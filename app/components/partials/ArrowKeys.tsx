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
    <section className="w-48 h-48 self-center -mb-14">
      <div className="grid grid-cols-3 grid-rows-3 justify-items-center">
        <div className="w-22 h-full"></div>
        <div className="bg-[#772BCB] w-22 h-full px-2 rounded-t-[10px] mt-2 flex items-center justify-center">
          <button
            onClick={() => dispatchArrowKey("ArrowUp")}
            className={`bg-[#5A12AA] btn w-22 h-3 items-center flex justify-center rounded-[5.36px] border-[#FFFFFF] hover:border-[#FFFFFF] border-[1px] shadow-white-glow relative z-10 ${
              !playState && "animate-key-glow"
            }`}
          >
            <BiSolidUpArrow className="size-4 scale-125 text-[#fff]" />
          </button>
        </div>
        <div className="w-22 h-full"></div>
        <div className="bg-[#772BCB] w-22 h-full pl-2 py-2 rounded-l-[10px] ml-2 flex items-center justify-center">
          <button
            onClick={() => dispatchArrowKey("ArrowLeft")}
            className={`bg-[#5A12AA] btn w-22 h-3 items-center flex justify-center rounded-[5.36px] border-[#FFFFFF] hover:border-[#FFFFFF] border-[1px] shadow-white-glow relative ${
              !playState && "animate-key-glow"
            }`}
          >
            <BiSolidLeftArrow className="size-4 scale-125 text-[#fff]" />
          </button>
        </div>
        <div className="bg-[#772BCB] w-22 h-full p-2 flex items-center justify-center">
          <button
            onClick={() => dispatchArrowKey("ArrowDown")}
            className={`bg-[#5A12AA] btn w-22 h-3 items-center flex justify-center rounded-[5.36px] border-[#FFFFFF] hover:border-[#FFFFFF] border-[1px] shadow-white-glow relative z-10 ${
              !playState && "animate-key-glow"
            }`}
          >
            <BiSolidDownArrow className="size-4 scale-125 text-[#fff]" />
          </button>
        </div>
        <div className="bg-[#772BCB] w-22 h-full pr-2 py-2 rounded-r-[10px] mr-2 flex items-center justify-center">
          <button
            onClick={() => dispatchArrowKey("ArrowRight")}
            className={`bg-[#5A12AA] btn w-22 h-3 items-center flex justify-center rounded-[5.36px] border-[#FFFFFF] hover:border-[#FFFFFF] border-[1px] shadow-white-glow relative ${
              !playState && "animate-key-glow"
            }`}
          >
            <BiSolidRightArrow className="size-4 scale-125 text-[#fff]" />
          </button>
        </div>
      </div>
    </section>
  );
}
