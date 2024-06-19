import GameOverModal from "@/app/components/partials/game/GameOverModal";
import GameProvider from "@/app/context/GameContext";

import { Metadata } from "next";

function isProductionEnvironment() {
  const env = process.env;
  return (
    !["development", "preview", "test"].includes(env.VERCEL_ENV as string) &&
    !["development", "preview", "test"].includes(
      env.NEXT_PUBLIC_VERCEL_ENV as string
    ) &&
    env.NODE_ENV !== "development" &&
    env.NODE_ENV !== "test"
  );
}

export const metadata: Metadata = isProductionEnvironment()
  ? {}
  : {
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
