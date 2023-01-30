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
          <div className="flex flex-col place-items-center mt-5 mx-4 mb-4 lg:mx-0 lg:mb-0 lg:ml-10 lg:max-w-screen-md">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
