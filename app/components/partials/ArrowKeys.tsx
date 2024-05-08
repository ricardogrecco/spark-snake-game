"use client";

import {
  BiSolidDownArrow,
  BiSolidLeftArrow,
  BiSolidRightArrow,
  BiSolidUpArrow,
} from "react-icons/bi";

type ArrowKeysProps = {
  disabled?: boolean;
};

export default function ArrowKeys({ disabled = true }: ArrowKeysProps) {
  const dispatchArrowKey = (key: string) => {
    if (disabled) return;
    const event = new KeyboardEvent("keydown", { key });
    window.dispatchEvent(event);
  };

  return (
    <section className="w-48 h-48 lg:w-48 lg:h-48 self-center -mb-14">
      <div className="grid grid-cols-3 grid-rows-3 h-full w-full">
        <div className="w-full h-full"></div>
        <div className="bg-[#772BCB] w-full h-full p-2 rounded-t">
          <button
            onClick={() => dispatchArrowKey("ArrowUp")}
            className="bg-[#430E7D] btn w-full h-full p-3 items-center flex justify-center rounded shadow-md"
          >
            <BiSolidUpArrow className="w-full h-full" />
          </button>
        </div>
        <div className="w-full h-full"></div>
        <div
          onClick={() => dispatchArrowKey("ArrowLeft")}
          className="bg-[#772BCB] w-full h-full p-2 rounded-l"
        >
          <button className="bg-[#430E7D] btn w-full h-full p-3 items-center flex justify-center rounded shadow-md">
            <BiSolidLeftArrow className="w-full h-full" />
          </button>
        </div>
        <div
          onClick={() => dispatchArrowKey("ArrowDown")}
          className="bg-[#772BCB] w-full h-full p-2"
        >
          <button className="bg-[#430E7D] btn w-full h-full p-3 items-center flex justify-center shadow-md">
            <BiSolidDownArrow className="w-full h-full" />
          </button>
        </div>
        <div
          onClick={() => dispatchArrowKey("ArrowRight")}
          className="bg-[#772BCB] w-full h-full p-2 rounded-r"
        >
          <button className="bg-[#430E7D] btn w-full h-full p-3 items-center flex justify-center rounded shadow-md">
            <BiSolidRightArrow className="w-full h-full" />
          </button>
        </div>
      </div>
    </section>
  );
}
