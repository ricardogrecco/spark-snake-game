import MobileLayout from "@/app/components/layout/MobileLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Game",
};

export default function GameLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center justify-center bg-base-300">
      <MobileLayout>{children}</MobileLayout>
    </div>
  );
}
