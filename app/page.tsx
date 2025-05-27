"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const autoCunt = () => {
    const interval = setInterval(() => {
      setCount(count => count + 1)
    }, 200);
    return () => clearInterval(interval)
  }
 
  return (
    <>
      <div className="h-screen w-screen flex flex-col items-center justify-center">
        <span className="text-6xl  bg-amber-500 rounded-2xl border-none">
          {count}
        </span>
        <br />
        <button
          className="cursor-pointer bg-white shadow-2xl text-2xl text-black rounded-2xl hover:bg-amber-400"
          onClick={autoCunt}
        >
          ClickMe
        </button>
      </div>
    </>
  );
}
