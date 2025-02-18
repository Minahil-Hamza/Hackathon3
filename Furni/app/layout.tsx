import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {inter, poppins} from "./ui/font";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./context/CartContext";
import Nav from "@/components/Nav";
import {ClerkProvider} from "@clerk/nextjs"

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

export const metadata: Metadata = {
  title: "FURNI",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} ${inter.className} antialiased`}
      >
        <CartProvider>
        <Nav/>
        <hr className="bg-black"/>  
        {children }
        <Toaster/>
        <Footer/>
        </CartProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
