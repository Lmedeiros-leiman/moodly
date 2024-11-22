import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const dynaPuff = localFont({
  src: "./fonts/DynaPuff.ttf",
  variable: "--font-dyna-puff",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Moodly",
  description: "A web app to track your daily mood!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${ dynaPuff.variable } ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
