import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spark Arcade - Spark NZ",
  description:
    "Dive into the exciting world of Spark Arcade and play your way to winning Spark Gift Cards.",
  applicationName: "Spark Arcade",
  keywords: ["Spark", "Arcade", "Games", "Rewards", "Spark NZ"],
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
