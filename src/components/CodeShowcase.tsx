"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const examples = [
  {
    name: "Classes",
    file: "number.pcl",
    code: `class Number:
    def __init__(self, n):
        self._n = n

    def __add__(self, other):
        return Number(self._n + other.getN())

    def getN(self):
        return self._n

n1 = Number(3)
n2 = Number(5)
n3 = Number(6)
n4 = Number(9)

n5 = n1.__add__(n2).__add__(n3).__add__(n4)
print(n5.getN())`,
    output: "23",
  },
  {
    name: "Recursion",
    file: "factorial.pcl",
    code: `def factorial(n):
    if n == 1:
        return n
    else:
        return n * factorial(n-1)

print(factorial(4))
print(factorial(5))`,
    output: "24\n120",
  },
  {
    name: "Closures",
    file: "closures.pcl",
    code: `def a(m):
    t = 3
    def k(g):
        return g
    def b(n):
        def c(p):
            return m + n + p + t
        return c(3)
    return b(4) + k(5)

print(a(3))`,
    output: "18",
  },
  {
    name: "Operators",
    file: "operators.pcl",
    code: `a = 2 + (3 if False else 4)
print(a)

x = 5
x += 3
print(x)

d = 1
d <<= 3
print(d)

c = 5
c ^= 3
print(c)`,
    output: "6\n8\n8\n6",
  },
];

const CodeShowcase = () => {
  const [active, setActive] = useState(0);
  const ex = examples[active];

  return (
    <div className="glow-border glass overflow-hidden rounded-2xl">
      <div className="flex gap-1 overflow-x-auto border-b border-white/5 p-2" role="tablist">
        {examples.map((e, i) => (
          <button
            key={e.name}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition ${
              i === active ? "bg-white/10 text-white" : "text-white/50 hover:text-white/80"
            }`}
          >
            {e.name}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-[1fr_260px]">
        <div className="code-surface overflow-x-auto p-5 text-sm">
          <div className="mb-3 font-mono text-xs text-white/40">{ex.file}</div>
          <SyntaxHighlighter language="python" style={vscDarkPlus} customStyle={{ fontSize: "0.85rem", lineHeight: 1.7 }}>
            {ex.code}
          </SyntaxHighlighter>
        </div>
        <div className="border-t border-white/5 bg-black/30 p-5 font-mono text-sm md:border-l md:border-t-0">
          <div className="mb-3 text-xs uppercase tracking-widest text-white/40">Output</div>
          <div className="text-white/40">
            <span className="text-green-400">❯</span> ./pycimen {ex.file}
          </div>
          <pre key={active} className="animate-fade-up mt-2 whitespace-pre-wrap text-lime-300">{ex.output}</pre>
        </div>
      </div>
    </div>
  );
};

export default CodeShowcase;
