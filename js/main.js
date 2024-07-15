// main.js
import { Score } from "./score.js";
import { Quiz } from "./quiz.js";

let questions = [
  // // {
  // //   question: "What is the capital of France?",
  // //   answers: [
  // //     { answerText: "Paris", correct: true },
  // //     { answerText: "London", correct: false },
  // //     { answerText: "Berlin", correct: false },
  // //     { answerText: "Madrid", correct: false },
  // //   ],
  // // },
  // // {
  // //   question: "Who wrote 'Harry Potter' series?",
  // //   answers: [
  // //     { answerText: "J.K. Rowling", correct: true },
  // //     { answerText: "Stephen King", correct: false },
  // //     { answerText: "George R.R. Martin", correct: false },
  // //     { answerText: "J.R.R. Tolkien", correct: false },
  // //   ],
  // // },
  // // {
  // //   question: "What is the chemical symbol for water?",
  // //   answers: [
  // //     { answerText: "H2O", correct: true },
  // //     { answerText: "CO2", correct: false },
  // //     { answerText: "NaCl", correct: false },
  // //     { answerText: "O2", correct: false },
  // //   ],
  // // },
  // {
  //   question: "What is the powerhouse of the cell?",
  //   answers: [
  //     { answerText: "Nucleus", correct: false },
  //     { answerText: "Mitochondria", correct: true },
  //     { answerText: "Ribosome", correct: false },
  //     { answerText: "Endoplasmic Reticulum", correct: false },
  //   ],
  // },
  // {
  //   question: "What planet is known as the Red Planet?",
  //   answers: [
  //     { answerText: "Mars", correct: true },
  //     { answerText: "Jupiter", correct: false },
  //     { answerText: "Saturn", correct: false },
  //     { answerText: "Venus", correct: false },
  //   ],
  // // },
  // {
  //   question: "What is the largest organ in the human body?",
  //   answers: [
  //     { answerText: "Heart", correct: false },
  //     { answerText: "Liver", correct: false },
  //     { answerText: "Skin", correct: true },
  //     { answerText: "Lungs", correct: false },
  //   ],
  // },
  // {
  //   question: "Which gas do plants absorb from the atmosphere?",
  //   answers: [
  //     { answerText: "Oxygen", correct: false },
  //     { answerText: "Carbon Dioxide", correct: true },
  //     { answerText: "Nitrogen", correct: false },
  //     { answerText: "Hydrogen", correct: false },
  //   ],
  // },
  // {
  //   question: "What is the boiling point of water?",
  //   answers: [
  //     { answerText: "100 degrees Celsius", correct: true },
  //     { answerText: "90 degrees Celsius", correct: false },
  //     { answerText: "120 degrees Celsius", correct: false },
  //     { answerText: "80 degrees Celsius", correct: false },
  //   ],
  // },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: [
      { answerText: "Gold", correct: false },
      { answerText: "Oxygen", correct: true },
      { answerText: "Silver", correct: false },
      { answerText: "Helium", correct: false },
    ],
  },
  {
    question: "What is the main gas found in the Earth's atmosphere?",
    answers: [
      { answerText: "Oxygen", correct: false },
      { answerText: "Nitrogen", correct: true },
      { answerText: "Carbon Dioxide", correct: false },
      { answerText: "Hydrogen", correct: false },
    ],
  },
  {
    question: "What type of bond involves the sharing of electron pairs?",
    answers: [
      { answerText: "Ionic bond", correct: false },
      { answerText: "Covalent bond", correct: true },
      { answerText: "Hydrogen bond", correct: false },
      { answerText: "Metallic bond", correct: false },
    ],
  },
  {
    question: "Which planet is known for its rings?",
    answers: [
      { answerText: "Mars", correct: false },
      { answerText: "Saturn", correct: true },
      { answerText: "Neptune", correct: false },
      { answerText: "Earth", correct: false },
    ],
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answers: [
      { answerText: "Gold", correct: false },
      { answerText: "Diamond", correct: true },
      { answerText: "Iron", correct: false },
      { answerText: "Quartz", correct: false },
    ],
  },
  {
    question: "What is the primary component of the sun?",
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
