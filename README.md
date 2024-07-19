# JavaScript Quiz

## Description

JavaScript Quiz is a web application that allows users to take quizzes about JavaScript. The application offers both dark and light modes and displays the results at the end of the quiz.

## Project Structure 

- `src/`
  - `components/` 
    - `Game.tsx` 
    - `Question.tsx` 
    - `Footer.tsx` 
    - `Results.tsx` 
    - `Start.tsx` 
    - `JavaScriptLogo.tsx`
  - `hooks/` 
    - `useQuestionData.ts`
  - `store/` 
    - `questions.ts` 
  - `theme/` 
    - `theme.ts` 
  - `App.tsx` 
  - `main.tsx`

## Features 

- Dark and light mode
- Automatic question change after selecting an answer
- Calculation of the accuracy percentage
- Quiz reset functionality
- Animations with Framer Motion

## Technologies Used 
- React
- Vite
- TypeScript
- Material-UI
- Zustand (for state management)
- Framer Motion (for animations)
- react-syntax-highlighter (for code formatting)

## Installation 

1. Clone the repository:
    ```bash
    git clone https://github.com/ivanespinola/javascript-quiz.git
    ```

2. Navigate to the project directory:
    ```bash
    cd javascript-quiz
    ```

3. Install the dependencies:
    ```
    npm install
    ```

4. Start the application:
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:5173`.

## Usage 

1. Open the application in your browser.
2. Select an answer for each question. The application will automatically move to the next question.
3. Once all questions are answered, the results will be displayed.
4. You can reset the quiz by clicking the "Reset Quiz" button.

## Live Demo

Check out the live demo of the project [here](https://javascript-quiz-one.vercel.app/).

## License 

This project is licensed under the MIT License. 
