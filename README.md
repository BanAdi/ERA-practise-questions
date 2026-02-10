# Exam Flashcards (Simple Static Site)

A lightweight website for practicing prefilled exam questions by topic.

## Features
- Choose a topic from a dropdown
- Practice questions one by one
- Reveal answer on click
- Move to next question
- Shuffle question order

## Edit Your Questions
Question data is split by topic in the `questions/` folder:
- `questions/mcq.js`
- `questions/free-text.js`
- `questions/risc-v.js`
- `questions/stack.js`
- `questions/truth-tables.js`
- `questions/logic-gates.js`
- `questions/graphs.js`
- `questions/circuit-designs.js`
- `questions/pipelines.js`

Each file registers one topic and its question list.

## Run Locally
1. Open `index.html` directly in your browser.
2. Or serve with a local server:
   - `python3 -m http.server 8080`
   - open `http://localhost:8080`

## Push to GitHub
```bash
git init
git add .
git commit -m "Initial flashcard site"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

## Deploy to GitHub Pages
1. Push this project to a GitHub repo.
2. In GitHub: `Settings -> Pages`.
3. Under `Build and deployment`, choose:
   - Source: `Deploy from a branch`
   - Branch: `main` and folder `/ (root)`
4. Save and wait for the Pages URL.
