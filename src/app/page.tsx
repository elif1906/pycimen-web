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
    <div className="flex flex-col">
      <div className="h-screen px-4 md:px-24 py-10 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1 className="py-4 md:py-12 text-4xl md:text-8xl font-bold">PYCIMEN<br/>LANGUAGE</h1>
            <p className="text-lg md:text-2xl">Are you ready for a new experience?</p>
            <div className="py-2">
              <Link href="/#more">
                <button className="bg-orange-600 hover:bg-green-700 mt-4 md:mt-14 py-2 px-8 md:px-14 rounded-full">MORE</button>
              </Link>
            </div>
          </div>
          <div className="bg-slate-800 rounded-md p-4 shadow-lg group mt-4 md:mt-12">
            <div className="flex mb-4">
              <div className="flex-none text-xs font-semibold text-green-300 mr-2">pycimen.pcl</div>
              <div className="flex-auto bg-slate-600 rounded-r h-6"></div>
            </div>
            <SyntaxHighlighter language="cpp" style={{...vscDarkPlus}} className="mt-8 h-[calc(100%-40px)]">
              {codeString}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
      <section id="more" className="px-4 md:px-20 py-8 md:py-12 flex-grow">
      <h3 className="py-4 md:py-8 text-xl md:text-2xl font-bold text-green-600">Abstract
      </h3>
        <p className="text-lg md:text-xl leading-relaxed">
        This work explores the design and implementation of a new
hybrid programming language called PyCimen, which com-
bines the flexibility of Python with the performance-oriented
nature of C++. This study aims to examine the core concepts
of programming language design and implementation. It
includes the construction of essential components such as
the Lexer, Parser, and Abstract syntax tree (AST), offering
Python-like syntax executed in a highly optimized and effi-
cient C++ runtime. PyCimen’s minimalistic syntax enhances
the ease and simplicity of the language. PyCimen provides
a convenient developer experience with PyCimen-LSP fea-
tures such as code completion, error checking, and syntax
highlighting. It includes a package manager and an embed-
ded Python interpreter, enabling direct import of Python
modules installed with PIP, thus leveraging the rich Python
module ecosystem. Language development requires lexical
analysis, parsing, and evaluation. Consequently, this work aims to
promote the design and implementation of programming lan-
guages, supporting their creation by providing fundamental
knowledge of language design concepts. It also demonstrates
the feasibility of PyCimen combining the strengths of Python
and C++ into a single integrated language. The addition of
new features will make PyCimen a viable language option
in various fields</p>
        <h3 className="py-4 md:py-8 text-xl md:text-2xl font-bold text-green-600">PyCimen : A New Hybrid Programming Language</h3>
        <p className="text-lg md:text-xl leading-relaxed">
        This new hybrid programming language aims to strengthen the basic principles of programming languages by creating a custom interpreter for PyCimen. Remarkably, PyCimen seamlessly integrates Python&apos;s vast library ecosystem, enabling effortless use of powerful tools across a variety of domains. Additionally, inheriting the performance-oriented nature of C++, PyCimen ensures efficient execution, succeeding in data analysis tasks where speed and productivity are vital. Furthermore, we can benefit from the features of the C++ language while eliminating its difficulties with the help of PyCimen. This approach offers an easy way to gain a new perspective.Additionally, thanks to this, Python machine learning libraries can be used in C++, and AI integration can be done more easily compared to the existing C++ libraries.</p>



</section>

    </div>
  );
};

export default Home;

