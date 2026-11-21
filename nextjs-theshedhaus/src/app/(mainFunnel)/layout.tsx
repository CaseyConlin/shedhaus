import { CTAFooter } from "@/components/CTAFooter";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="dark:bg-white">
      {children}
      <CTAFooter />
    </div>
  );
}
