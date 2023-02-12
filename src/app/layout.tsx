import Scene from "@/components/scene";
import "./globals.css";
import "./crt.css";
import Navbar from "./navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        id="main"
        className="top-0 left-0 m-0 flex h-screen w-screen overflow-hidden border-[80px] border-solid bg-black text-[#ffffff] transition"
      >
        <div id="monitor" className="relative flex w-full flex-row">
          <div
            id="bazel"
            className="flex h-full w-1/2 flex-col place-items-center"
          >
            <Navbar />
            <div id="crt" className="crt flex h-full w-full place-items-center">
              <div className="scanline"></div>
              <div className="m-5 flex w-full justify-center font-terminal uppercase">
                {children}
              </div>
            </div>
          </div>
          <Scene />
        </div>
      </body>
    </html>
  );
}
