// $(document).ready(){

// keeps count of the index of the displayed question
var currentQuestion = 0;
// Correct/Wrong answer counts
var correct = 0;
var wrong = 0;
var counter = 5;
var timer;

// create object with all questions and answers
var question1 = {
  question: "What is the largest park?",
  answer:{
     a: "Central Park",
     b: "River Side Park", 
     c: "Hamilton Park",
  },
  correctAnswer: "Central Park",
}

var question2 = {
  question: "What is the tallest building",
  answer:{
      a: "One World Trade Center",
      b: "Empire State Building",
      c: "Chrysler Building",
  },
  correctAnswer: "One World Trade Center",
}

var question3 = {
  question: "How Many Boroughs in NYC",
  answer:{
      a: "One",
      b: "Two",
      c: "five",
    },
  correctAnswer: "five",
}

// array of questions
var questionArray = [question1, question2, question3];


// dynamically display question and answers on screen
function displayQuestion(object){
  $("#game-round").empty();
    
  var round = $("<div>");
//  stores the question info
  var currentQ = object.question;
// creates an element to have the question displayed
  var askMe = $("<h1>").text(currentQ);
//   display the question
round.append(askMe)


//  stores the answer info
  var answer1 = object.answer.a;
// creates an element to have the answer display
  var guessMe1 = $("<button>").text(answer1);
// add a class called Answers
  guessMe1.addClass("answers");
// value for if its a correct answer
  guessMe1.attr("value", answer1);
//   display the question
  round.append(guessMe1)

//  stores the answer info
  var answer2 = object.answer.b;
// creates an element to have the answer display
  var guessMe2 = $("<button>").text(answer2);
// adds a class called answers
  guessMe2.addClass("answers");
// value for if its a correct answer
  guessMe2.attr("value", answer2);  
//  display the question
  round.append(guessMe2)

//  stores the answer info
  var answer3 = object.answer.c;
// creates an element to have the answer display
  var guessMe3 = $("<button>").text(answer3);
// adds a class called answers
  guessMe3.addClass("answers");
// value for if its a correct answer
  guessMe3.attr("value", answer3);
//   display the question
  round.append(guessMe3)

// Put all the question info on page
  $("#game-round").append(round)

//   checks if the answer is correct and then displays next question
  isCorrectAnswer(object);
  timer = setInterval(startTimer, 1000);
};

// Starts the game by displaying first question
$("#start-game").on("click", function(){
    displayQuestion(questionArray[currentQuestion]);
});

// checks if the guess is correct then moves to the next question
function correctGuess() {
    alert("you are correct");
    correct += 1;
    console.log("correct Answer: " + correct);
}


function wrongGuess() {
    alert("you are wrong");
    wrong += 1;
    console.log("wrong Answer: " + wrong);
}


function gameIsOver() {
    alert("Lets see how you did");
    $("#game-round").empty();
    $("#count-down").empty();
    var endOfGame = $("<div>");

    var displayCorrectGuesses = $("<div>").text("You got " + correct + " correct");
    endOfGame.append(displayCorrectGuesses);

    var displayWrongGuesses = $("<div>").text("You got " + wrong + " wrong");
    endOfGame.append(displayWrongGuesses);

    var playAgain = $("<button>").text("Play Again");
    playAgain.addClass("play-again");
    endOfGame.append(playAgain)

    $("#game-round").append(endOfGame);

  $(".play-again").on("click", function () {
    correct = 0;
    wrong = 0;
    currentQuestion = 0;
    displayQuestion(questionArray[currentQuestion]);
  });
};

function startNewRound() {
    currentQuestion += 1;
    console.log("this is current question # " + currentQuestion)
    clearInterval(timer);
    counter = 5
    if (currentQuestion < questionArray.length) {
        displayQuestion(questionArray[currentQuestion]);
    }
    else {
        gameIsOver()
    };
}

function isCorrectAnswer(object) {
    $(".answers").on("click", function (event) {
        var guess = $(this).attr("value");
        console.log(guess);
        if (guess === object.correctAnswer) {
            displayCorrectAnswer(object);
            // correctGuess();
        }
        else {
            displayWrongGuess(object);
            // wrongGuess();
        }
      setTimeout(startNewRound, 3000);
    });
}

function startTimer(){
  counter --;
  console.log(counter)
  $("#count-down").text("You have " + counter + " seconds left.")
  if (counter === 0){
    wrong += 1;
    console.log("wrong count: " + wrong);
    startNewRound();
  }
}

function displayCorrectAnswer(object){
    clearInterval(timer);
    correct += 1;
    console.log(correct)
    
    $("#count-down").empty();
    $("#game-round").empty();
    
    var showAnswer = $("<div>");
    
    var answerToShow = object.correctAnswer;
    var displayAnswer = $("<div>").text("You got it! The correct answer was " + answerToShow)
    displayAnswer.addClass("display")
    showAnswer.append(displayAnswer)
    
    $("#game-round").append(showAnswer)
}

function displayWrongGuess(object){
  clearInterval(timer);
  wrong += 1;
  console.log(wrong)
  $("#count-down").empty();
  $("#game-round").empty();

  var showAnswer = $("<div>");
  var answerToShow = object.correctAnswer;
  var displayAnswer = $("<div>").text("You got it wrong! The correct answer was " + answerToShow)
  displayAnswer.addClass("display")
  showAnswer.append(displayAnswer)

  $("#game-answer").append(showAnswer)
}