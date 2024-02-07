"use client"
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
  
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link href="/2023/6" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"> Calender Application</Link>
      </div>
    </main>
  );
}
