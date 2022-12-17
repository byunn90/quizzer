// Button ID
var btnOne = document.getElementById("btn-1");
var btnTwo = document.getElementById("btn-2");
var btnThree = document.getElementById("btn-3");
var btnFour = document.getElementById("btn-4");
//
var allButtons = document.getElementById("btn-1");
var buttonStart = document.querySelector(".start-btn");
var myButtonOptions = document.querySelectorAll(".btn");
var questionContainer = document.getElementById("question-container");
var questionQuestions = document.getElementById("questions");
var myQuestionsIndex = 0;
var myQuestionsOptions = 0;
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
    correctAnswer: "Cascading Style Sheet",
  },

  {
    // Question 2
    question: "What is a for loop?",
    answers: [
      "for loop is a control flow statement for specifying iteration. Specifically, a for loop functions by running a section of code repeatedly until a certain condition has been satisfied.",
      "Objects",
      "A car has a model name, a colour, a year in which it was manufactured, an engine size and so on",
      "A car with different",
    ],
    correctAnswer: "Cascading Style Sheet",
  },
];

function startGame() {
  console.log("hi");
  buttonStart.classList.add("hide");
  questionContainer.classList.remove("hide");
  myQuestionsAndOptions();
}

function myQuestionsAndOptions() {
  var currentQueston = questionsData[myQuestionsOptions];
  for (let i = 0; i < btnCycle.length; i++) {
    var questions = btnCycle[i];

    questions.textContent = questionsData[myQuestionsIndex].answers[i];
    currentQueston.textContent = questionsData[myQuestionsAndOptions].question;
  }
  console.log("Hi");
}
function QuestionSelection() {
  // console.log("hi");

  myQuestionsIndex++;
  myQuestionsAndOptions();
}

buttonStart.addEventListener("click", startGame);
allButtons.addEventListener("click", QuestionSelection);
