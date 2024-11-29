import styles from "@/app/ui/home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className={`${styles.mainContainer} w-full flex items-center justify-center h-screen flex-col`}
    >
      <h1 className="text-6xl lg:text-7xl xl:text-8xl">Curio</h1>
      <p className="text-xs lg:text-lg w-4/5 lg:w-1/2 my-9 text-justify">
        Discover the internet&apos;s best ideas, recommendations, and tier lists
        powered by Reddit! Whether you&apos;re searching for top movies,
        must-read manga, or the best gadgets of the year, our app dives into
        Reddit&apos;s vast community to curate the most relevant posts and
        comments. Powered by advanced AI, we analyze popular opinions and
        present a tier list tailored to your query. Simplifying choices, one
        search at a time!
      </p>
      <span className="absolute bottom-0 left-0 w-full p-4 text-xs lg:text-sm text-center text-zinc-500 ">
        Please note that this approach may not guarantee the accuracy or
        relevance of the tier list and data. I encourage you to view the
        results with a flexible mindset.
      </span>

      <Link href="/query">
        <button
          className={`${styles.fadeInAnimation} text-xs lg:text-sm border px-9 rounded-full py-2 border-solid border-white hover:bg-zinc-900`}
        >
          Let&apos;s get started
        </button>
      </Link>
    </main>
  );
}
