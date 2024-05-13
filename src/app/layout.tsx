import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PyCimen Language",
  description: "Python interpreten written in C++",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex gap-8 justify-between items-center w-screen">
            <div>
              {/* { <Image width={100} height={100} src="/pycimen-logo.jpeg" alt="PyCimen"></Image> } */}
            </div>
            <div className="flex gap-8 justify-center items-center py-8">
              <Link href="/">Home</Link>
              <Link href="/docs">Docs</Link>
              <Link href="/installation">Installation</Link>
            </div>
            <div> 
            </div>
            
        </div>
          <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
