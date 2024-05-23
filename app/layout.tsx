import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spark Chaser - Spark NZ",
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
