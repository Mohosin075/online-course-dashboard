import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import DashboardLayout from "@/components/ui/shared/DashboardLayout";
import Navbar from "@/components/ui/shared/navbar/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Online Course Dashboard",
  description: "This is Online Course Dashboard!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme={"light"}>
      <body className={`${poppins.variable} max-w-[1800px] mx-auto`}>
        <Navbar />
        <DashboardLayout>
          {children}
        </DashboardLayout>
      </body>
    </html>
  );
}
