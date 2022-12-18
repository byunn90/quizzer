// All my Button ID's
var btnOne = document.getElementById("btn-1");
var btnTwo = document.getElementById("btn-2");
var btnThree = document.getElementById("btn-3");
var btnFour = document.getElementById("btn-4");
//
// var allME = myButtonOptions.classList.add(".btn");
// console.log(allME);
// My time
var myTimer = document.getElementById("time");
//

var allButtons = document.getElementById("btn-1");
var buttonStart = document.querySelector(".start-btn");
var myButtonOptions = document.querySelectorAll(".btn");
var questionContainer = document.getElementById("question-container");
var questionQuestions = document.getElementById("question-title");
var myQuestionsIndex = 0;
var myQuestionsOptions = 0;
var time = 0;
var btnCycle = [btnOne, btnTwo, btnThree, btnFour];
console.log(myButtonOptions);
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
  },
  {
    correctAnswer: "Cascading Style Sheet",
    // Question 3
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      "<scripting></scripting>",
      "<javaScript></javaScript>",
      "<script>",
      "<javascript> ",
    ],
    correctAnswer: "Cascading Style Sheet",
  },

  {
    // Question 4
    question: "What im i?",
    answers: [
      "for loop is a control flow statement for specifying iteration. Specifically, a for loop functions by running a section of code repeatedly until a certain condition has been satisfied.",
      "Objects",
      "A car has a model name, a colour, a year in which it was manufactured, an engine size and so on",
      "A car with different",
    ],
    correctAnswer: "Cascading Style Sheet",
  },
];

function startTimer() {
  time++;
  myTimer.textContent = time;
}
setInterval(startTimer, 1000);

function startGame() {
  console.log("hi");
  buttonStart.classList.add("hide");
  questionContainer.classList.remove("hide");
  startTimer();
  myQuestionsAndOptions();
}

function myQuestionsAndOptions() {
  for (let i = 0; i < btnCycle.length; i++) {
    var questions = btnCycle[i];

    questions.textContent = questionsData[myQuestionsOptions].answers[i];
  }
}
function nextQuestion() {
  // ⬇ questions title

  questionQuestions.textContent = questionsData[myQuestionsIndex].question;
  // if (myQuestionsIndex >= 3) {
  //   questionContainer.classList.add("hide");
  // }
}

function QuestionSelection() {
  // ⬇ Options Answers
  myQuestionsIndex++;
  myQuestionsOptions++;
  if (myQuestionsOptions > 3) {
    myQuestionsOptions = 0;
    myQuestionsIndex = 0;
    questionContainer.classList.add("hide");
    buttonStart.classList.remove("hide");
    nextQuestion();
    myQuestionsAndOptions();
  }
  myQuestionsAndOptions();
  nextQuestion();
}

buttonStart.addEventListener("click", startGame);
allButtons.addEventListener("click", QuestionSelection);
