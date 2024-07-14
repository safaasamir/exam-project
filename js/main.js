// main.js
import { Score } from "./score.js";
import { Quiz } from "./quiz.js";

let questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { answerText: "Paris", correct: true },
      { answerText: "London", correct: false },
      { answerText: "Berlin", correct: false },
      { answerText: "Madrid", correct: false },
    ],
  },
  {
    question: "Who wrote 'Harry Potter' series?",
    answers: [
      { answerText: "J.K. Rowling", correct: true },
      { answerText: "Stephen King", correct: false },
      { answerText: "George R.R. Martin", correct: false },
      { answerText: "J.R.R. Tolkien", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for water?",
    answers: [
      { answerText: "H2O", correct: true },
      { answerText: "CO2", correct: false },
      { answerText: "NaCl", correct: false },
      { answerText: "O2", correct: false },
    ],
  },
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

document.addEventListener("DOMContentLoaded", (event) => {
  let shuffledQuestions = shuffleArray(questions);
  let quiz = new Quiz(shuffledQuestions);
});
window.addEventListener("beforeunload", (e) => {
  e.returnValue = "Changes you made may not be saved";
});
