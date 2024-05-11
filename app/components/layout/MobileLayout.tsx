"use client";

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-screen-lg lg:max-w-screen-md w-full h-screen">
      {children}
    </div>
  );
}
