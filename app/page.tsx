"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-16 space-y-20 font-[Inter]">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center space-y-6">
        <div className="relative w-44 h-44 mb-6">
          <Image
            src="/me1.png"
            alt="Creator 1"
            width={176}
            height={176}
            className="rounded-full border-4 border-gray-800 absolute z-20 shadow-2xl"
          />
          <Image
            src="/me2.png"
            alt="Creator 2"
            width={176}
            height={176}
            className="rounded-full border-4 border-gray-700 absolute left-10 top-6 opacity-80 blur-[0.3px] shadow-xl"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Turn <span className="text-purple-400">Threads</span> Into Income 💸
        </h1>
        <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
          I used to scroll Threads for hours, wondering how others turned simple posts into real money.
Then I built my own system — one that finally worked.
These 3 eBooks are that exact roadmap: content, consistency, and income — all built from your mind, not your boss’s.
        </p>

        <div className="animate-bounce mt-8">
          <ArrowDown className="w-7 h-7 text-gray-500" />
        </div>
      </section>

      {/* eBook Section */}
      <section className="flex flex-col items-center space-y-20 w-full max-w-3xl">

       {/* $67 Premium eBook + Video */}
<motion.div
  whileHover={{ scale: 1.03 }}
  className="bg-gradient-to-b from-gray-900/70 to-black/80 backdrop-blur-md rounded-3xl p-8 flex flex-col md:flex-row items-center text-center md:text-left shadow-[0_0_70px_-15px_rgba(255,255,255,0.08)] space-y-8 md:space-y-0 md:space-x-10"
>
  {/* Video First */}
  <div className="relative flex-1 flex justify-center">
    <video
      src="/promo.mp4"
      autoPlay
      muted
      loop
      playsInline
      className="rounded-2xl shadow-2xl max-w-[300px]"
    />
    {/* Hand pointing → right */}
    <motion.div
      animate={{ x: [0, -10, 0], rotate: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute -right-10 top-1/2 text-5xl"
    >
      👉
    </motion.div>
  </div>

  {/* Book + Text */}
  <div className="flex-1 flex flex-col items-center md:items-start">
    <div className="perspective-3d mb-6">
      <Image
        src="/guide.png"
        alt="Threads to Income"
        width={240}
        height={320}
        className="rounded-xl shadow-2xl transform rotate-y-6 hover:rotate-y-0 transition-all duration-700"
      />
    </div>
    <h2 className="text-3xl font-semibold mb-3 font-[Playfair_Display]">
      Threads to Income — The Ultimate Creator Guide
    </h2>
    <p className="text-gray-400 mb-6 max-w-sm">This isn’t another “social media hack” book — it’s a blueprint for freedom.
You’ll learn how to use Threads to attract attention, build genuine authority, and turn that attention into income. Step by step, it shows you how to create high-demand digital products, write content that sells naturally, and build systems that work even when you don’t feel like posting.
If you’ve ever dreamed of replacing your 9–5 with your ideas — this is your starting line.
    </p>
    <a
      href="https://freedomguides88.gumroad.com/l/fouojn"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition-all"
    >
      Get for $67
    </a>
  </div>
</motion.div>


        {/* Free eBook */}
        <motion.div
          whileHover={{ scale: 1.04, rotate: 0.5 }}
          className="bg-gradient-to-b from-gray-900/70 to-black/80 backdrop-blur-md rounded-3xl p-8 flex flex-col items-center text-center shadow-[0_0_60px_-15px_rgba(255,255,255,0.05)]"
        >
          <div className="perspective-3d mb-6">
            <Image
              src="/freebook.png"
              alt="Free eBook"
              width={220}
              height={300}
              className="rounded-xl shadow-2xl transform rotate-y-6 hover:rotate-y-0 transition-all duration-700"
            />
          </div>
          <h2 className="text-2xl font-semibold mb-3 font-[Playfair_Display]">
            101 Digital Products to Sell on Threads
          </h2>
          <p className="text-gray-400 mb-6 max-w-sm">
            Start free — discover profitable ideas that work even if you’ve never sold anything online.
          </p>
          <a
            href="https://freedomguides88.gumroad.com/l/pfxhof"
            className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition-all"
          >
            Download Free
          </a>
        </motion.div>

        {/* $27 Playbook */}
        <motion.div
          whileHover={{ scale: 1.04, rotate: -0.3 }}
          className="bg-gradient-to-b from-gray-900/70 to-black/80 backdrop-blur-md rounded-3xl p-8 flex flex-col items-center text-center shadow-[0_0_60px_-15px_rgba(255,255,255,0.05)]"
        >
          <div className="perspective-3d mb-6">
            <Image
              src="/playbook.png"
              alt="ChatGPT for Marketers"
              width={220}
              height={300}
              className="rounded-xl shadow-2xl transform rotate-y-6 hover:rotate-y-0 transition-all duration-700"
            />
          </div>
          <h2 className="text-2xl font-semibold mb-3 font-[Playfair_Display]">
            ChatGPT for Marketers — 500+ Threads Prompts
          </h2>
          <p className="text-gray-400 mb-6 max-w-sm">
What if every post you wrote could trigger curiosity, connection, and clicks — almost automatically?
This isn’t just content — it’s strategy.
Inside are 500+ prompts and marketing hacks built on psychology, storytelling, and conversion triggers.
Write posts that connect and sell.



Copy smarter. Post stronger. Sell faster.
Get your playbook today and master the psychology of digital influence.          </p>
          <a
            href="https://freedomguides88.gumroad.com/l/pgyubl"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition-all"
          >
            Get for $27
          </a>
        </motion.div>


      </section>

      {/* Footer */}
      <footer className="text-gray-500 text-sm mt-16 tracking-wide">
        © 2025 ✦ Built with love by <span className="text-white font-semibold">Woods:+254718140053</span>
      </footer>
    </main>
  );
}
