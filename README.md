# AI Job Preparation Platform

An AI-powered job preparation platform built with the MERN stack and Google Gemini. The goal is to help job seekers prepare for interviews, analyze their resumes, identify skill gaps, and improve their job readiness.

> **Project status:** Under development

## Features

### Planned features
- User registration and login with JWT authentication
- Secure user profiles
- AI-powered resume analysis
- Skill-gap detection based on job requirements
- AI-generated interview questions
- ATS-friendly resume generation
- Downloadable PDF resumes

## Tech Stack

### Frontend
- React
- JavaScript
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT authentication

### Generative AI
- Google Gemini API

### PDF Generation
- Puppeteer

> Technologies and features will be integrated as development progresses.

## Project Structure

```text
mern AI/
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   └── server.js
│   ├── package.json
│   └── package-lock.json
├── README.md
└── .gitignore
```

The project structure will expand as the frontend and backend features are implemented.

## Getting Started

### Prerequisites
- Node.js and npm
- MongoDB (local or Atlas)
- Google Gemini API key (when AI integration is implemented)
- Git

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/ai-job-preparation.git
cd ai-job-preparation
```

Replace `YOUR_USERNAME` with your GitHub username.

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Configure environment variables

Create a `.env` file inside the `backend` directory when the corresponding integrations are implemented.

Example variables:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
GEMINI_API_KEY=your_gemini_api_key
```

Never commit your real API keys, passwords, or secrets to GitHub.

### 4. Run the backend

```bash
npm run dev
```

The backend entry point is `backend/src/server.js`.

## Development Roadmap

- [x] Initial backend project setup
- [ ] Express application configuration
- [ ] MongoDB connection
- [ ] User authentication
- [ ] React frontend setup
- [ ] User dashboard
- [ ] Gemini AI integration
- [ ] Resume analysis
- [ ] Skill-gap detection
- [ ] Interview question generation
- [ ] ATS-friendly resume generation
- [ ] PDF export
- [ ] Testing and deployment

## Environment Variables

Keep all secrets in your local `.env` file. Use a `.env.example` file with placeholder values to document the required configuration.

## Contributing

This is a personal learning and portfolio project. Suggestions and feedback are welcome.

## Author

Omkar Singh

## License

This project is currently developed for learning and portfolio purposes. A license may be added later.
