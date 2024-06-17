import MobileLayout from "@/app/components/layout/MobileLayout";
import Drawer from "@/app/components/partials/Drawer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How To Play - Spark Chaser - Spark NZ",
};

export default function TutorialPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Drawer>
      <div className="flex flex-col items-center justify-center">
        <MobileLayout>{children}</MobileLayout>
      </div>
    </Drawer>
  );
}
