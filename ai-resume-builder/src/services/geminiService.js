export const generateBullet = async (text) => {
  try {
    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-3.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `
You are an expert resume writer.

Convert the input into ONE professional resume bullet point.

STRICT RULES:
- Only 1 bullet point
- No explanations
- No extra text
- No quotes
- Start with a strong action verb (Developed, Built, Designed, Created, Implemented)
- Maximum 20–25 words
- Must be ATS-friendly
- Clear and concise

INPUT:
${text}

OUTPUT:

                `,
                },
              ],
            },
          ],
        }),
      },
    );

    const data = await response.json();

    console.log("Gemini response:", data);

    return (
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response generated"
    );
  } catch (err) {
    console.error("Gemini Error:", err);
    return "Request failed";
  }
};

export const getATSScore = async (resumeText) => {
  try {
    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-3.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `
You are an ATS (Applicant Tracking System) expert.

Analyze this resume and return ONLY in this format:

Score: XX/100  
Missing Keywords: keyword1, keyword2, keyword3  
Suggestions: 2-3 short improvement points  

Rules:
- Be strict like real ATS systems
- Focus on skills, clarity, keywords
- Keep output short and structured

RESUME:
${resumeText}
                  `,
                },
              ],
            },
          ],
        }),
      },
    );

    const data = await response.json();

    return data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
  } catch (err) {
    console.error(err);
    return "Failed to analyze resume";
  }
};
