# AI-Powered Resume ATS Analyzer

A full-stack application that helps job seekers optimize their resumes for Applicant Tracking Systems (ATS) using AI-powered analysis and keyword matching.

## The Problem

Picture this — you've just graduated. Your resume lists 3 projects, 2 internships, and skills in React, Python, and SQL. You apply to 100 jobs. Silence. Meanwhile, your classmate with fewer projects gets 5 interview calls.

**What went wrong?**
A great resume ≠ A resume that gets read.

Most job seekers don't realize that a growing number of companies now use an **Applicant Tracking System (ATS)** — software that automatically scans, filters, and ranks resumes before a recruiter ever looks at them. If your resume doesn't have the right keywords in the right format, it gets filtered out — no matter how strong your profile is. Over 90% of Fortune 500 companies use ATS to screen resumes.

### Traditional Solutions and Their Limitations

| Approach | Limitation |
| :--- | :--- |
| Manually tailoring each resume | Extremely time-consuming for every application |
| Using generic resume templates | May not match specific job keywords |
| Asking friends to review | They don't know how ATS algorithms work |
| Paid resume review services | Expensive and slow turnaround |

## The Solution: AI-Powered ATS Analyzer

A smart tool available 24/7 that:
- Parses your resume automatically
- Compares it against job descriptions
- Gives an ATS compatibility score
- Suggests specific improvements using AI

## Real World ATS Analyzer Platforms

- [Jobscan](https://www.jobscan.co)
- [Resume Worded](https://resumeworded.com)
- [SkillSyncer](https://skillsyncer.com)
- [Kickresume](https://www.kickresume.com)

## What We Will Build

In this session, we'll build a full-stack application that:
- Lets users register and securely log in
- Uploads PDF resumes and extracts text
- Analyzes resumes using ATS keyword scoring and AI-powered suggestions from Gemini

## Architecture Overview

The application follows a modern full-stack architecture:

```text
Frontend (React + Vite)              Backend (Express + MongoDB)
┌─────────────────────┐              ┌─────────────────────────┐
│ Register Form       │──POST──────→ │ /auth/register          │
│ Login Form          │──POST──────→ │ /auth/login → JWT       │
│ Upload Resume       │──POST+File─→ │ /resume/upload → Parse  │
│ View Analysis       │──POST+JSON─→ │ /resume/analyze → AI    │
└─────────────────────┘              └─────────────────────────┘
                                              │
                                     ┌────────┴────────┐
                                     │ MongoDB Atlas    │
                                     │ (Users, Resumes) │
                                     └────────┬────────┘
                                              │
                                     ┌────────┴────────┐
                                     │ Gemini AI API   │
                                     │ (Analysis)      │
                                     └─────────────────┘
```

## Features

- **User Authentication**: Secure registration and login using JWT tokens.
- **PDF Resume Parsing**: Extracts text from uploaded PDF files using `pdfjs-dist`.
- **ATS Score Calculation**: Compares resume keywords against job description keywords to provide a compatibility score.
- **AI-Powered Analysis**: Uses Google Gemini AI to provide detailed suggestions, identify missing skills, and suggest bullet point improvements.
- **Protected Routes**: Ensures only authenticated users can upload and analyze resumes.
- **Analysis History**: (If implemented) View past resume analyses.

## Technologies Used

- **Frontend**: React, Vite, CSS (Vanilla)
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **AI**: Google Gemini API
- **Authentication**: JSON Web Tokens (JWT)
- **File Handling**: Multer (for uploads), pdfjs-dist (for parsing)

## Prerequisites

- Node.js installed on your machine.
- A MongoDB Atlas account and a connection URI.
- A Google Gemini API Key.

## Project Structure

```text
project/
├── server/    # Backend application code (Node.js/Express)
└── client/    # Frontend application code (React/Vite)
```

## Setup Instructions

### Backend Setup

1. Navigate to the `server` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `server` directory and add your credentials:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_uri
   JWT_SECRET=your_jwt_secret
   GEMINI_API_KEY=your_google_gemini_api_key
   ```
4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the `client` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend application:
   ```bash
   npm run dev
   ```

## Deployment

The project is structured to be deployed as two separate services on Vercel: a Frontend (client) and a Backend (server).

### 1. Backend Deployment (Vercel)

1. Go to the [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **Add New** > **Project** and import your repository.
3. In the project settings, set the **Root Directory** to `server`.
4. Configure **Environment Variables**:
   - `MONGODB_URI`: Your MongoDB Atlas connection string.
   - `JWT_SECRET`: A secure random string for JWT.
   - `GEMINI_API_KEY`: Your Google Gemini API key.
   - `CLIENT_URL`: The URL of your deployed frontend (e.g., `https://your-app.vercel.app`).
5. Click **Deploy**.

### 2. Frontend Deployment (Vercel)

1. Go back to the Vercel Dashboard.
2. Click **Add New** > **Project** and import the same repository again.
3. In the project settings, set the **Root Directory** to `client`.
4. Configure **Environment Variables**:
   - `VITE_API_BASE_URL`: The URL of your deployed backend (e.g., `https://your-api.vercel.app`).
5. Click **Deploy**.

> [!TIP]
> Make sure to update the `CLIENT_URL` in your backend environment variables once your frontend is deployed to allow CORS.

## How It Works

1. **Register/Login**: Create an account to access the analyzer.
2. **Input Job Description**: Paste the target job description into the provided field.
3. **Upload Resume**: Select your resume in PDF format.
4. **Analyze**: The system extracts text, calculates a keyword-based ATS score, and queries Gemini AI for a comprehensive report.
5. **Review Report**: See your compatibility score, skills analysis, and actionable AI suggestions.
