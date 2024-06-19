import type { Metadata } from "next";
import "./globals.css";

const baseUrl =
  process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL ||
  "https://www.sparkarcade.co.nz/";

export const metadata: Metadata = {
  title: "Spark Arcade - Spark NZ",
  description:
    "Dive into the exciting world of Spark Arcade and play your way to winning Spark Gift Cards.",
  applicationName: "Spark Arcade",
  keywords: ["Spark", "Arcade", "Games", "Rewards", "Spark NZ"],
  // metadataBase: new URL(baseUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="maintheme">
      <body className="text-[#fff]">{children}</body>
    </html>
  );
}
