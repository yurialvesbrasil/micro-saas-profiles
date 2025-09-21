import "./globals.css";

import {Red_Hat_Display} from "next/font/google";
import Header from "../componets/landing-page/header";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-red-hat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${
        redHatDisplay.variable
      } bg-background-primary text-content-body antialiased`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
