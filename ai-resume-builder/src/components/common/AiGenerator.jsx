import { useState } from "react";
import { generateBullet } from "../../services/geminiService";

const AIGenerator = ({ value, onChange }) => {
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!value) return;

    setLoading(true);

    const result = await generateBullet(value);

    onChange(result);

    setLoading(false);
  };

  return (
    <div className="mt-2">
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="bg-purple-600 text-white px-3 py-1 rounded text-sm hover:bg-purple-700"
      >
        {loading ? "Generating..." : "✨ Improve with AI"}
      </button>
    </div>
  );
};

export default AIGenerator;
