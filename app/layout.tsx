import type { Metadata } from "next";
import "./globals.css";
import ComingSoon from "./components/pages/ComingSoon";

function isProductionEnvironment() {
  const env = process.env;
  return (
    !["development", "preview", "test"].includes(env.VERCEL_ENV as string) ||
    !["development", "preview", "test"].includes(
      env.NEXT_PUBLIC_VERCEL_ENV as string
    ) ||
    env.NODE_ENV !== "development"
  );
}

export const metadata: Metadata = {
  title: isProductionEnvironment()
    ? "Coming Soon by Spark NZ"
    : "Spark Arcade - Spark NZ",
  description: isProductionEnvironment()
    ? ""
    : "Dive into the exciting world of Spark Arcade and play your way to winning Spark Gift Cards.",
  applicationName: isProductionEnvironment() ? "" : "Spark Arcade",
  keywords: isProductionEnvironment()
    ? []
    : ["Spark", "Arcade", "Games", "Rewards", "Spark NZ"],
  metadataBase: new URL("https://www.sparkarcade.co.nz/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="maintheme">
      <body className="text-[#fff]">
        {isProductionEnvironment() ? <ComingSoon /> : children}
      </body>
    </html>
  );
}
