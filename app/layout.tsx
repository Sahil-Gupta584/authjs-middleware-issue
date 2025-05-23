import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const calFont = localFont({
  src: "../public/CalSans-SemiBold.woff2",
  variable: "--font-cal",
  preload: true,
  display: "block",
  // weight: "600",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${calFont.variable}  antialiased mx-auto min-h-screen max-w-7xl px-4 pb-24 md:px-8`}
      >
        {children}
      </body>
    </html>
  );
}
