console.log("click 'play' buttom in top right corner.")

readlineSync = require("readline-sync"); //call package to read console.

// getting username and printing welcome message on console.

var userName = readlineSync.question("Enter username: ");
console.log("Hi " + userName + ", Welcome!. Do you know Karthik?")

// initialize score to zero.

var score = 0;

// function for reading and checking user answer.

function playQuiz(question, answer) {
  var userAnswer = readlineSync.question(question).toLowerCase();
  if (userAnswer === answer) {
    console.log("You`re correct");
    score = score + 1;
  } else {
    console.log("You`re wrong");
    console.log("Right answer: " + answer);
    score = score;
  }
  console.log("You`re total score = " + score);
  console.log("------------****---------------")
}

// calling the funciton to check function is working or not

// playQuiz("where are u ","ballari")

// question and answer- array of objects 

var questions = [{
  question: "where does Karthik live? ",
  answer: "ballari"
},
{
  question: "Who is karthik`s favorite superhero? ",
  answer: "ironman"
},
{
  question: "which is karthik`s favorite color? ",
  answer: "blue"
},
{
  question: "which is karthik`s favorite sports? ",
  answer: "football"
},
{
  question: "which is karthik`s favorite car? ",
  answer: "tesla"
},
{
  question: "what did karthik studied?",
  answer: "mechanical engineer"
},
{
  question: "Where does karthik work (city)? ",
  answer: "bangalore"
},
{
  question: "Does karthik have siblings? ",
  answer: "yes"
},
{
  question: "Which country does karthik live? ",
  answer: "india"
},
{
  question: "which state does karthik belong to? ",
  answer: "karnataka"
}
]

// for-loop to read questions array.

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  playQuiz(currentQuestion.question, currentQuestion.answer);
}

console.log("Grand total score: " + score);


