import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Scene from "@/components/scene";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative top-0 left-0 m-0 h-screen w-screen justify-center overflow-x-hidden bg-primary font-primary text-zinc-50">
        <Navbar />
        <div className="container mx-auto h-full pt-20">{children}</div>
      </body>
    </html>
  );
}
