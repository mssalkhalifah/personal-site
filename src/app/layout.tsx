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
            <div className="flex place-items-center place-self-center h-full">
              <div className="flex flex-col w-full m-4 xl:m-0 xl:w-1/2">
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
    // <div className="flex place-items-center w-3/4 h-full place-self-center">
    //   <div className="flex flex-col place-items-center mt-5 mx-4 mb-4 lg:mx-0 lg:mb-0 lg:ml-10 lg:max-w-screen-md">
    //     {children}
    //   </div>
    // </div>
  );
}
