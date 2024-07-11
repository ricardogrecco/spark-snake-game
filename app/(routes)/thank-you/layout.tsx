import MobileLayout from "@/app/components/layout/MobileLayout";
import Drawer from "@/app/components/partials/Drawer";

export default function ThankYouPageLayout({
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
