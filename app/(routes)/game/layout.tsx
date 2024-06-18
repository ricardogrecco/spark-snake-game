import GameOverModal from "@/app/components/partials/game/GameOverModal";
import GameProvider from "@/app/context/GameContext";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spark Arcade - Spark NZ",
};

export default function GameLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GameProvider>
      <GameOverModal />
      {children}
    </GameProvider>
  );
}
