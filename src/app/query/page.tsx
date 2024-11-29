// Query.js
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/app/ui/query.module.css";
import Image from "next/image";
import MainStyle from "@/app/ui/home.module.css";

export default function Query() {
  const router = useRouter();
  const [topic, setTopic] = useState("");

  const handleSend = () => {
    if (!topic.trim()) {
      alert("Please enter a topic to search.");
      return;
    }
    router.push(`/tier-list?query=${encodeURIComponent(topic)}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };
  return (
    <main
      className={`${MainStyle.mainContainer} flex items-center justify-center w-full h-screen flex-col`}
    >
      <h1 className={`${styles.typingDemo} text-2xl sm:text-4xl mb-10`}>
        See What the Crowd&apos;s Saying
      </h1>

      <div className={`${styles.showAfterTwoSec} flex w-full justify-center`}>
        <input
          type="text"
          placeholder="Type something to search (e.g., 'Top movies of all time')"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          onKeyDown={handleKeyDown}
          className={`w-1/2 lg:w-1/3  xl:w-1/2 py-3 px-3 rounded-full bg-[#161616] text-sm lg:text-lg`}
        />
        <div
          className="flex bg-white p-3 rounded-full  ml-2 cursor-pointer hover:opacity-90"
          onClick={handleSend}
        >
          <Image
            src="/send.png"
            width={25}
            height={25}
            alt="send picture"
            className={`${styles.div3} `}
          />
        </div>
      </div>
    </main>
  );
}
