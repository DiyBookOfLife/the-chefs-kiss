# 🍳 The Chef’s Kiss 💋  
**AI-Powered Recipe Generator**

> Generate recipes using the ingredients you already have — powered by intelligent AI.

---

## 🌟 Overview
**The Chef’s Kiss** is a smart web app built with **React** that helps users create personalized recipes based on ingredients they already have.  
Simply enter your ingredients, click **“Get Recipe”**, and let AI whip up a dish idea on the spot.

This project highlights practical front-end engineering skills — including React state management, API integration, accessibility, and responsive design.

---

## 🧠 Features
- Add and manage a list of ingredients  
- Generate recipe ideas using AI (Meta-Llama-3-8B-Instruct via Hugging Face)  
- Clean, responsive UI with Flexbox + media queries  
- Accessible structure with ARIA live regions  
- Modular React component structure  
- Optimized keyboard focus states   

---

## 🧩 Tech Stack
| Layer | Technologies |
|--------|---------------|
| **Frontend** | React (Vite), JSX, CSS3 |
| **AI Integration** | Hugging Face Inference API  (`getRecipeFromHuggingFace()` function) |
| **Accessibility (a11y)** | Semantic HTML, ARIA live regions, labeled form inputs |
| **Tooling** | Vite, npm, VS Code, Git & GitHub |

---

## 📁 Project Structure
```plaintext
src/
│
├── components/
│   ├── AboutChefsKiss.jsx
│   ├── Body.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── IngredientsList.jsx
│   └── RecipeResponse.jsx
│
├── ai.js
├── App.jsx
├── main.jsx
└── App.css
```
## 🧪 How It Works
1. User enters a minimum of 4 or more ingredients in the input field.  
2. Ingredients are stored in React state using the `useState` hook.  
3. When “Get Recipe” is clicked, the app sends those ingredients to the **Hugging Face Inference API** (Mistral model).  
4. The API returns a generated recipe suggestion, which is displayed using **ReactMarkdown** for formatting.  
5. The interface updates dynamically and remains accessible for screen readers.

## 🧭 Accessibility (a11y) Features
- Semantic structure: `<header>`, `<main>`, `<footer>`, and `<section>`  
- Proper heading hierarchy (`h1`, `h2`) for screen reader navigation  
- `aria-live="polite"` for dynamic recipe updates  
- Labeled form input with descriptive placeholder  
- Custom visible focus outlines for keyboard navigation  

## 🚀 Future Improvements
- 🔄 Add loading state and error handling for API requests  
- 📝 Allow users to save or share generated recipes  
- 🎨 Add light/dark theme toggle  
- 📱 Enhance responsive layout for small screens  
- 🤖 Experiment with multiple AI models for recipe variety  

## 🧰 Quick Start
```bash
git clone https://github.com/DiyBookOfLife/the-chefs-kiss.git
cd the-chefs-kiss
npm install
npm run dev
```

## 🧾 Credits
- AI generation powered by **Hugging Face Inference API** — Meta-Llama-3-8B-Instruct  
- Built with **React + Vite**  
- Designed and developed by **Toni Thomas**








