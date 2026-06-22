import { useState } from "react";

const Skills = ({ resumeData, setResumeData }) => {
  const [input, setInput] = useState("");

  // Add skill on Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      e.preventDefault();

      setResumeData((prev) => ({
        ...prev,
        skills: [...prev.skills, input.trim()],
      }));

      setInput("");
    }
  };

  // Delete skill
  const removeSkill = (index) => {
    const updated = resumeData.skills.filter((_, i) => i !== index);

    setResumeData((prev) => ({
      ...prev,
      skills: updated,
    }));
  };

  return (
    <div className="bg-[#fafafa] p-5 rounded-xl shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">Skills</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a skill and press Enter (e.g. React)"
        className="
          w-full px-3 py-2 border border-black rounded-lg
          focus:outline-none focus:ring-2 focus:ring-blue-500
        "
      />

      <div className="flex flex-wrap gap-2 mt-4">
        {resumeData.skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center gap-2"
          >
            {skill}

            <button
              onClick={() => removeSkill(index)}
              className="text-red-500 font-bold"
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
