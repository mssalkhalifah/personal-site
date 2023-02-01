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
      <body className="flex m-0 top-0 left-0 w-screen h-screen font-primary">
        <Scene />
        <div className="absolute flex w-full h-full justify-center pointer-events-none">
          <div className="flex flex-col m-0 top-0 left-0 max-w-screen-2xl h-full">
            <Navbar />
            <div className="flex place-self-center h-full lg:place-items-center">
              <div className="flex flex-col w-full m-4 2xl:m-0 xl:ml-4 xl:w-1/2">
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
