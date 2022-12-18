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
];
// Timer Variable
let time = 30;

// The timer function keeps track of the timer element from within the DOM
//  It will also change the time variable from our script

function timer() {
  const timerNode = document.getElementById("time");
  let interval = setInterval(() => {
    time--;
    timerNode.innerText = `Time: ${time}`;
    if (time === 0) {
      clearInterval(interval);
    }
  }, 500);
}

//  The startGame function will hide the start button from the DOM and show the questions
// and also starts the timer

function startGame() {
  const buttonStartWrapper = document.querySelector(".starting-button");
  const questionsContainer = document.getElementById("question-container");
  const getName = document.getElementById("#getName");
  const startButton = document.getElementById("start-btn");

  startButton.addEventListener("click", () => {
    buttonStartWrapper.classList.add("hide");
    questionsContainer.classList.remove("hide");
    timer();
  });
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
