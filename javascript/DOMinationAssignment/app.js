const startQuizButton = document.getElementById("start-button");
const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const scoreContainer = document.getElementById("score-container");
const scoreDisplay = document.getElementById("score");
const restartButton = document.getElementById("restart-button");
const nextQuestionButton = document.getElementById("next-button");

const QUIZ_DATA = [
  {
    question: "Which of the following variable names follows the camelCase convention correctly?",
    options: ["UserName", "user_name", "userName", "USERNAME"],
    answer: 2
  },
  {
    question: "What happens if you forget to update the counter (e.g., i++) inside a while loop?",
    options: ["The loop runs only once", "The loop may run infinitely", "The loop never starts", "The loop automatically updates itself"],
    answer: 1
  },
  {
    question: "What is the difference between break and continue in a loop?",
    options: [
      "break stops the entire loop, while continue skips the current iteration.",
      "break skips one iteration, while continue ends the loop early.",
      "Both stop the loop immediately.",
      "Both skip the current iteration."
    ],
    answer: 0
  },
  {
    question: "Why are arrays useful in programming?",
    options: [
      "They let you store a single value in a variable.", 
      "They allow you to store multiple related values in one variable and access them by position.", 
      "They automatically sort items alphabetically.",
      "They prevent you from using loops."
    ],
    answer: 1
  },
  {
    question: "What is the main purpose of conditional logic in programming?",
    options: [
      "To repeat a task multiple times",
      "To store multiple values in a variable",
      "To change the color of the screen",
      "To make decisions based on certain conditions"
    ],
    answer: 3
  },
  {
    question: "Where should you write your JavaScript code when starting a project?",  
    options: [
      "Inside the HTML <head> tag only",
      "In a separate .js file linked with a <script> tag",
      "Inside the CSS file using @javascript",
      "Directly on the browser homepage"
    ],
    answer: 1
  },
  {
    question: "What does `console.log()` do in JavaScript?",
    options: [
      "Displays a message in the browser console for debugging",
      "Creates a popup alert on the web page",
      "Changes the color of the text on the page",
      "Saves data permanently to the server"
    ],
    answer: 0
  },
  {
    question: "How do you view the output of console.log() in your browser?",
    options: [
      "Look in the HTML code",
      "Double-click the webpage",
      "Right-click → Inspect → Console tab",
      "Open the CSS file"
    ],
    answer: 2
  },
  {
    question: "What is the purpose of the ternary operator in JavaScript?",
    options: [
      "It replaces logical operators like && and ||",
      "It creates loops in a single line of code",
      "It shortens simple if/else statements into one line",
      "It declares variables automatically"
    ],
    answer: 2
  },
  {
    question: "Which logical operator would you use if you want to check that at least one of two conditions is true?",
    options: [
      "&& (AND)",
      "! (NOT)",
      "?: (Ternary)",
      "|| (OR)"
    ],
    answer: 3
  }
];


let currentScore = 0;
let currentQuestionIndex = 0;

startQuizButton.addEventListener("click", loadQuestionOne);

function loadQuestionOne(){
    scoreContainer.classList.remove("hidden"); 
    loadQuestion(currentQuestionIndex);

        quizContainer.removeChild(startQuizButton);
        
        nextQuestionButton.classList.remove("hidden");
        score.textContent = ` ${currentScore}`;

        quizContainer.appendChild(nextQuestionButton);
        nextQuestionButton.addEventListener("click", loadNextQuestion);
}

function loadNextQuestion(){
   currentQuestionIndex++;

   if (currentQuestionIndex < QUIZ_DATA.length) {
        loadQuestion(currentQuestionIndex);
    if(currentQuestionIndex === QUIZ_DATA.length -1){
        nextQuestionButton.textContent = "End Quiz"
    }
 } else {
        questionContainer.textContent = "Quiz Complete!";
        optionsContainer.innerHTML = "";
        nextQuestionButton.classList.add("hidden");

        const feedBackCorrect = document.getElementById("feedBackCorrect");
        score.removeChild(feedBackCorrect);
        const feedBackIncorrect = document.getElementById("feedBackIncorrect");
        score.removeChild(feedBackIncorrect);
    }
}

function loadQuestion() {
    questionContainer.innerHTML = "";
    questionContainer.textContent = QUIZ_DATA[currentQuestionIndex].question;

    optionsContainer.innerHTML = "";
    optionButtons = [];
    QUIZ_DATA[currentQuestionIndex].options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.addEventListener('click', () => selectOption(index));
        optionButton.classList.add("option-btn");
        optionsContainer.appendChild(optionButton);
});
}


function selectOption(selectedIndex){

    const optionButtons = optionsContainer.children; // grab all option buttons
    for (let btn of optionButtons) {
        btn.disabled = true;
    }

    score.innerHTML = "";
    
    if (selectedIndex === QUIZ_DATA[currentQuestionIndex].answer){
        currentScore++;

        const feedBackCorrect = document.createElement("div");
        feedBackCorrect.textContent = "Correct!";
        feedBackCorrect.id = "feedBackCorrect";
        feedBackCorrect.classList.add("correct");
        score.textContent = ` ${currentScore}`;
        score.appendChild(feedBackCorrect);
    } else {
        const feedBackIncorrect = document.createElement("div");
        feedBackIncorrect.textContent = "Incorrect!";
        feedBackIncorrect.id = "feedBackIncorrect";
        feedBackIncorrect.classList.add("incorrect");
        score.textContent = ` ${currentScore}`;
        score.appendChild(feedBackIncorrect);
    }
 }

 function reStart (){
    currentScore = 0;
    currentQuestionIndex = 0;
    questionContainer.innerHTML = "";
    optionsContainer.innerHTML = "";
    scoreContainer.classList.add("hidden");
    quizContainer.appendChild(startQuizButton);
    quizContainer.removeChild(nextQuestionButton);
    nextQuestionButton.textContent = "Next Question"

    startQuizButton.addEventListener("click", loadQuestionOne);
 }

restartButton.addEventListener("click", reStart); 
