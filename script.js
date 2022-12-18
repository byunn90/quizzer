// All my Button ID's
var btnOne = document.getElementById("btn-1");
var btnTwo = document.getElementById("btn-2");
var btnThree = document.getElementById("btn-3");
var btnFour = document.getElementById("btn-4");
//
// My time
var myTimer = document.getElementById("time");
//

var allButtons = document.getElementById("btn-1");
var buttonStart = document.querySelector(".start-btn");
var myButtonOptions = document.querySelectorAll(".btn");
var questionContainer = document.getElementById("question-container");
var questionQuestions = document.getElementById("question-title");
var myQuestionsIndex = -1;
var myQuestionsOptions = -1;
var time = 30;
var score = 0;
var btnCycle = [btnOne, btnTwo, btnThree, btnFour];

var questionsData = [
  {
    // Question 1
    question: "What does CSS Stand For?",
    answers: [
      "Color style sheet",
      "Cascading Style Sheet",
      " Tim Berners-Lee",
      "Håkon Wium Lie ",
    ],
    correctAnswer: "Cascading Style Sheet",
  },
  {
    // Question 2
    question: "what is object oriented programming?",
    answers: [
      "Methods",
      "Objects",
      "A car has a model name, a colour, a year in which it was manufactured, an engine size and so on",
      "A car with different",
    ],
    correctAnswer: "Objects",
  },
  {
    // Question 3
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      "<scripting></scripting>",
      "<javaScript></javaScript>",
      "<script>",
      "<javascript> ",
    ],
    correctAnswer: "<script>",
  },

  {
    // Question 4
    question: "What is a For Loop",
    answers: [
      "for loop is a control flow statement for specifying iteration. Specifically, a for loop functions by running a section of code repeatedly until a certain condition has been satisfied.",
      "Objects",
      "A car has a model name, a colour, a year in which it was manufactured, an engine size and so on",
      "A car with different",
    ],
    correctAnswer:
      "for loop is a control flow statement for specifying iteration. Specifically, a for loop functions by running a section of code repeatedly until a certain condition has been satisfied.",
  },
];

function startTimer() {
  time--;
  myTimer.textContent = time;

  if (time <= 0) {
    clearInterval(myInterval);
    myTimer.textContent = "You failed";
    time = 30;
  }
}
// const myInterval = setInterval(startTimer, 1000);
const myInterval = setInterval(startTimer);
function startGame() {
  buttonStart.classList.add("hide");
  questionContainer.classList.remove("hide");
  startTimer();
  time = 30;
  // myQuestionsAndOptions();
}

function answer() {
  myButtonOptions.forEach((button) => {
    button.addEventListener("click", (e) => {
      myQuestionsOptions++;
      myQuestionsIndex++;
      for (let i = 0; i < questionsData.length; i++) {
        // questions.textContent = questionsData[myQuestionsOptions].answers[i];
        if (e.target.textContent === questionsData[i].correctAnswer) {
          console.log("Correct");
          score += 2;
          time += 2;
        } else {
          console.log("Wrong");
          return;
          // myQuestionsOptions++;
          // myQuestionsIndex++;
          // increament time + 10
          // score + 10
          // when wrong decreament time and score
        }
      }
    });
  });
}

function myQuestionsAndOptions() {
  for (let i = 0; i < btnCycle.length; i++) {
    var questions = btnCycle[i];

    questions.textContent = questionsData[myQuestionsOptions].answers[i];
  }
}

function nextQuestion() {
  questionQuestions.textContent = questionsData[myQuestionsIndex].question;
}
answer();
function QuestionSelection() {
  // ⬇ Options Answers
  if (myQuestionsOptions > 3) {
    myQuestionsOptions = -1;
    myQuestionsIndex = -1;
    questionContainer.classList.add("hide");
    buttonStart.classList.remove("hide");
    myQuestionsAndOptions();
  }

  nextQuestion();
  myQuestionsAndOptions();
}

buttonStart.addEventListener("click", startGame);

myButtonOptions.forEach((button) =>
  button.addEventListener("click", QuestionSelection)
);

// myButtonOptions.addEventListener("click", QuestionSelection);

// this.myButtonOptions.forEach(function (item) {
//   item.addEventListener("click", QuestionSelection);
// });
