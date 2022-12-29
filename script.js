// My object of questions
const questionsData = [
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

  {
    // Question 5
    question: "Which is NOT a programming language",
    answers: ["Banana", "Ruby", "Python", "Java"],
    correctAnswer: "Banana",
  },

  {
    // Question 6
    question: "Who is Father of Code",
    answers: [
      "Dennis MacAlistair Ritchie",
      "albert einstein",
      "Charles Babbage",
      "Håkon Wium",
    ],
    correctAnswer: "Dennis MacAlistair Ritchie",
  },

  {
    // Question 7
    question: "Which is an Array",
    answers: [
      "const newArray = [1, 2, 3, 4, 5]",
      "var newArray = [1, 2, 3, 4, 5, {1, 2, 3}]",
      "[1, 2, 3] = [1, 2, 3]",
      "for(let i = 0; array.length; i++) {\n array[i]}",
    ],
    correctAnswer: "const newArray = [1, 2, 3, 4, 5]",
  },

  {
    // Question 8
    question: "Which is an function Expression",
    answers: [
      "const newArray = function() { \n console.log('Hello world!')}",
      "function() {\n console.log('Hello World')}",
      "return function{ \n return console.log('function expression')}",
      "const x  = 1",
    ],
    correctAnswer:
      "const newArray = function() { \n console.log('Hello world!')}",
  },
];
// Timer Variable
let time = 30;
let myQuestionsIndex = 0;
let score = 0;
//

// The timer function keeps track of the timer element from within the DOM
//  It will also change the time variable from our script
let interval;
function timer() {
  const timerNode = document.getElementById("time");
  interval = setInterval(() => {
    time--;
    timerNode.innerText = `Time: ${time}`;
    if (time <= 0) {
      clearInterval(interval);
      timerNode.innerText = "YOU FAILED";
    }
  }, 500);
}

//  The startGame function will hide the start button from the DOM and show the questions
// and also starts the timer
const questionsContainer = document.getElementById("question-container");
let formContainer = document.getElementById("getName");
const submitButton = document.getElementById("btn-submit-one");
const restartGame = document.getElementById("restart-button");
const buttonStartWrapper = document.querySelector(".starting-button");
const startButton = document.getElementById("start-btn");

function startGame() {
  startButton.addEventListener("click", () => {
    buttonStartWrapper.classList.add("hide");
    questionsContainer.classList.remove("hide");
    timer();
  });
}
function getName(e) {
  e.preventDefault();
  const text = document.querySelector(".text").value;
  text.textContent = e.target.value;
  localStorage.setItem("name", text);
}

// restartGame restarts the game showing the start button again and hiding question
// Unless button start is clicked
function restart(e) {
  time = 30;
  timer();
  e.preventDefault();
  questionsContainer.classList.add("hide");
  formContainer.classList.add("hide");
  restartGame.classList.add("hide");
  buttonStartWrapper.classList.add("hide");
  questionsContainer.classList.remove("hide");
  // startGame();
  // addQuestionsAndAnswers();
}
//  The addQuestionsAndAnswers gets the buttons, the title and the score
//  in order to update them
// It uses closure in order to keep track of the score and of the questionsIndex

function addQuestionsAndAnswers() {
  const btnOne = document.getElementById("btn-1");
  const btnTwo = document.getElementById("btn-2");
  const btnThree = document.getElementById("btn-3");
  const btnFour = document.getElementById("btn-4");
  const btnCycle = [btnOne, btnTwo, btnThree, btnFour];
  const questionTitleSelector = document.getElementById("question-title");
  const scoreBoard = document.getElementById("score");
  let myQuestionsIndex = 0;
  let score = 0;

  function gameLogic() {
    scoreBoard.innerText = `score: ${score}`;

    if (myQuestionsIndex < questionsData.length) {
      questionTitleSelector.innerText =
        questionsData[myQuestionsIndex].question;

      btnCycle.forEach((btn, index) => {
        btn.innerText = questionsData[myQuestionsIndex].answers[index];
        btn.addEventListener("click", updateButtons);

        function updateButtons(e) {
          e.stopImmediatePropagation();
          if (myQuestionsIndex < questionsData.length) {
            const isCorrect =
              questionsData[myQuestionsIndex].correctAnswer === btn.innerText;
            if (isCorrect) {
              score++;
              time += 5;
              localStorage.setItem("score", score);
            } else {
              time -= 5;
            }
            myQuestionsIndex++;
          } else {
            myQuestionsIndex = 0;
            score = 0;
            // hide questions
            questionsContainer.classList.add("hide");
            // show form
            formContainer.classList.remove("hide");
            // stop timer
            clearInterval(interval);
            submitButton.addEventListener("click", getName);
            // Need to restart the page from the begining
            restartGame.classList.remove("hide");

            restartGame.addEventListener("click", restart);
          }

          btn.removeEventListener("click", updateButtons);
          gameLogic();
        }
      });
    }
  }

  return gameLogic();
}

startGame();
addQuestionsAndAnswers();
