# ⚡ Sharath Kumar A | Full Stack Developer Portfolio

![Project Banner](https://img.shields.io/badge/Portfolio-V2.0-00F0FF?style=for-the-badge&logo=react&logoColor=white)

> An immersive, high-performance developer portfolio built with **Next.js 15** and **Three.js**. Featuring a reactive 3D environment, AI-powered interactions, and a polished user experience.

---

## 🛠️ Tech Stack

### Core
![Next.js](https://img.shields.io/badge/Next.js_15-black?style=flat-square&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232a?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)

### Styling & UI
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=flat-square&logo=radix-ui&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)

### 3D & Graphics
![Three.js](https://img.shields.io/badge/Three.js-black?style=flat-square&logo=three.js&logoColor=white)
![React Three Fiber](https://img.shields.io/badge/R3F-black?style=flat-square&logo=three.js&logoColor=white)

### Backend & AI
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)
![Google Gemini](https://img.shields.io/badge/Google_GenKit-4285F4?style=flat-square&logo=google&logoColor=white)

---

## ✨ Key Features

### 🌌 **Immersive 3D Experience**
- **Reactive Background**: A stunning starfield and floating geometry system built with `three.js` and `@react-three/drei`.
- **Parallax Depth**: Elements move and rotate based on mouse position and scroll depth.
- **Dynamic Shake**: The 3D world subtly vibrates in response to rapid cursor movements, simulating physical presence.

### 🖱️ **Next-Gen Interaction**
- **Custom Cursor System**: A fully custom-built cursor engine.
    - **Magnetic Snap**: Cursor "sticks" to interactive elements like buttons.
    - **Context Aware**: Changes shape and color based on content (Text, Code, Inputs).
    - **Matrix Rain**: Idle detection triggers a "Matrix" binary rain effect from the cursor.
    - **Trail System**: Particle system trail that follows your movement.

### 🤖 **AI Integration**
- **Smart Chatbot**: Powered by **Google Genkit**, the integrated chat widget can answer questions about my skills, experience, and projects in real-time.

### 🎨 **Modern Design**
- **Dark Mode First**: Sleek, professional dark aesthetic with neon accents (Cyan/Purple).
- **Responsive**: Fully optimized mobile and tablet experience.
- **Glassmorphism**: Premium glass effects using `backdrop-filter` and modern CSS.

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites
- **Node.js** (v18+ recommended)
- **npm** or **yarn**

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/portfolio-studio.git
    cd portfolio-studio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up Environment Variables**
    Create a `.env.local` file in the root directory and add your keys (Firebase, Google AI, etc.):
    ```env
    NEXT_PUBLIC_FIREBASE_API_KEY=...
    GOOGLE_GENAI_API_KEY=...
    ```

4.  **Run the development server**
    ```bash
    npm run dev
    ```

5.  **Open the app**
    Visit `http://localhost:3000` (or the port specified in your console).

---

## 📂 Project Structure

```bash
src/
├── ai/                 # Genkit AI configurations and prompts
├── app/                # Next.js App Router pages and layouts
│   ├── cursor.css      # Custom cursor styles and animations
│   ├── globals.css     # Global Tailwind styles
│   └── layout.tsx      # Root layout with Cursor & 3D Scene
├── components/
│   ├── 3d/             # Three.js components (Scene, Background)
│   ├── chat/           # AI Chatbot components
│   ├── sections/       # Landing page sections (Hero, About, etc.)
│   └── ui/             # Reusable UI components (Cursor, Buttons, etc.)
└── lib/                # Utility functions and configurations
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <p>Designed & Developed with ❤️ by <strong>Sharath Kumar A</strong></p>
  <p>
    <a href="https://github.com/sharathkumar3113">GitHub</a> • 
    <a href="https://linkedin.com/in/sharath-kumar-a">LinkedIn</a> • 
    <a href="mailto:sharathkumar3113@gmail.com">Email</a>
  </p>
</div>
