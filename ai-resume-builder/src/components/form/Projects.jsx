import Input from "../common/Input";
import AIGenerator from "../common/AIGenerator";

const Projects = ({ resumeData, setResumeData }) => {
  // Add new project
  const addProject = () => {
    setResumeData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          title: "",
          description: "",
          technologies: "",
        },
      ],
    }));
  };

  // Handle change
  const handleChange = (index, e) => {
    const { name, value } = e.target;

    const updatedProjects = [...resumeData.projects];
    updatedProjects[index][name] = value;

    setResumeData((prev) => ({
      ...prev,
      projects: updatedProjects,
    }));
  };

  // Delete project
  const deleteProject = (index) => {
    const updated = resumeData.projects.filter((_, i) => i !== index);

    setResumeData((prev) => ({
      ...prev,
      projects: updated,
    }));
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Projects</h2>

        <button
          onClick={addProject}
          className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-700"
        >
          + Add
        </button>
      </div>

      {resumeData.projects.length === 0 && (
        <p className="text-gray-500 text-sm">No projects added yet.</p>
      )}

      {resumeData.projects.map((project, index) => (
        <div key={index} className="border p-4 rounded-lg mb-4 bg-gray-50">
          <Input
            label="Project Title"
            name="title"
            value={project.title}
            onChange={(e) => handleChange(index, e)}
            placeholder="AI Resume Builder"
          />

          <div>
            <Input
              label="Description"
              name="description"
              value={project.description}
              onChange={(e) => handleChange(index, e)}
              placeholder="Built a job tracker app..."
            />

            <AIGenerator
              value={project.description}
              onChange={(newText) => {
                const updated = [...resumeData.projects];
                updated[index].description = newText;

                setResumeData((prev) => ({
                  ...prev,
                  projects: updated,
                }));
              }}
            />
          </div>

          <Input
            label="Technologies"
            name="technologies"
            value={project.technologies}
            onChange={(e) => handleChange(index, e)}
            placeholder="React, Node.js, Tailwind"
          />

          <button
            onClick={() => deleteProject(index)}
            className="text-red-500 text-sm mt-2 hover:underline"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Projects;
