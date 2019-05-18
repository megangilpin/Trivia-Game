// $(document).ready(){

var currentQuestion = 0;
var correctAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;


// create object with all questions and answers
var question1 = {
  question: "What is the largest park?",
  answer:{
     a: "Central Park",
     b: "River Side Park", 
     c: "Hamilton Park",
  },
  correctAnswer: "River Side Park",
}

var question2 = {
  question: "What is the tallest building",
  answer:{
      a: "One World Trade Center",
      b: "Empire State Building",
      c: "Rockcenter",
  }
}

var question3 = {
  question: "How Many Boroughs in NYC",
  answer:{
      a: "One",
      b: "Two",
      c: "Three",
    }
}

// array of questions
var quizQuestions = [question1, question2, question3];



// dynamically display question and answers on screen
function displayQuestion(object){
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
//  display the question
  round.append(guessMe2)

//  stores the answer info
  var answer3 = object.answer.c;
// creates an element to have the answer display
  var guessMe3 = $("<button>").text(answer3);
// adds a class called answers
  guessMe3.addClass("answers");
//   display the question
  round.append(guessMe3)

// Put all the question info on page
  $("#game-round").append(round)
};

displayQuestion(question1);

function isCorrectAnswer(){
  if ($(this) === 
  console.log($(this));
  });
}
// timer starts count down and waits for a click to stop
// if no click you lose
// if a click check if click is answer
// if correct display correct answer, if incorrect say correct answer
// display above info for x amount of time, then go to next question













// };