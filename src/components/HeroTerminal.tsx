"use client";

import { useEffect, useState } from "react";

const program = `def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

n = 0
while n <= 7:
    print(fibonacci(n))
    n += 1`;

const output = "0  1  1  2  3  5  8  13";

const keywords = new Set(["def", "if", "return", "while", "else", "class", "import"]);

// Tiny tokenizer so the typing animation can stay colored while it types.
function highlight(code: string) {
  return code.split(/(\s+|[()+\-<=:,]+)/).map((tok, i) => {
    if (keywords.has(tok)) return <span key={i} className="text-pink-400">{tok}</span>;
    if (/^\d+$/.test(tok)) return <span key={i} className="text-orange-300">{tok}</span>;
    if (tok === "print" || tok === "fibonacci") return <span key={i} className="text-sky-300">{tok}</span>;
    if (/^[()+\-<=:,]+$/.test(tok)) return <span key={i} className="text-white/50">{tok}</span>;
    return <span key={i}>{tok}</span>;
  });
}

const HeroTerminal = () => {
  const [typed, setTyped] = useState(0);
  const done = typed >= program.length;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(program.length);
      return;
    }
    if (done) {
      const restart = setTimeout(() => setTyped(0), 5000);
      return () => clearTimeout(restart);
    }
    const t = setTimeout(() => setTyped((c) => c + 1), program[typed] === "\n" ? 120 : 28);
    return () => clearTimeout(t);
  }, [typed, done]);

  return (
    <div className="glow-border glass relative rounded-2xl shadow-[0_30px_120px_-20px_rgba(34,197,94,0.35)]">
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-white/40">fibonacci.pcl</span>
      </div>
      <pre className="min-h-[250px] overflow-x-auto px-5 pt-5 font-mono text-[13px] leading-6 text-white/90 md:text-sm">
        {highlight(program.slice(0, typed))}
        {!done && <span className="animate-blink ml-px inline-block h-4 w-2 translate-y-0.5 bg-green-400" />}
      </pre>
      <div className="border-t border-white/5 px-5 py-4 font-mono text-[13px] md:text-sm">
        <div className="text-white/40">
          <span className="text-green-400">❯</span> ./pycimen fibonacci.pcl
        </div>
        <div className={`mt-1 text-lime-300 transition-opacity duration-500 ${done ? "opacity-100" : "opacity-0"}`}>
          {output}
        </div>
      </div>
    </div>
  );
};

export default HeroTerminal;
