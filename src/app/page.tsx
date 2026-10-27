import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroTerminal from "@/components/HeroTerminal";
import CodeShowcase from "@/components/CodeShowcase";

const features = [
  {
    title: "Python-like syntax",
    body: "Minimal, indentation-based syntax you already know: functions, classes, closures, ternaries and augmented assignment.",
    icon: "M8 9l-3 3 3 3m8-6l3 3-3 3M13 5l-2 14",
  },
  {
    title: "C++ runtime",
    body: "Source is lexed, parsed into an AST and evaluated by an interpreter written in modern C++, built for speed.",
    icon: "M13 2L4 14h7l-1 8 9-12h-7l1-8z",
  },
  {
    title: "Python ecosystem",
    body: "An embedded Python interpreter lets you import modules installed with pip, so ML and data libraries are one import away.",
    icon: "M4 7l8-4 8 4-8 4-8-4zm0 5l8 4 8-4M4 17l8 4 8-4",
  },
  {
    title: "PyCimen-LSP",
    body: "A VS Code extension with code completion, error checking and syntax highlighting for .pcl files.",
    icon: "M4 5h16v11H4zM8 20h8M12 16v4",
  },
  {
    title: "Package manager",
    body: "Ships with a package manager so projects can pull in dependencies without leaving the toolchain.",
    icon: "M21 8l-9-5-9 5v8l9 5 9-5V8zM3 8l9 5 9-5M12 13v8",
  },
  {
    title: "Tested core",
    body: "15 test suites cover expressions, control flow, functions, classes, strings and bitwise operations.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const pipeline = [
  { step: "Source", detail: ".pcl file" },
  { step: "Lexer", detail: "tokens" },
  { step: "Parser", detail: "grammar rules" },
  { step: "AST", detail: "syntax tree" },
  { step: "Evaluator", detail: "C++ runtime" },
];

const stats = [
  { value: "C++", label: "interpreter core" },
  { value: "15", label: "test suites" },
  { value: "pip", label: "module imports" },
  { value: "LSP", label: "editor support" },
];

const Icon = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d={d} />
  </svg>
);

