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
            <div className="pl-12 py-2">
              <Image width={80} height={80} src="/pycimen-logo.png" alt="PyCimen"></Image>
            </div>
            <div className="flex gap-20 justify-end pt-10 pr-14 ">
              <Link style={{ height: "fit-content" }} className="text-black text-xl hover:border-b-2 hover:border-green-700" href="/">Home</Link>
              <Link style={{ height: "fit-content" }} className="text-black text-xl hover:border-b-2 hover:border-green-700" target="_blank" href="/docs.pdf">Docs</Link>
              <Link style={{ height: "fit-content" }} className="text-black text-xl hover:border-b-2 hover:border-green-700" target="_blank" href="https://github.com/elif1906/Pycimen/releases/tag/v1.0.0">Installation</Link>
              <Link style={{ height: "fit-content" }} className="text-black text-xl hover:border-b-2 hover:border-green-700 " target="_blank" href="https://github.com/elif1906/pycimen.git"><Image width={30} height={30} src="/github.jpeg" alt="PyCimen"></Image></Link>
              <Link style={{ height: "fit-content" }} className="text-black text-xl hover:border-b-2 hover:border-green-700 " target="_blank" href="https://www.linkedin.com/in/elif-nur-aslıhan-celepoğlu/"><Image width={30} height={30} src="/linkedin.png" alt="PyCimen"></Image></Link>

            </div>
            
        </div>
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
