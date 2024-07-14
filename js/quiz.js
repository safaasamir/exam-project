
import { Score } from './score.js';

export class Quiz {
  constructor(questions) {
    this.questions = questions;
    this.currentQuestionIndex = 0;
    this.markedQuestions = new Set();
    this.answers = Array(this.questions.length).fill(null);
    this.examContainer = document.getElementById("examContainer");
    this.questionTextElement = document.getElementById("questionText");
    this.answersContainer = document.getElementById("answersContainer");
    this.nextBtn = document.getElementById("nextBtn");
    this.prevBtn = document.getElementById("prevBtn");
    this.markBtn = document.getElementById("markBtn");
    this.submitBtn = document.getElementById("submitBtn");
    this.markDiv = document.querySelector(".mark_div");
    this.allQuestionsShown = false;
    this.score = 0;

    this.nextBtn.addEventListener("click", () => this.nextQuestion());
    this.prevBtn.addEventListener("click", () => this.prevQuestion());
    this.markBtn.addEventListener("click", () => this.toggleMarkQuestion());
    this.submitBtn.addEventListener("click", () => this.submitQuiz());

    this.startTimer(1); // 60 minutes
    this.loadQuestion();
    this.checkButtonVisibility();
  }

  // startTimer(minutes) {
  //   var elem = document.getElementById("myBar");
  //   var totalTime = minutes * 60; // convert minutes to seconds
  //   var intervalTime = 1000; // 1 second
  //   var i = 0;

  //   (function () {
  //     if (i === 0) {
  //       i = 1;
  //       var id = setInterval(frame, intervalTime);
  //       var startTime = new Date().getTime();

  //       function frame() {
  //         var currentTime = new Date().getTime();
  //         var elapsedTime = (currentTime - startTime) / 1000; // convert to seconds

  //         var progress = (elapsedTime / totalTime) * 100;
          
  //         if (progress >= 100) {
  //           clearInterval(id);
  //           i = 0;
  //           this.showScore();
  //          window.location.replace("../html/time_end.html")
  //         } else {
  //           elem.style.width = progress + "%";
  //         }
  //       }
  //     }
  //   })();
  //   return minutes
  // }
  startTimer(minutes) {
    const elem = document.getElementById("myBar");
    const totalTime = minutes * 60; // convert minutes to seconds
    const intervalTime = 1000; // 1 second
    let startTime = new Date().getTime();

    const frame = () => {
      const currentTime = new Date().getTime();
      const elapsedTime = (currentTime - startTime) / 1000; // convert to seconds
      const progress = (elapsedTime / totalTime) * 100;

      if (progress >= 100) {
        this.showScore()
        clearInterval(id);
         
        window.location.replace("../html/time_end.html");
      } else {
        elem.style.width = progress + "%";
      }
    };

    const id = setInterval(frame, intervalTime);
  }

  loadQuestion() {
    
    
    
    let currentQuestion = this.questions[this.currentQuestionIndex];
    this.questionTextElement.textContent = currentQuestion.question;
    this.answersContainer.innerHTML = "";

    currentQuestion.answers.forEach((answer, index) => {
      let answerLabel = document.createElement("label");
      answerLabel.classList.add("answer-label");

      let answerInput = document.createElement("input");
      answerInput.setAttribute("type", "radio");
      answerInput.setAttribute("name", "answer");
      answerInput.setAttribute("value", index);
      answerLabel.setAttribute("class","question-ans")
      answerInput.setAttribute("class","ans-input");

      if (this.answers[this.currentQuestionIndex] === index) {
        answerInput.checked = true;
      }

      let answerText = document.createTextNode(answer.answerText);

      answerLabel.appendChild(answerInput);
      answerLabel.appendChild(answerText);
      this.answersContainer.appendChild(answerLabel);
      answerInput.addEventListener("change", () => {
        this.answers[this.currentQuestionIndex] = index;
      });
    });

    this.updateMarkButton();
   
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.loadQuestion();
      this.checkButtonVisibility();
    }
  }

  prevQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.loadQuestion();
      this.checkButtonVisibility();
    }
  }

  toggleMarkQuestion() {
    if (this.markedQuestions.has(this.currentQuestionIndex)) {
      this.markedQuestions.delete(this.currentQuestionIndex);
    } else {
      this.markedQuestions.add(this.currentQuestionIndex);
    }
    this.updateMarkButton();
    this.updateMarkedQuestions();
  }

  updateMarkButton() {
    if (this.markedQuestions.has(this.currentQuestionIndex)) {
      this.markBtn.textContent = "Unmark";
    } else {
      this.markBtn.textContent = "Mark";
    }
  }

  updateMarkedQuestions() {
    this.markDiv.innerHTML = "<h2>Marked Questions</h2>";
    this.markedQuestions.forEach((questionIndex) => {
      let questionElement = document.createElement("div");
      questionElement.textContent = this.questions[questionIndex].question;
      questionElement.classList.add('marked-question');
      questionElement.addEventListener("click", () => {
        this.currentQuestionIndex = questionIndex;
        this.loadQuestion();
        this.checkButtonVisibility();
      });
      this.markDiv.appendChild(questionElement);
    });
  }

  checkButtonVisibility() {
    this.prevBtn.style.display = this.currentQuestionIndex === 0 ? "none" : "inline";
    this.nextBtn.style.display = this.currentQuestionIndex === this.questions.length - 1 ? "none" : "inline";
    this.submitBtn.style.display = this.currentQuestionIndex === this.questions.length - 1 ? "inline" : "none";
  }

  submitQuiz() {
    if (this.answers.every(answer => answer !== null)) {
      this.showScore();
      
      window.location.replace("../html/result.html");
    } else {
      alert("Please answer all questions before submitting.");
    }
  }

  showScore() {

    let fname = localStorage.getItem("fname") || "";
    let lname = localStorage.getItem("lname") || "";
    let overallScore=this.questions.length;
  
    let score = this.questions.reduce((acc, question, index) => {
      if (this.answers[index] !== null) {
        let selectedAnswer = question.answers[this.answers[index]];
        if (selectedAnswer) {
          return acc + (selectedAnswer.correct ? 1 : 0);
        }
      }
      return acc;
    }, 0);

    const newScore = new Score(fname, lname,overallScore, score);
    localStorage.setItem("userScore", JSON.stringify(newScore));
  }
}

