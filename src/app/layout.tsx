import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers";
import { Toaster } from "sonner";

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
    <Providers>
      <html lang="en" data-theme={"light"}>
        <body className={`${poppins.variable} max-w-[1800px] mx-auto`}>
          <Toaster />
          {children}
        </body>
      </html>
    </Providers>
  );
}
