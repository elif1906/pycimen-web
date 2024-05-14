import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const Home = () => {
  const codeString = `AstNode* Parser::parseImportStmt() {
    /*
     *    import_stmt ::= import "(module)" as? "(name)"?"
    */

    Token module = consume(TokenType::Name);

    ImportNode* node = new ImportNode(module.lexeme);

    return node;
}`;

  return (
    <>
      <div className="px-48 py-10 h-screen">
        <div className="grid grid-cols-2 ">
          <h1 className="py-12 text-8xl font-bold">PYCIMEN<br />LANGUAGE</h1>
          <div className="max-w-md justify-end">
            <div className="bg-slate-800 rounded-md p-4 shadow-lg group">
              <div className="flex  mb-4">
                <div className="flex-none text-xs font-semibold text-green-300 mr-2">pycimen.pcl</div>
                <div className="flex-auto bg-slate-600 rounded-r h-6"></div>
              </div>
              <SyntaxHighlighter language="cpp" style={vscDarkPlus} className="mt-8">
                {codeString}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
        <p className="text-2xl">Are you ready for a new experience?</p>
        <div className="py-2 h-screen">
          <Link href="/#more">
            <button className="bg-orange-600 hover:bg-green-700 mt-14 py-2 px-14 rounded-full">MORE</button>
          </Link>
        </div>
      </div>
      <section id="more" className="px-20 py-12">
        <p className="text-xl">
          Python interpreter implemented in C++ offers developers a versatile and extensible tool for executing Python code. This approach fosters deeper understanding of the language&apos;s inner workings and encourages contributions to the open-source Python ecosystem.
        </p>
        <h2 className="py-8 text-2xl font-bold">Project Overview</h2>
        <p className="text-xl">
          The Python Interpreter project aims to develop a fully functional interpreter for the Python programming language from scratch, using C++ as the implementation language. This project serves as an impressive demonstration of technical expertise and deep understanding of both Python and C++.
        </p>
        <p className="py-8 text-2xl font-bold">This project delves into the heart of Python by crafting a custom interpreter built in C++.</p>
        <ul className="pl-12 list-disc">
          <li className="py-2"><b>Language Parsing:</b> The interpreter includes a robust parser capable of parsing Python source code and generating an abstract syntax tree (AST) representation.</li>
          <li className="py-2"><b>Lexical Analysis:</b> A comprehensive lexer/tokenizer module is implemented to break down the input source code into tokens, facilitating the subsequent parsing and interpretation stages.</li>
          <li className="py-2"><b>Semantic Analysis:</b> The interpreter performs semantic analysis on the parsed AST to detect and report any language-specific errors, such as undeclared variables or type mismatches.</li>
          <li className="py-2"><b>Execution Engine:</b> A powerful execution engine is designed to execute the parsed Python code, implementing the language&apos;s semantics and executing statements, expressions, and control flow constructs.</li>
          <li className="py-2"><b>Standard Library Support:</b> Efforts are made to provide support for a subset of Python&apos;s standard library modules, enabling the interpreter to execute a wide range of Python programs.</li>
        </ul>
        <p className="py-8 text-2xl font-bold">Why This Project Matters</p>
        <ul className="pl-12 list-disc">
          <li className="py-2"><b>Become a Language Whisperer:</b> Crafting a Python interpreter from scratch equips you with an intimate understanding of programming languages, their design principles, and the intricate workings of compilers and interpreters. It showcases your prowess in tackling complex projects and makes you a valuable asset to potential employers and collaborators.</li>
          <li className="py-2"><b>Technical Virtuosity:</b> This project offers a hands-on playground to hone your skills in language parsing, lexical analysis, semantic analysis, and execution engine design. These are highly sought-after skills in software development, particularly in areas like language design, compiler development, and performance optimization.</li>
          <li className="py-2"><b>Level Up Your Curriculum:</b> Adding this project to your resume or portfolio is a bold declaration of your dedication to continuous learning and mastery of advanced programming concepts. It sets you apart from the crowd and signals your passion for exploring the intricacies of computer science.</li>
        </ul>
      </section>
    </>
  );
};

export default Home;
