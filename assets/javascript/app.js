// $(document).ready(){

// keeps count of the index of the displayed question
var currentQuestion = 0;
// Correct/Wrong answer counts
var correct = 0;
var wrong = 0;

// Timer Variables
var counter = 25;
var timer;

// Hides subway gif for when time runs out
$(".subway").hide()

// create object with all questions and answers
var question1 = {
  question: "You're at the 92 street Y what train to do you take to get the West Village for some burgers at Corner Bistro?",
  answer:{
     a: "Gross, I only take Taxis",
     b: "5 train to the L", 
     c: "The NQR to the A",
  },
  correctAnswer: "5 train to the L",
}

var question2 = {
  question: "Which Manhattan streets border Central Park on the North and South?",
  answer:{
    a: "59th and 110th Streets",
    b: "Central Park South and Central Park North",
    c: "61st and 95th Streets",
  },
  correctAnswer: "59th and 110th Streets",
}

var question3 = {
  question: "How can you take a sight seeing tour of the Statue of Liberty for free?",
  answer:{
      a: "It's New York, nothing is free!",
      b: "Staten Island Ferry",
      c: "Swim around it",
    },
  correctAnswer: "Staten Island Ferry",
}

var question4 = {
  question: "How many World's Fairs have taken place in New York City since 1900?",
  answer: {
    a: "Four",
    b: "One",
    c: "Two",
  },
  correctAnswer: "Two",
}

var question5 = {
  question: "The dead outnumber the living in which borough?",
  answer: {
    a: "Manhattan",
    b: "Queens",
    c: "Brooklyn",
  },
  correctAnswer: "Queens",
}

// array of questions
var questionArray = [question1, question2, question3, question4, question5];


// dynamically display questions and answers on screen
function displayQuestion(object){
  // Hides subway gif for when time runs out
  $(".subway").hide()

  // Empty's current div and answer div
  $("#game-round").empty();
  $("#game-answer").empty();

  // Starts timer
  timer = setInterval(startTimer, 1000);

// main div all components go into
  var round = $("<div>");
  round.addClass("d-flex flex-sm-column justify-content-center");

//  stores the question info
  var currentQ = object.question;
// creates an element to have the question displayed
  var askMe = $("<h6>").text(currentQ);
  askMe.addClass("mx-auto display my-5")
//   display the question
  round.append(askMe)


//  stores the answer info
  var answer1 = object.answer.a;
// creates an element to have the answer display
  var guessMe1 = $("<button>").text(answer1);
// add a class called Answers
  guessMe1.addClass("answers mx-auto btn btn-dark my-2");
// value for if its a correct answer
  guessMe1.attr("value", answer1);
//   display the question
  round.append(guessMe1)

//  stores the answer info
  var answer2 = object.answer.b;
// creates an element to have the answer display
  var guessMe2 = $("<button>").text(answer2);
// adds a class called answers
  guessMe2.addClass("answers mx-auto btn btn-dark my-2");
// value for if its a correct answer
  guessMe2.attr("value", answer2);  
//  display the question
  round.append(guessMe2)

//  stores the answer info
  var answer3 = object.answer.c;
// creates an element to have the answer display
  var guessMe3 = $("<button>").text(answer3);
// adds a class called answers
  guessMe3.addClass("answers mx-auto btn btn-dark my-2");
// value for if its a correct answer
  guessMe3.attr("value", answer3);
//   display the question
  round.append(guessMe3)


// Puts all the question info on page
  $("#game-round").append(round)

//   checks if the answer is correct
  isCorrectAnswer(object);
};

// Starts the game by displaying first question
$("#start-game").on("click", function(){
    displayQuestion(questionArray[currentQuestion]);
});

// Restarts counter and Displays new question
function startNewRound() {
    currentQuestion += 1;
    console.log("this is current question # " + currentQuestion)
    clearInterval(timer);
    counter = 25;
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
        }
        else {
            displayWrongGuess(object);
        }
      setTimeout(startNewRound, 3000);
    });
}

function startTimer(){
  counter --;
  console.log(counter)
  $("#count-down").text("Time Remaining... " + counter + " sec")
  if (counter === 0){
    wrong += 1;
    console.log("wrong count: " + wrong);
    $("#game-round").empty();
    clearInterval(timer);
    $("#count-down").empty();
    $(".subway").show()

    setTimeout(startNewRound, 3000);
  }
}

function displayCorrectAnswer(object){
    clearInterval(timer);
    correct += 1;
    console.log(correct)
    
    $("#count-down").empty();
    $("#game-round").empty();
    
    var showAnswer = $("<div>");
    showAnswer.addClass("d-flex flex-sm-column justify-content-center m-4")

    var answerToShow = object.correctAnswer;
    var displayAnswer = $("<h1>").text("You Guessed it!    The correct answer was " + answerToShow + ".");
    displayAnswer.addClass("mx-auto display");
    showAnswer.append(displayAnswer);
    $("#game-answer").append(showAnswer);
}

function displayWrongGuess(object){
  clearInterval(timer);
  wrong += 1;
  console.log(wrong)
  $("#count-down").empty();
  $("#game-round").empty();

  var showAnswer = $("<div>");
  showAnswer.addClass("d-flex flex-sm-column justify-content-center m-4");

  var answerToShow = object.correctAnswer;
  var displayAnswer = $("<div>").text("Nice Try!    The correct answer was " + answerToShow + ".");
  displayAnswer.addClass("mx-auto display");
  showAnswer.append(displayAnswer);
  $("#game-round").append(showAnswer)
}

function gameIsOver() {
  alert("Lets see how you did");
  $(".subway").hide();
  $("#game-round").empty();
  $("#count-down").empty();
  $("#game-answer").empty();

  var endOfGame = $("<div>");
  endOfGame.addClass("d-flex flex-sm-column justify-content-center m-4");

  if (correct > 3) {
    var goodGame = $("<h4>").text("You've got an Empire State of mind! You are a true New Yorker!");
    goodGame.addClass("display my-2 mx-auto");
    endOfGame.append(goodGame);
  } else if (correct <= 3){
    var badGame = $("<h4>").text("You're at basic tourist level, have you even been to NYC?");
    badGame.addClass("display my-2 mx-auto");
    endOfGame.append(badGame);
  };

  var displayCorrectGuesses = $("<div>").text("You got " + correct + "/5 right.");
  displayCorrectGuesses.addClass("display my-1 mx-auto");
  endOfGame.append(displayCorrectGuesses);

  var playAgain = $("<button>").text("Play Again");
  playAgain.addClass("play-again mt-5 mx-auto btn btn-warning");
  endOfGame.append(playAgain)

  $("#game-round").append(endOfGame);

  $(".play-again").on("click", function () {
    correct = 0;
    wrong = 0;
    currentQuestion = 0;
    displayQuestion(questionArray[currentQuestion]);
  });
};