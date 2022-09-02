
let readlineSync = require("readline-sync"); //call package to read console.
const chalk = require("chalk")

// getting username and printing welcome message on console.
console.log(chalk.green.bold("Welcome to Quiz"))
console.log("")
var userName = readlineSync.question("Please enter your name: ");
console.log("")
console.log("Hi " + chalk.magentaBright.bold(userName.toUpperCase()) + ", Welcome.")
console.log("Lets check how much you know about your friend " + chalk.yellowBright.bold('KARTHIK') + "?")

// initialize score to zero.

var score = 0;

// function for reading and checking user answer.

function playQuiz(question, answer) {
  console.log("")
  var userAnswer = readlineSync.question(question).toLowerCase();
  if (userAnswer === answer) {
    console.log("")
    console.log(chalk.green.bold("You`re correct"));
    score = score + 1;
  } else {
    console.log("")
    console.log(chalk.red.bold("You`re wrong"));
    console.log(chalk.blue.bold("Right answer ---> " + answer));
    score = score;
  }
  console.log("")
  console.log(chalk.magenta.bold("You`re total score = " + score));
  console.log("------------****---------------")
}

// calling the funciton to check function is working or not

// playQuiz("where are u ","ballari")

// question and answer- array of objects 

var questions = [{
  question: " Q1: Where does Karthik live? \n \n" + "a:" + "Mumbai \n" + "b:" + "Bangalore \n" + "c:" + "Ballari \n" + "d:" + "Mysore \n",
  answer: "c"
},
{
  question: " Q2: Who is karthik`s favorite superhero? \n \n" + "a:" + "Batman \n" + "b:" + "Ironman \n" + "c:" + "Superman \n" + "d:" + "Spyder man \n",
  answer: "b"
},
{
  question: "Q3: Which is karthik`s favorite color? \n \n" + "a:" + "Red \n" + "b:" + "Green \n" + "c:" + "Black \n" + "d:" + "Blue \n",
  answer: "d"
},
{
  question: "Q4: Which is karthik`s favorite sports? \n \n" + "a:" + "Cricket \n" + "b:" + "Volleyball \n" + "c:" + "Football \n" + "d:" + "Tennis \n",
  answer: "c"
},
{
  question: "Q5: Which is karthik`s favorite car? \n \n" + "a:" + "Honda Civic \n" + "b:" + "XUV700 \n" + "c:" + "Toyota Fortuner \n" + "d:" + "Tata Harrier \n",
  answer: "d"
},
{
  question: "Q6: What did karthik studied? \n \n" + "a:" + "Doctor  \n" + "b:" + "Engineer \n" + "c:" + "CA \n" + "d:" + "MBA  \n",
  answer: "b"
},
{
  question: "Q7: Where does karthik work (city)?  \n \n" + "a:" + "Hydrabad \n" + "b:" + "Chennai \n" + "c:" + "Pune  \n" + "d:" + "Bangalore \n",
  answer: "d"
},
{
  question: "Q8: Does karthik have siblings? \n \n" + "a:" + "No \n" + "b:" + "Yes \n",
  answer: "b"
},
{
  question: "Q9: Which country does karthik live?  \n \n" + "a:" + "India \n" + "b:" + "USA \n" + "c:" + "Germany  \n" + "d:" + "Canada \n",
  answer: "a"
},
{
  question: "Q10: Which state does karthik belong to?  \n \n" + "a:" + "Andra pradesh \n" + "b:" + "U.P \n" + "c:" + "Kerala  \n" + "d:" + "Karnataka \n",
  answer: "d"
}
]

// for-loop to read questions array.

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  playQuiz(currentQuestion.question, currentQuestion.answer);
}

console.log(chalk.yellowBright.bold("Grand total score: " + score));


