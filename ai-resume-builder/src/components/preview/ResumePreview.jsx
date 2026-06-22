const Section = ({ title, children }) => (
  <div className="mt-4">
    <h2 className="font-bold text-lg mb-2 border-b pb-1">{title}</h2>
    {children}
  </div>
);

const ModernTemplate = ({ personalInfo, education, skills, projects }) => {
  return (
    <div className="p-6">
      {/* PERSONAL INFO */}
      <h1 className="text-3xl font-bold">
        {personalInfo.fullName || "Your Name"}
      </h1>

      <div className="text-sm text-gray-600 mt-1 space-y-1">
        <p>
          {personalInfo.email}
          {personalInfo.phone && ` | ${personalInfo.phone}`}
        </p>

        {personalInfo.linkedin && <p>{personalInfo.linkedin}</p>}

        {personalInfo.github && <p>{personalInfo.github}</p>}
      </div>

      <hr className="my-4" />

      {/* EDUCATION */}
      <Section title="Education">
        {education.length === 0 ? (
          <p className="text-gray-400 text-sm">No education added yet</p>
        ) : (
          education.map((edu, index) => (
            <div key={index} className="mb-3">
              <p className="font-medium">{edu.degree}</p>
              <p className="text-sm text-gray-600">{edu.university}</p>
              <p className="text-xs text-gray-500">
                {edu.startYear} - {edu.endYear}
              </p>
            </div>
          ))
        )}
      </Section>

      {/* SKILLS */}
      <Section title="Skills">
        {skills.length === 0 ? (
          <p className="text-gray-400 text-sm">No skills added yet</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-200 px-2 py-1 text-xs rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </Section>

      {/* PROJECTS */}
      <Section title="Projects">
        {projects.length === 0 ? (
          <p className="text-gray-400 text-sm">No projects added yet</p>
        ) : (
          projects.map((project, index) => (
            <div key={index} className="mb-3">
              <p className="font-semibold">{project.title}</p>

              <p className="text-sm text-gray-600">{project.description}</p>

              <p className="text-xs text-gray-500 italic">
                {project.technologies}
              </p>
            </div>
          ))
        )}
      </Section>
    </div>
  );
};

const ClassicTemplate = ({ personalInfo, education, skills, projects }) => {
  return (
    <div className="p-6 font-serif">
      {/* HEADER */}
      <h1 className="text-2xl font-bold text-center border-b pb-2">
        {personalInfo.fullName || "Your Name"}
      </h1>

      <div className="text-center text-sm mt-2 text-gray-700 space-y-1">
        <p>
          {personalInfo.email}
          {personalInfo.phone && ` • ${personalInfo.phone}`}
        </p>

        {personalInfo.linkedin && <p>{personalInfo.linkedin}</p>}

        {personalInfo.github && <p>{personalInfo.github}</p>}
      </div>

      {/* EDUCATION */}
      <Section title="Education">
        {education.map((edu, index) => (
          <p key={index}>
            {edu.degree} - {edu.university}
          </p>
        ))}
      </Section>

      {/* SKILLS */}
      <Section title="Skills">
        <p>{skills.join(", ")}</p>
      </Section>

      {/* PROJECTS */}
      <Section title="Projects">
        {projects.map((project, index) => (
          <div key={index} className="mb-2">
            <p className="font-medium">{project.title}</p>

            <p className="text-sm text-gray-600">{project.description}</p>

            <p className="text-xs text-gray-500 italic">
              {project.technologies}
            </p>
          </div>
        ))}
      </Section>
    </div>
  );
};

const ResumePreview = ({ resumeData, selectedTemplate }) => {
  const { personalInfo, education, skills, projects } = resumeData;

  return (
    <div className="bg-white rounded-xl shadow h-full">
      {selectedTemplate === "modern" ? (
        <ModernTemplate
          personalInfo={personalInfo}
          education={education}
          skills={skills}
          projects={projects}
        />
      ) : (
        <ClassicTemplate
          personalInfo={personalInfo}
          education={education}
          skills={skills}
          projects={projects}
        />
      )}
    </div>
  );
};

export default ResumePreview;
