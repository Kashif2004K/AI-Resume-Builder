# 🧠 AI Resume Builder

An AI-powered Resume Builder built with React, Tailwind CSS, and Google Gemini AI. Create professional resumes, preview them live, export them as PDFs, generate AI-enhanced content, and analyze resumes with an ATS checker.

## ✨ Features

### 📄 Resume Builder
- Personal Information section
- Education section
- Skills section
- Projects section
- Dynamic form fields

### 👀 Live Resume Preview
- Real-time resume updates
- Modern and Classic resume templates
- Professional resume layout

### 🤖 AI Features
- AI Resume Bullet Generator
- Improve project descriptions with Gemini AI
- ATS-friendly content generation

### 📊 ATS Resume Checker
- Upload PDF resumes
- Extract resume text automatically
- AI-powered ATS analysis
- Resume scoring and improvement suggestions

### 📥 PDF Export
- Download resume as PDF
- Clean and professional formatting
- One-click export

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS

### Libraries
- html2pdf.js
- pdfjs-dist

### AI
- Google Gemini API

## 📂 Project Structure

```text
src/
│
├── components/
│   ├── common/
│   │   ├── Input.jsx
│   │   └── AIGenerator.jsx
│   │
│   ├── form/
│   │   ├── PersonalInfo.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   └── Projects.jsx
│   │
│   ├── preview/
│   │   └── ResumePreview.jsx
│   │
│   └── ATSChecker.jsx
│
├── pages/
│   └── Builder.jsx
│
├── services/
│   └── geminiService.js
│
├── utils/
│   └── pdfParser.js
│
└── App.jsx
```

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/AI-Resume-Builder.git
cd AI-Resume-Builder
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key
```

### Start Development Server

```bash
npm run dev
```

## 🔑 Getting a Gemini API Key

1. Visit https://aistudio.google.com/app/apikey
2. Create a new API key
3. Add it to your `.env` file


## 🎯 Future Improvements

- More Resume Templates
- AI Resume Summary Generator
- ATS Score Breakdown
- Resume Keyword Highlighting
- Resume Import Feature
- Authentication
- Cloud Resume Storage
- Job Description Matching
- Resume Sharing Links


## 👨‍💻 Author

**Kashif**

Built as a portfolio project to demonstrate:
- React Development
- State Management
- API Integration
- AI-Powered Features
- PDF Processing
- Modern UI Development
