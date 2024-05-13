export default function DocsLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return <div className="flex gap-8">
    <nav className="max bg-gray-600 w-80 max-w-xs p-8 h-screen">
      <ul className="flex flex-col gap-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
    <div className="w-full p-8">{children}</div>
  </div>
}