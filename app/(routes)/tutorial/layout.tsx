import MobileLayout from "@/app/components/layout/MobileLayout";
import Drawer from "@/app/components/partials/Drawer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How To Play",
};

export default function TutorialPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Drawer>
      <div className="flex flex-col items-center justify-center bg-base-300">
        <MobileLayout>{children}</MobileLayout>
      </div>
    </Drawer>
  );
}
