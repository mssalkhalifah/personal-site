import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative top-0 left-0 m-0 h-screen w-screen justify-center overflow-x-hidden bg-zinc-200 font-primary text-zinc-950">
        <Navbar />
        <div className="mx-auto h-full w-full">{children}</div>
      </body>
    </html>
  );
}
