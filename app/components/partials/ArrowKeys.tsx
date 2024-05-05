import {
  BiSolidDownArrow,
  BiSolidLeftArrow,
  BiSolidRightArrow,
  BiSolidUpArrow,
} from "react-icons/bi";

export default function ArrowKeys() {
  return (
    <section className="w-48 h-48 lg:w-48 lg:h-48 self-center -mb-14">
      <div className="grid grid-cols-3 grid-rows-3 h-full w-full">
        <div className="w-full h-full"></div>
        <div className="bg-[#772BCB] w-full h-full p-2 rounded-t">
          <button className="bg-[#430E7D] btn w-full h-full p-3 items-center flex justify-center rounded shadow-md">
            <BiSolidUpArrow className="w-full h-full" />
          </button>
        </div>
        <div className="w-full h-full"></div>
        <div className="bg-[#772BCB] w-full h-full p-2 rounded-l">
          <button className="bg-[#430E7D] btn w-full h-full p-3 items-center flex justify-center rounded shadow-md">
            <BiSolidLeftArrow className="w-full h-full" />
          </button>
        </div>
        <div className="bg-[#772BCB] w-full h-full p-2">
          <button className="bg-[#430E7D] btn w-full h-full p-3 items-center flex justify-center shadow-md">
            <BiSolidDownArrow className="w-full h-full" />
          </button>
        </div>
        <div className="bg-[#772BCB] w-full h-full p-2 rounded-r">
          <button className="bg-[#430E7D] btn w-full h-full p-3 items-center flex justify-center rounded shadow-md">
            <BiSolidRightArrow className="w-full h-full" />
          </button>
        </div>
      </div>
    </section>
  );
}
