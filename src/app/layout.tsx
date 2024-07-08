import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code editing. Redefined.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="shortcut icon"
        href="https://code.visualstudio.com/favicon.ico"
        sizes="128x128"
      />
      <link
        rel="apple-touch-icon"
        href="https://code.visualstudio.com/apple-touch-icon.png"
      />

      <body
        className={`${inter.className} bg-background scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-slate-700`}
      >
        {children}
      </body>
    </html>
  );
}
