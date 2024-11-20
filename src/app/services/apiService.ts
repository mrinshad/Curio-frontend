const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

export const sendRecommendation = async (topic: string) => {
  try {
    const response = await fetch(`${API_URL}/recommend`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ topic }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch recommendations.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error sending recommendation:", error);
    throw error;
  }
};
