import Scene from "@/components/scene";
import "./globals.css";
import Navbar from "./navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="m-0 top-0 left-0 w-screen h-screen font-primary">
        <Scene />
        <div className="absolute m-0 top-0 left-0 w-full">
          <Navbar />
          <div className="flex flex-col w-fit mt-5 ml-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
