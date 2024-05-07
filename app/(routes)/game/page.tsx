"use client";

import MobileLayout from "@/app/components/layout/MobileLayout";
import dynamic from "next/dynamic";

const MainGame = dynamic(() => import("./game"), {
  ssr: false,
});

export default function GamePage() {
  return (
    <div className="flex items-center justify-center bg-base-300">
      <MobileLayout>
        <MainGame />
      </MobileLayout>
    </div>
  );
}
