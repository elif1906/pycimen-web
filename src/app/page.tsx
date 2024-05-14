import Image from "next/image";

export default function Home() {
  return (
    <div className="px-48 py-24">
      <h1 className="py-12 text-8xl font-bold">PYCIMEN<br/>LANGUAGE</h1>
      <p className="text-2xl">Are you ready for a new experience?</p>
      <div className="w-full flex justify-end">
        <button className="bg-orange-600 py-2 px-14 rounded-full">MORE</button>
      </div>
    </div>
  );
}