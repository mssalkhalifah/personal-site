import Scene from "@/components/scene";
import "./globals.css"

export default function HomeLayout({
  children,
}: {
    children: React.ReactNode;
  }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MyPortfolio</title>
      </head>
      <body className="m-0 top-0 left-0 w-screen h-screen">
        <div className="absolute top-0 left-0">
          {children}
        </div>
        <Scene/>
      </body>
    </html>
  );
}
