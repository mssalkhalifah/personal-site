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
      <body className="top-0 left-0 m-0 flex h-screen w-screen bg-white font-primary text-black transition dark:bg-darker-blue dark:text-white">
        <Scene />
        <div className="pointer-events-none absolute flex h-full w-full justify-center">
          <div className="top-0 left-0 m-0 flex h-full max-w-screen-2xl flex-col">
            <Navbar />
            <div className="flex h-full place-self-center lg:place-items-center">
              <div className="m-4 flex w-full flex-col xl:ml-4 xl:w-1/2 2xl:m-0">
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
