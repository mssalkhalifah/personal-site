import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Metadata } from "next";
import Provider from "@/components/themes/ThemeProvider";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.alkhalifah.dev"),
  alternates: {
    canonical: "/",
  },
  themeColor: "#ffffff",
  title: "Mssalkhalifah | Full-Stack Developer",
  description:
    "Passionate full-stack developer crafting seamless web experiences. Expertise in front-end, back-end, and databases. Let's build something amazing together! 💻🚀",
  openGraph: {
    title: "Mssalkhalifah | Full-Stack Developer",
    description:
      "Passionate full-stack developer crafting seamless web experiences. Expertise in front-end, back-end, and databases. Let's build something amazing together! 💻🚀",
    images: "/website_image.jpg",
    url: "/",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider>
        <body
          className={`${roboto.className} relative top-0 left-0 m-0 h-[100dvh] transition-colors w-screen justify-center overflow-x-hidden text-zinc-950 bg-white dark:bg-black dark:text-zinc-50`}
        >
          <Navbar />
          <div id="mainDiv" className="mx-auto w-full">
            <div className="h-screen">{children}</div>
          </div>
        </body>
      </Provider>
    </html>
  );
}
