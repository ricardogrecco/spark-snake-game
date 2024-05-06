"use client";

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="max-w-screen-md w-full h-screen">{children}</div>;
}
