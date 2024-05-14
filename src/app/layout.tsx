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
        <div className="flex gap-8 justify-between w-screen bg-white">
            <div className="pl-8 py-2">
              <Image width={100} height={100} src="/pycimen-logo.jpeg" alt="PyCimen"></Image>
            </div>
            <div className="flex gap-20 justify-end pt-8 pr-12">
              <Link className="text-black text-xl" href="/">Home</Link>
              <Link className="text-black text-xl" target="_blank" href="/docs.pdf">Docs</Link>
              <Link className="text-black text-xl" target="_blank" href="https://github.com/elif1906/Pycimen/releases/tag/v1.0.0">Installation</Link>
              <Link className="text-black text-xl" href="https://github.com/elif1906/pycimen.git"><Image width={30} height={30} src="/github.jpeg" alt="PyCimen"></Image></Link>
            </div>
            
        </div>
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