const Home = () => {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 md:pt-36">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-green-500/20 blur-[140px]" />
        <div className="pointer-events-none absolute right-[-10%] top-60 h-[360px] w-[360px] rounded-full bg-orange-500/15 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 md:px-8 lg:grid-cols-[1.05fr_1fr]">
          <div className="animate-fade-up">
            <Link
              href="https://github.com/elif1906/Pycimen/releases/tag/v1.0.0"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 transition hover:border-green-400/40 hover:text-white"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_10px_2px_rgba(74,222,128,0.7)]" />
              v1.0.0 released — get it on GitHub
              <span aria-hidden>→</span>
            </Link>

            <h1 className="mt-6 text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl xl:text-8xl">
              Write like
              <br />
              <span className="text-gradient">Python.</span>
              <br />
              Run on C++.
            </h1>

            <p className="mt-6 max-w-xl text-balance text-lg text-white/60 md:text-xl">
              PyCimen is a hybrid programming language with Python&apos;s friendly syntax, a performance-minded C++ interpreter
              and direct access to the pip ecosystem.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="https://github.com/elif1906/Pycimen/releases/tag/v1.0.0"
                target="_blank"
                className="rounded-full bg-gradient-to-r from-green-500 to-lime-400 px-7 py-3 font-semibold text-black shadow-[0_10px_40px_-10px_rgba(74,222,128,0.8)] transition hover:-translate-y-0.5 hover:brightness-110"
              >
                Get started
              </Link>
              <Link
                href="/docs.pdf"
                target="_blank"
                className="rounded-full border border-white/15 bg-white/5 px-7 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Read the docs
              </Link>
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:150ms]">
            <Image
              src="/pycimen-logo.png"
              alt=""
              width={110}
              height={110}
              className="animate-float absolute -right-2 -top-16 z-10 hidden drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] sm:block"
              priority
            />
            <HeroTerminal />
          </div>
        </div>

        {/* Stats */}
        <div className="relative border-y border-white/5 bg-white/[0.02]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 md:grid-cols-4 md:px-8">
            {stats.map((s, i) => (
              <div key={s.label} className={`py-8 text-center ${i > 0 ? "md:border-l md:border-white/5" : ""} ${i % 2 ? "border-l border-white/5 md:border-l" : ""}`}>
                <div className="text-gradient text-3xl font-bold md:text-4xl">{s.value}</div>
                <div className="mt-1 text-sm text-white/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">Features</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
          The best of two languages, in one toolchain.
        </h2>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-green-400/30 hover:bg-white/[0.04]"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-green-500/0 blur-3xl transition duration-500 group-hover:bg-green-500/20" />
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-green-500/20 to-orange-500/10 text-green-300 ring-1 ring-white/10">
                <Icon d={f.icon} />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 leading-relaxed text-white/55">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pipeline */}
      <section className="relative border-y border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">Under the hood</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">From source to result.</h2>
          <p className="mt-4 max-w-2xl text-white/55">
            Every PyCimen program travels through a classic interpreter pipeline, each stage hand-written in C++.
          </p>

          <div className="mt-14 flex flex-col items-stretch gap-3 md:flex-row md:items-center md:gap-0">
            {pipeline.map((p, i) => (
              <React.Fragment key={p.step}>
                <div className="glass flex-1 rounded-2xl px-5 py-6 text-center">
                  <div className="font-mono text-xs text-white/35">0{i + 1}</div>
                  <div className="mt-2 text-lg font-semibold">{p.step}</div>
                  <div className="mt-1 text-sm text-white/45">{p.detail}</div>
                </div>
                {i < pipeline.length - 1 && (
                  <svg className="mx-auto h-8 w-8 shrink-0 rotate-90 text-green-400/70 md:h-6 md:w-14 md:rotate-0" viewBox="0 0 56 24" fill="none" aria-hidden>
                    <path d="M2 12h46" stroke="currentColor" strokeWidth="2" strokeDasharray="4 8" className="animate-flow" />
                    <path d="M44 6l8 6-8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Examples */}
      <section id="examples" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">Examples</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">Feels familiar from line one.</h2>
            <p className="mt-4 text-white/55">
              These snippets come straight from the PyCimen test suite. If you can read Python, you can already write PyCimen.
            </p>
            <div className="mt-8 rounded-2xl border border-white/[0.07] bg-black/30 p-5 font-mono text-sm">
              <div className="mb-2 text-xs uppercase tracking-widest text-white/40">Build from source</div>
              <div className="space-y-1 text-white/80">
                <div><span className="text-green-400">$</span> git clone https://github.com/elif1906/Pycimen</div>
                <div><span className="text-green-400">$</span> cd pycimen &amp;&amp; make</div>
                <div><span className="text-green-400">$</span> ./pycimen hello.pcl</div>
              </div>
            </div>
          </div>
          <CodeShowcase />
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-5 py-24 md:px-8 md:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">Abstract</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">PyCimen: a new hybrid programming language.</h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-white/65">
            <p>
              This work explores the design and implementation of PyCimen, which combines the flexibility of Python with the
              performance-oriented nature of C++. It covers the core components of language implementation (the lexer, the
              parser and the abstract syntax tree), offering Python-like syntax executed in an optimized and efficient C++
              runtime.
            </p>
            <p>
              PyCimen provides a convenient developer experience through PyCimen-LSP: code completion, error checking and syntax
              highlighting. It includes a package manager and an embedded Python interpreter, enabling direct import of Python
              modules installed with pip and leveraging the rich Python ecosystem.
            </p>
            <p>
              Thanks to this design, Python machine-learning libraries become usable alongside C++, making AI integration far
              easier than with existing C++ libraries, while PyCimen&apos;s minimal syntax removes much of C++&apos;s
              difficulty.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24 md:px-8">
        <div className="glow-border relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-green-600/25 via-[#0c1410] to-orange-500/20 px-6 py-16 text-center md:py-20">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
          <div className="relative">
            <Image src="/pycimen-logo.png" alt="" width={72} height={72} className="animate-float mx-auto" />
            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">Ready for a new experience?</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              Download PyCimen, install the VS Code extension and run your first .pcl file in minutes.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="https://github.com/elif1906/Pycimen/releases/tag/v1.0.0"
                target="_blank"
                className="rounded-full bg-white px-7 py-3 font-semibold text-black transition hover:-translate-y-0.5"
              >
                Download v1.0.0
              </Link>
              <Link
                href="https://marketplace.visualstudio.com/items?itemName=ElifNurCelepoglu.PyCimen-LSP"
                target="_blank"
                className="rounded-full border border-white/20 bg-black/20 px-7 py-3 font-semibold transition hover:-translate-y-0.5 hover:bg-black/40"
              >
                Get PyCimen-LSP
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-white/40 md:flex-row md:px-8">
          <div className="flex items-center gap-2">
            <Image src="/pycimen-logo.png" alt="" width={22} height={22} />
            <span>PyCimen Language · MIT License</span>
          </div>
          <div className="flex gap-6">
            <Link href="https://github.com/elif1906/pycimen" target="_blank" className="hover:text-white">GitHub</Link>
            <Link href="/docs.pdf" target="_blank" className="hover:text-white">Docs</Link>
            <Link href="https://www.linkedin.com/in/elif-nur-aslıhan-celepoğlu/" target="_blank" className="hover:text-white">LinkedIn</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
