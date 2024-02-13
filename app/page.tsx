"use client"
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-8 mt-4">

      <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link href="/2023/6" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"> Calender Demo</Link>
      </div>
      <div className="grid pl-5 pt-5">
        <h2 className="mb-2 text-lg font-semibold dark:text-white light:text-gray-900">Salient features:</h2>
        <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
          <li>
            Attention to ARIA accessibility, support for high contrast mode. The calendar offers both light mode and dark mode options.<br></br>
            Please note: If you&lsquo;re seeing the calendar with a dark background, it&lsquo;s likely because your operating system is configured for dark mode. 
          </li>
          <li>
            Responsive design that adapts to all screen sizes.
          </li>
          <li>
            Well structured code written in a way that facilitates testing.
          </li>
          <li>
            Uses Nextjs and App Router
          </li>
          <li>
            Uses Tailwindcss
          </li>
          <li>
            Has a basic unit test written with jest.
          </li>
        </ul>
      </div>
    </main>
  );
}
