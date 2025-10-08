"use client"

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [handle, setHandle] = useState("");

  const handleButton = () => {
    if (handle == "") {
      router.push("/generate");
    }
    else {
      router.push(`/generate?handle=${handle}`);
    }
  }


  return (
    <div>
      <div className="bg-[#d2e823] min-h-[150vh] flex justify-center items-center">
        <div className="grid grid-cols-2 w-[90vw] gap-10">
          <div className="text-[#254f1a] ">
            <h1 className="text-7xl font-extrabold my-6">A link in bio built<br />for you.</h1>
            <p className="text-lg font-semibold">Join 70M+ people using LinkForest for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
            <div className="flex w-full pr-12 gap-4 mt-14">
              <input type="text" placeholder="linkfo.ee/" value={handle} onChange={(e) => setHandle(e.target.value)} name="handle" id="handle" className="bg-white p-4 rounded-lg w-1/2 outline-green-700 placeholder:text-gray-500 placeholder:font-bold" />
              <button className="font-bold w-1/2 bg-[#254f1a] rounded-full text-white cursor-pointer hover:bg-green-950" onClick={handleButton}>Get started for free</button>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <video src="https://assets.production.linktr.ee/curate-assets/Zay-2.mp4" className="w-[40vw] rounded-3xl" autoPlay muted loop></video>
          </div>
        </div>
      </div>
      <div className="bg-[#2665d6] min-h-[130vh] flex justify-center items-center">
        <div className="grid grid-cols-2 w-[90vw] gap-10">
          <div className='flex items-center justify-center'>
            <video src="https://assets.production.linktr.ee/static/curate/customise_your_linktree.webm" className="w-[40vw] rounded-3xl" autoPlay muted loop></video>
          </div>
          <div className="text-[#d2e823] gap-4 flex justify-center flex-col">
            <h1 className="text-6xl font-extrabold my-6">Create and customize <br /> your LinkForest in minutes</h1>
            <p className="text-lg font-semibold text-white">Connect all your content across social media, websites, stores and more in one link in bio. Customize every detail or let LinkForest automatically enhance it to match your brand and drive more clicks.</p>
            <button onClick={handleButton} className="font-bold w-1/2 p-4 mt-10 bg-[#d2e823] rounded-full text-black cursor-pointer hover:bg-lime-400">Get started for free</button>
          </div>
        </div>
      </div>
    </div>
  );
}
