"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { sendRecommendation } from "@/app/services/apiService";
import MainStyle from "@/app/ui/home.module.css";

interface TierItem {
  title: string;
  reason: string;
}

interface TierListData {
  topic: string;
  tier_list: {
    [tier: string]: TierItem[];
  };
}

const loadingTexts = [
  "Crafting your personalized tier list...",
  "Gathering insights from the crowd...",
  "Analyzing top recommendations...",
  "Sorting through the best of the best...",
  "Curating your ultimate ranking...",
];

const TierListContent = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [tierData, setTierData] = useState<TierListData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    const fetchData = async () => {
      if (query) {
        try {
          setLoading(true);
          const data = await sendRecommendation(query);
          setTierData(data);
        } catch (error) {
          console.error("Error fetching tier list:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchData();
    const textRotationInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) =>
        (prevIndex + 1) % loadingTexts.length
      );
    }, 4000);

    return () => clearInterval(textRotationInterval);
  }, [query]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen flex-col">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500 mb-6"></div>
        <div
          key={currentTextIndex}
          className="text-xl text-gray-300 text-center animate-fade-in-out"
        >
          {loadingTexts[currentTextIndex]}
        </div>
      </div>
    );
  }

  if (!tierData || !tierData.tier_list) {
    return <div>No data found</div>;
  }

  const renderTierList = () => {
    return Object.entries(tierData.tier_list)
      .filter(
        ([tier]) => tier !== "Unranked" && tierData.tier_list[tier].length > 0
      )
      .map(([tier, items], index) => (
        <div 
          key={tier} 
          className={`mb-6 opacity-0 animate-slide-in-top`}
          style={{
            animationDelay: `${index * 0.3}s`,
            animationFillMode: 'forwards'
          }}
        >
          <h2 className="text-2xl font-bold mb-4">{tier}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {items.map((item: TierItem, itemIndex: number) => (
              <div 
                key={itemIndex} 
                className="bg-gray-800 p-4 rounded-lg shadow-md opacity-0 animate-slide-in-top"
                style={{
                  animationDelay: `${(index * 0.3) + (itemIndex * 0.1)}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>
      ));
  };

  return (
    <div className={`${MainStyle.mainContainer} container mx-auto p-6`}>
      <h1 className="text-3xl font-bold mb-6 opacity-0 animate-slide-in-top" style={{animationDelay: '0s', animationFillMode: 'forwards'}}>{tierData.topic}</h1>
      {renderTierList()}
    </div>
  );
};

export default function TierList() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TierListContent />
    </Suspense>
  );
}
