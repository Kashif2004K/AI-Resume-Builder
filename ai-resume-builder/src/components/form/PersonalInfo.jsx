import Input from "../common/Input";

const PersonalInfo = ({ resumeData, setResumeData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setResumeData((prevData) => ({
      ...prevData,
      personalInfo: {
        ...prevData.personalInfo,
        [name]: value,
      },
    }));
  };

  const { fullName, email, phone, linkedin, github } = resumeData.personalInfo;

  return (
    <div className="bg-[#fafafa] p-5 rounded-xl shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">Personal Information</h2>

      <Input
        label="Full Name"
        name="fullName"
        value={fullName}
        onChange={handleChange}
        placeholder="John Doe"
      />

      <Input
        label="Email"
        name="email"
        value={email}
        onChange={handleChange}
        placeholder="john@gmail.com"
      />

      <Input
        label="Phone"
        name="phone"
        value={phone}
        onChange={handleChange}
        placeholder="+92 300 1234567"
      />

      <Input
        label="LinkedIn"
        name="linkedin"
        value={linkedin}
        onChange={handleChange}
        placeholder="linkedin.com/in/yourname"
      />

      <Input
        label="GitHub"
        name="github"
        value={github}
        onChange={handleChange}
        placeholder="github.com/yourname"
      />
    </div>
  );
};

export default PersonalInfo;
