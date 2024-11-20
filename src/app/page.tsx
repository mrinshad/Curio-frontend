import styles from "@/app/ui/home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={`${styles.mainContainer} w-full flex items-center justify-center h-screen flex-col`}>
      <h1 className="text-9xl">Curio</h1>
      <p className="text-lg w-1/2 my-9">
        Discover the internet&apos;s best ideas, recommendations, and tier lists
        powered by Reddit! Whether you&apos;re searching for top movies, must-read
        manga, or the best gadgets of the year, our app dives into Reddit&apos;s vast
        community to curate the most relevant posts and comments. Powered by
        advanced AI, we analyze popular opinions and present a tier list
        tailored to your query. Simplifying choices, one search at a time!
      </p>
      <Link href="/query">
      <button className={`${styles.fadeInAnimation} border px-9 rounded-full py-2 border-solid border-white hover:bg-zinc-900`}>
        Let&apos;s get started
      </button>
      </Link>
    </main>
  );
}
