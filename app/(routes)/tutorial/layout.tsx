import MobileLayout from "@/app/components/layout/MobileLayout";
import Drawer from "@/app/components/partials/Drawer";
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
      title: "How To Play - Spark Arcade - Spark NZ",
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
