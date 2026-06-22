import { useState } from "react";
import PersonalInfo from "../components/form/PersonalInfo";
import Education from "../components/form/Education";
import ResumePreview from "../components/preview/ResumePreview";
import Skills from "../components/form/Skills";
import Projects from "../components/form/Projects";
import { useRef } from "react";
import html2pdf from "html2pdf.js";
import ATSChecker from "../components/ATSChecker";

const Builder = () => {
  const resumeRef = useRef();
  const handleDownloadPDF = () => {
    const element = resumeRef.current;

    html2pdf()
      .set({
        margin: 0.5,
        filename: "my-resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          backgroundColor: "#ffffff",
        },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
      })
      .from(element)
      .save();
  };
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
    },
    education: [],
    skills: [],
    projects: [],
  });
  const [selectedTemplate, setSelectedTemplate] = useState("modern");

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-7xl font-bold text-center mb-6 text-gray-800">
        <span className="text-orange-600">AI</span> Resume Builder
      </h1>
      <div className="flex justify-center gap-3 mb-6">
        <button
          onClick={() => setSelectedTemplate("modern")}
          className={`px-4 py-2 rounded-lg border ${
            selectedTemplate === "modern" ? "bg-black text-white" : "bg-white"
          }`}
        >
          Modern
        </button>

        <button
          onClick={() => setSelectedTemplate("classic")}
          className={`px-4 py-2 rounded-lg border ${
            selectedTemplate === "classic" ? "bg-black text-white" : "bg-white"
          }`}
        >
          Classic
        </button>
      </div>
      <button
        onClick={handleDownloadPDF}
        className="bg-black text-white px-4 py-2 rounded-lg mb-6 hover:bg-gray-800"
      >
        Download PDF
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT SIDE - FORMS */}
        <div>
          <PersonalInfo resumeData={resumeData} setResumeData={setResumeData} />

          <Education resumeData={resumeData} setResumeData={setResumeData} />
          <Skills resumeData={resumeData} setResumeData={setResumeData} />
          <Projects resumeData={resumeData} setResumeData={setResumeData} />
        </div>

        {/* RIGHT SIDE - LIVE PREVIEW */}

        <div ref={resumeRef} className="pdf-safe bg-white text-black">
          <ResumePreview
            resumeData={resumeData}
            selectedTemplate={selectedTemplate}
          />
        </div>
      </div>
      <ATSChecker />
    </div>
  );
};

export default Builder;
