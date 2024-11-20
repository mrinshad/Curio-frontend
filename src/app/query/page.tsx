"use client";
import { useState } from "react";
import styles from "@/app/ui/query.module.css";
import Image from "next/image";
import MainStyle from "@/app/ui/home.module.css";
import { sendRecommendation } from "@/app/services/apiService"; 

export default function Query() {
  const [topic, setTopic] = useState("");

  const handleSend = async () => {
    if (!topic.trim()) {
      alert("Please enter a topic to search.");
      return;
    }

    try {
      const data = await sendRecommendation(topic);
      console.log(data);
    } catch (error) {
      console.error("Error sending request:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <main
      className={`${MainStyle.mainContainer} flex items-center justify-center w-full h-screen flex-col`}
    >
      <h1 className={`${styles.typingDemo} text-4xl mb-10`}>
        See What the Crowd’s Saying
      </h1>
      <div className={`${styles.showAfterTwoSec} flex w-full justify-center`}>
        <input
          type="text"
          placeholder="Type something to search (e.g., 'Top movies of all time')"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className={`w-1/3 py-3 pl-3 rounded-full bg-[#161616]`}
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
            className={`${styles.div3}`}
          />
        </div>
      </div>
    </main>
  );
}
