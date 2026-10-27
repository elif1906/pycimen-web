"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "Features", href: "/#features" },
  { label: "Examples", href: "/#examples" },
  { label: "About", href: "/#about" },
  { label: "Docs", href: "/docs.pdf", external: true },
  { label: "PyCimen-LSP", href: "https://marketplace.visualstudio.com/items?itemName=ElifNurCelepoglu.PyCimen-LSP", external: true },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-[#070a09]/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/95 p-1">
            <Image width={32} height={32} src="/pycimen-logo.png" alt="PyCimen logo" />
          </span>
          <span className="text-lg font-semibold tracking-tight">PyCimen</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              className="text-sm text-white/65 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="https://github.com/elif1906/pycimen"
            target="_blank"
            aria-label="PyCimen on GitHub"
            className="hidden h-9 w-9 place-items-center rounded-lg text-white/70 transition hover:bg-white/10 hover:text-white sm:grid"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
              <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
          </Link>
          <Link
            href="https://www.linkedin.com/in/elif-nur-aslıhan-celepoğlu/"
            target="_blank"
            aria-label="LinkedIn"
            className="hidden h-9 w-9 place-items-center rounded-lg text-white/70 transition hover:bg-white/10 hover:text-white sm:grid"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
            </svg>
          </Link>
          <Link
            href="https://github.com/elif1906/Pycimen/releases/tag/v1.0.0"
            target="_blank"
            className="hidden rounded-full bg-gradient-to-r from-green-500 to-lime-400 px-4 py-2 text-sm font-semibold text-black transition hover:brightness-110 md:inline-block"
          >
            Install
          </Link>
          <button
            className="grid h-10 w-10 place-items-center rounded-lg text-white/80 hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/5 px-5 pb-6 pt-2 md:hidden">
          {[...links, { label: "Install", href: "https://github.com/elif1906/Pycimen/releases/tag/v1.0.0", external: true }].map((l) => (
            <Link
              key={l.label}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 py-3 text-base text-white/80"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
