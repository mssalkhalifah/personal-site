import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative top-0 left-0 m-0 h-[100dvh] transition-colors w-screen justify-center overflow-x-hidden font-primary text-zinc-950">
        <Navbar />
        <div id="mainDiv" className="mx-auto w-full">
          <div className="h-screen">{children}</div>
        </div>
      </body>
    </html>
  );
}
