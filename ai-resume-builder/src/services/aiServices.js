export const generateBullet = async (text) => {
  try {
    const response = await fetch("https://api.example.com/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
      }),
    });

    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("AI Error:", error);
    return "Failed to generate bullet point.";
  }
};
