'use client';
import type { Metadata } from "next";
import { Kumbh_Sans as KumbhSans } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/Navbar/Navbar";
import { SessionProvider } from "next-auth/react";

const kumbh = KumbhSans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( 
    <SessionProvider>
    <html lang="en">

      <body className={kumbh.className}>
        <div>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
    </SessionProvider>
  );
}
