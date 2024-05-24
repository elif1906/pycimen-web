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
        <div className="flex flex-col md:flex-row gap-8 justify-between w-screen bg-white">
          <div className="pl-4 py-2 md:pl-12">
            <Image width={80} height={80} src="/pycimen-logo.png" alt="PyCimen"></Image>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end md:gap-20 gap-4 pt-2 pb-4 md:pt-10 md:pr-14">
            <Link style={{ height: "fit-content" }} className="text-black text-sm md:text-xl hover:border-b-2 hover:border-green-700" href="/">Home</Link>
            <Link style={{ height: "fit-content" }} className="text-black text-sm md:text-xl hover:border-b-2 hover:border-green-700" target="_blank" href="/docs.pdf">Docs</Link>
            <Link style={{ height: "fit-content" }} className="text-black text-sm md:text-xl hover:border-b-2 hover:border-green-700" target="_blank" href="https://marketplace.visualstudio.com/items?itemName=ElifNurCelepoglu.PyCimen-LSP">Pycimen-LSP</Link>
            <Link style={{ height: "fit-content" }} className="text-black text-sm md:text-xl hover:border-b-2 hover:border-green-700" target="_blank" href="https://github.com/elif1906/Pycimen/releases/tag/v1.0.0">Installation</Link>
            <Link style={{ height: "fit-content" }} className="text-black text-sm md:text-xl hover:border-b-2 hover:border-green-700 " target="_blank" href="https://github.com/elif1906/pycimen.git"><Image width={20} height={20} src="/github.jpeg" alt="PyCimen"></Image></Link>
            <Link style={{ height: "fit-content" }} className="text-black text-sm md:text-xl hover:border-b-2 hover:border-green-700 " target="_blank" href="https://www.linkedin.com/in/elif-nur-aslıhan-celepoğlu/"><Image width={20} height={20} src="/linkedin.png" alt="PyCimen"></Image></Link>
          </div>
        </div>
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}