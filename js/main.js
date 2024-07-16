// main.js
import { Score } from "./score.js";
import { Quiz } from "./quiz.js";

let questions = [
  {
    question: "1- Which element has the chemical symbol 'O'?",
    answers: [
      { answerText: "Gold", correct: false },
      { answerText: "Oxygen", correct: true },
      { answerText: "Silver", correct: false },
      { answerText: "Helium", correct: false },
    ],
  },
  {
    question: "2- What is the main gas found in the Earth's atmosphere?",
    answers: [
      { answerText: "Oxygen", correct: false },
      { answerText: "Nitrogen", correct: true },
      { answerText: "Carbon Dioxide", correct: false },
      { answerText: "Hydrogen", correct: false },
    ],
  },
  {
    question: "3- What type of bond involves the sharing of electron pairs?",
    answers: [
      { answerText: "Ionic bond", correct: false },
      { answerText: "Covalent bond", correct: true },
      { answerText: "Hydrogen bond", correct: false },
      { answerText: "Metallic bond", correct: false },
    ],
  },
  {
    question: "4- Which planet is known for its rings?",
    answers: [
      { answerText: "Mars", correct: false },
      { answerText: "Saturn", correct: true },
      { answerText: "Neptune", correct: false },
      { answerText: "Earth", correct: false },
    ],
  },
  {
    question: "5- What is the hardest natural substance on Earth?",
    answers: [
      { answerText: "Gold", correct: false },
      { answerText: "Diamond", correct: true },
      { answerText: "Iron", correct: false },
      { answerText: "Quartz", correct: false },
    ],
  },
  {
    question: "6- What is the primary component of the sun?",
    answers: [
      { answerText: "Oxygen", correct: false },
      { answerText: "Hydrogen", correct: true },
      { answerText: "Carbon", correct: false },
      { answerText: "Helium", correct: false },
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
// window.addEventListener("beforeunload", (e) => {
//   e.returnValue = "Changes you made may not be saved";
// });
window.onbeforeunload = function (e) {
  e = e || window.event;
  if (e) {
    e.returnValue = "Your Answers is not submited and will be lost";
  }
  return "Your Answers is not submited and will be lost";
};
