export default function Docs() {
    return <div className="">
        <h1 className="text-2xl my-8 font-bold">Language Reference</h1>

        <section className="m-8">
            <h3 className="text-xl my-4 font-bold">Syntax:</h3>
            <ul className="list-disc">
                <li>Blocks are defined by indentation.</li>
                <li>Variable assignments use the = symbol.</li>
                <li>Expressions are generally the same as in Python.</li>
            </ul>
        </section>
        
        <section className="m-8">
            <h3 className="text-xl my-4 font-bold">Data Types:</h3>
            <p className="mb-2">Pycimen supports the basic data types:</p>
            <ul className="list-disc">
                <li><span className="italic text-blue-300">int</span> - Integers</li>
                <li><span className="italic text-blue-300">float</span> - Floating-point numbers</li>
                <li><span className="italic text-blue-300">string</span> - String literals</li>
                <li><span className="italic text-blue-300">boolean</span> - True and False</li>
                <li><span className="italic text-blue-300">None</span> - Equivalent to Python&apos;s None</li>
            </ul>
        </section>
        
        <section className="m-8">
            <h3 className="text-xl my-4 font-bold">Operators:</h3>
            <p className="mb-2">Pycimen supports the following operators:</p>
            <ul className="list-disc">
                <li>Arithmetic operators: +, -, *, /, %</li>
                <li>Comparison operators: &lt;, &gt;, ==, !=, &lt;=, &gt;=</li>
                <li>Logical operators: and, or, not</li>
                <li>Bitwise operators: &, |, ^, &lt;&lt;, &gt;&gt;</li>
            </ul>
        </section>

        <section className="m-8">
            <h3 className="text-xl my-4 font-bold">Control Flow:</h3>
            <p className="mb-2">Pycimen supports the following control flow statements:</p>
            <ul className="list-disc">
                <li><span className="italic text-blue-300">if / elif / else</span></li>
                <li><span className="italic text-blue-300">while</span> loop</li>
                <li><span className="italic text-blue-300">for</span> loop</li>
                <li><span className="italic text-blue-300">break</span></li>
                <li><span className="italic text-blue-300">continue</span></li>
                <li><span className="italic text-blue-300">pass</span></li>
            </ul>
        </section>

        <section className="m-8">
            <h3 className="text-xl my-4 font-bold">Functions:</h3>
            <p className="mb-2">Functions are defined with the def keyword and parameters are specified in parentheses.</p>
        </section>

        <section className="m-8">
            <h3 className="text-xl my-4 font-bold">Classes:</h3>
            <p className="mb-2">Pycimen supports class definition with the <span className="italic text-blue-300">class</span> keyword.</p>
        </section>

    </div>
}