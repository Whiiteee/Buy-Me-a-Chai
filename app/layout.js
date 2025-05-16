import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Get Me a Chai",
  description: "Get Me a Chai - Fund Your Projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]`}
      > 
        <Navbar />
        <div className="min-h-[86.5vh] ">
        {children}
        </div>
      <Footer />
      </body>
    </html>
  );
}
