var buttonStart = document.querySelector(".start-btn");
var questionContainer = document.getElementById("question-container");

function startGame() {
  console.log("hi");
  buttonStart.classList.add("hide");
  questionContainer.classList.remove("hide");
}

buttonStart.addEventListener("click", startGame);
