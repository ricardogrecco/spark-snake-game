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
      <div className="grid grid-cols-3 grid-rows-3 h-full w-full justify-items-center">
        <div className="w-full h-full"></div>
        <div className="bg-[#772BCB] w-full h-full pt-2 px-2 rounded-t mt-2">
          <button
            onClick={() => dispatchArrowKey("ArrowUp")}
            className="bg-[#430E7D] btn w-22 h-3 p-3 items-center flex justify-center rounded shadow-md"
          >
            <BiSolidUpArrow className="w-full h-full" />
          </button>
        </div>
        <div className="w-full h-full"></div>
        <div className="bg-[#772BCB] w-max h-full pl-2 py-2 rounded-l ml-2">
          <button
            onClick={() => dispatchArrowKey("ArrowLeft")}
            className="bg-[#430E7D] btn w-22 h-full p-3 items-center flex justify-center rounded shadow-md"
          >
            <BiSolidLeftArrow className="w-full h-full" />
          </button>
        </div>
        <div className="bg-[#772BCB] w-full h-full p-2">
          <button
            onClick={() => dispatchArrowKey("ArrowDown")}
            className="bg-[#430E7D] btn w-full h-full p-3 items-center flex justify-center rounded shadow-md"
          >
            <BiSolidDownArrow className="w-full h-full" />
          </button>
        </div>
        <div className="bg-[#772BCB] w-max h-full pr-2 py-2 rounded-r mr-2">
          <button
            onClick={() => dispatchArrowKey("ArrowRight")}
            className="bg-[#430E7D] btn w-22 h-full p-3 items-center flex justify-center rounded shadow-md"
          >
            <BiSolidRightArrow className="w-full h-full" />
          </button>
        </div>
      </div>
    </section>
  );
}
