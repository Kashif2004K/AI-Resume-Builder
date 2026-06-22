import { useState } from "react";
import { getATSScore } from "../services/geminiService";
import { extractTextFromPDF } from "../utils/pdfParser";

const ATSChecker = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    try {
      // 1. Extract text from PDF
      const text = await extractTextFromPDF(file);

      // 2. Send to AI
      const response = await getATSScore(text);

      setResult(response);
    } catch (err) {
      console.error(err);
      setResult("Failed to process PDF");
    }

    setLoading(false);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow mt-6">
      <h2 className="text-xl font-bold mb-3">ATS Score Checker (PDF Upload)</h2>

      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileUpload}
        className="mb-3"
      />

      {loading && <p className="text-sm text-gray-500">Analyzing resume...</p>}

      {result && (
        <div className="mt-4 bg-gray-100 p-3 rounded whitespace-pre-wrap">
          {result}
        </div>
      )}
    </div>
  );
};

export default ATSChecker;
