var headerQuestion = document.querySelector(".header-Question");
var allH2 = document.querySelectorAll("h2");
var opt1 = document.querySelector(".option-1");
var opt2 = document.querySelector(".option-2");
var opt3 = document.querySelector(".option-3");
var opt4 = document.querySelector(".option-4");
var timer = document.querySelector(".Timer");
var score = document.querySelector(".Score");
var q1 = document.querySelector(".Questions");
var correctOrWrong = document.querySelector(".correct-Wrong");
var optionsAll = document.querySelector(".options");
var btnStart = document.querySelector(".btn-start");
var questionTitle = document.querySelector(".Questions-title");
var questionButton = document.querySelector("#choice");

var countDownTimer = 30;
var trackScore = 30;
trackScore.textContent = score;
var currentQuestionIndex = 0;
// const quizz1 = {
//   quizz: 1,
//   question: "What does API stand for?",
//   answer: "Application programming interface",
//   option1: "Application programming Interactive",
//   option2: "Application professonial intelligence",
//   option3: "Application programming intel",
// };

var options = [opt1, opt2, opt3, opt4];
// const quizz2 = {
//   quizz: 2,
//   question: "What are Arrays used for?",
//   answer: "Arrays are used to store multiple values in a single variable",
//   option1: "Storing integers",
//   option2: "Rainbow",
//   option3: "container",
// };

// const quizz3 = {
//   quizz: 3,
//   question: "What is a for loop?",
//   answer:
//     "for loop executes a block of code as long as a specified condition is true",
//   option1: "loop",
//   option2: "expression is evaluated on every loop",
//   option3: "Circle",
// };

// const quizz4 = {
//   quizz: 4,
//   question: "What does CSS stand for?",
//   answer: "Cascading Style Sheet",
//   option1: "Style Sheet",
//   option2: "HTML or other markup layout",
//   option3: "Color Style sheet",
// };

const questionsData = [
  {
    question: "What does CSS Stand For?",
    answers: ["s", "Cascading Style Sheet", "s", "s"],
    correctAnswer: "Cascading Style Sheet",
  },
  {
    question: "who is the father of javascript?",
    answers: {
      a: "Albert Einstein?",
      b: "Green",
      c: "Brendan Eich",
      d: "Red",
    },
    correctAnswer: "c",
  },
  {
    question: "What is my middle name?",
    answers: {
      a: "Albert",
      b: "David",
      c: "Graham",
      d: "John",
    },
    correctAnswer: "d",
  },
];

// Need to keep track of scores too
function score() {
  if (btnStart) {
    score++;
    score.textContent = 30;
  }
}

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
  getQuestions();
  // score();
}

// Keep the questions hidden till the button is pressed
// we want to loop the questions into the span elements
// TODO i want these to pop on to my screen
// TODO run these through if statement to check if answer is correct
// TODO When is correct it switches the object 1 to 2
// TODO we need to add a timer
// TODO NEED to add a score
// TODO Need to add a local storage for a score
// TODO we need add classes to our index.html
// TODO  we need to add css plus responsive

// var quizzQuestionsNumber1 = [
//   quizz1.option1,
//   quizz1.option2,
//   quizz1.option3,
//   quizz1.answer,
// ];

// var quizzQuestions = [questionsData[2].answers];

function getQuestions() {
  var currentQuestion = questionsData[currentQuestionIndex];
  questionTitle.innerHTML = currentQuestion.question;

  for (let index = 0; index < options.length; index++) {
    var newArray = options[index];

    newArray.innerHTML = questionsData[0].answers[index];
    questionTitle.innerHTML = questionsData[0].question;

    // if (btnCLicked) {
    //   console.log("hi");
    //   newArray.style.display = "";
    // } else {
    //   newArray.style.display = "none";
    // }
  }
}
var buttonEL;
function questionClick(event) {
  console.log("hi");
  // buttonEl = event.click.target;
  // event.stopPropagation();
  // button = event.click.target;
  // console.log(buttonEL);
  // if (!buttonEl.matches(".choice")) {
  //   return;
  // }
  buttonEL.event.target;
  // console.log("hello");
  // if (buttonEl === questionsData[0].correctAnswer) {
  //   countDownTimer -= 15;
  //   correctOrWrong.textContent = "Answer is correct";
  // } else if (buttonEl !== questionsData[0].correctAnswer) {
  //   countDownTimer += 2;
  //   correctOrWrong.textContent = "Answer is Wrong";
  // }
  return buttonEL;
}

btnStart.addEventListener("click", function () {
  startQuizz();
});

optionsAll.addEventListener("click", function (event) {
  var buttonEL = event.target.value;
  console.log(buttonEL);
  if (buttonEL === questionsData[0].correctAnswer) {
    countDownTimer -= 15;
  }
});
