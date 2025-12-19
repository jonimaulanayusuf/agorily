import type { Metadata } from "next";
import { Epilogue, Inter } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/TopNav";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-epilogue",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Agorily",
  description: "Agorily — A happy shopping experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${epilogue.className} ${inter.variable} antialiased flex items-center h-screen`}
      >
        <div className="w-screen h-screen lg:w-100.5 lg:h-218.5 overflow-y-auto bg-background m-auto rounded-2xl no-scrollbar shadow-2xl">
          <TopNav />
          {children}
        </div>
      </body>
    </html>
  );
}
