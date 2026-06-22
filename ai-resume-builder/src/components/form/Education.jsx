import Input from "../common/Input";

const Education = ({ resumeData, setResumeData }) => {
  // Add new empty education entry
  const addEducation = () => {
    setResumeData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          degree: "",
          university: "",
          startYear: "",
          endYear: "",
        },
      ],
    }));
  };

  // Handle input change for a specific index
  const handleChange = (index, e) => {
    const { name, value } = e.target;

    const updatedEducation = [...resumeData.education];
    updatedEducation[index][name] = value;

    setResumeData((prev) => ({
      ...prev,
      education: updatedEducation,
    }));
  };

  // Delete entry
  const deleteEducation = (index) => {
    const updatedEducation = resumeData.education.filter((_, i) => i !== index);

    setResumeData((prev) => ({
      ...prev,
      education: updatedEducation,
    }));
  };

  return (
    <div className="bg-[#fafafa] p-5 rounded-xl shadow mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Education</h2>

        <button
          onClick={addEducation}
          className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-700"
        >
          + Add
        </button>
      </div>

      {resumeData.education.length === 0 && (
        <p className="text-gray-500 text-sm">No education added yet.</p>
      )}

      {resumeData.education.map((edu, index) => (
        <div key={index} className="border p-4 rounded-lg mb-4 bg-gray-50">
          <Input
            label="Degree"
            name="degree"
            value={edu.degree}
            onChange={(e) => handleChange(index, e)}
            placeholder="BS Computer Science"
          />

          <Input
            label="University"
            name="university"
            value={edu.university}
            onChange={(e) => handleChange(index, e)}
            placeholder="University"
          />

          <Input
            label="Start Year"
            name="startYear"
            value={edu.startYear}
            onChange={(e) => handleChange(index, e)}
            placeholder="2022"
          />

          <Input
            label="End Year"
            name="endYear"
            value={edu.endYear}
            onChange={(e) => handleChange(index, e)}
            placeholder="2026"
          />

          <button
            onClick={() => deleteEducation(index)}
            className="text-red-500 text-sm mt-2 hover:underline"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Education;
