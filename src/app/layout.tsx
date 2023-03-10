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
      <body className="top-0 left-0 m-0 flex h-screen w-screen justify-center overflow-x-hidden bg-zinc-800 font-primary text-zinc-50">
        <Navbar />
        <div className="flex h-full w-full flex-col place-items-center justify-center">
          <div className="h-full w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
