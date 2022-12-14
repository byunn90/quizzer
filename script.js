var headerQuestion = document.querySelector(".header-Question");
var allH2 = document.querySelectorAll("h2");
var opt1 = document.querySelector(".option-1");
var opt2 = document.querySelector(".option-2");
var opt3 = document.querySelector(".option-3");
var opt4 = document.querySelector(".option-4");
var timer = document.querySelector(".Timer");
var score = document.querySelector(".Score");
var q1 = document.querySelector(".Questions");
var optionsAll = document.querySelector(".options");
var btnStart = document.querySelector(".btn-start");

var countDownTimer = 30;
var trackScore = 0;

const quizz1 = {
  quizz: 1,
  question: "What does API stand for?",
  answer: "Application programming interface",
  option1: "Application programming Interactive",
  option2: "Application professonial intelligence",
  option3: "Application programming intel",
};

var options = [opt1, opt2, opt3, opt4];
const quizz2 = {
  quizz: 2,
  question: "What are Arrays used for?",
  answer: "Arrays are used to store multiple values in a single variable",
  option1: "Storing integers",
  option2: "Rainbow",
  option3: "container",
};

const quizz3 = {
  quizz: 3,
  question: "What is a for loop?",
  answer:
    "for loop executes a block of code as long as a specified condition is true",
  option1: "loop",
  option2: "expression is evaluated on every loop",
  option3: "Circle",
};

const quizz4 = {
  quizz: 4,
  question: "What does CSS stand for?",
  answer: "Cascading Style Sheet",
  option1: "Style Sheet",
  option2: "HTML or other markup layout",
  option3: "Color Style sheet",
};
// Need to keep track of scores too
function score() {}

function timerMe() {
  // var countDown = countDownTimer--;
  if (countDownTimer < 0) {
    timer.style.display = "none";
    clearInterval(timer);
  } else {
    timer.textContent = countDownTimer--;
  }
}

function startQuizz() {
  btnStart.style.display = "none";
  setInterval(timerMe, 1000);
}

// Keep the questions hidden till the button is pressed
// we want to loop the questions into the span elements

// for (let i = 0; i < newArray.length; i++) {
//   listEl.appendChild(newArray[i]);
//   listEl.setAttribute("style", "background-color: #333333; padding: 20px;");
// }

// TODO i want these to pop on to my screen
// TODO run these through if statement to check if answer is correct
// TODO When is correct it switches the object 1 to 2
// TODO we need to add a timer
// TODO NEED to add a score
// TODO Need to add a local storage for a score
// TODO we need add classes to our index.html
// TODO  we need to add css plus responsive

var quizzQuestionsNumber1 = [
  quizz1.option1,
  quizz1.option2,
  quizz1.option3,
  quizz1.answer,
];

function questionWorking(btnCLicked = false) {
  for (let index = 0; index < options.length; index++) {
    var newArray = options[index];
    // This loops my questions into the html
    newArray.textContent = quizzQuestionsNumber1[index];

    if (btnCLicked) {
      console.log("hi");
      newArray.style.display = "";
    } else {
      newArray.style.display = "none";
    }
  }
}

function Quizz1correctAnswer() {}

btnStart.addEventListener("click", function () {
  startQuizz();
  questionWorking(true);
});
