// GIVEN I am taking a code quiz

// WHEN I click the start button
// THEN a timer starts and I am presented with a question

// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and score

// questions //
const questions = [
    {
        // Question 1 //
        question: "Which one of these characters is not friends with Harry Potter?",
        choices: ["a. Ron Weasley", "b. Neville Longbottom", "c. Hermione Granger", "d. Draco Malfoy"],
        answer: "d. Draco Malfoy"
    },
    {
        // Question 2 //
        question: "What iconic meal did McDonald’s introduce in 1968?",
        choices: ["a. The McChicken", "b. Chicken Nuggets", "c. Big Mac", "d. Quarter Pounder"],
        answer: "c. Big Mac"
    },
    {
        // Question 3 //
        question: "What is the oldest soft drink in America?",
        choices: ["a. Coke", "b. Dr. Pepper", "c. Pepsi", "d. 7-UP"],
        answer: "b. Dr. Pepper"
    },
    {
        // Question 4 //
        question: "Which U.S. state is the only state to grow coffee beans?",
        choices: ["a. Arizona", "b. California", "c. Hawaii", "d. Florida"],
        answer: "c. Hawaii"
    },
    {
        // Question 5 //
        question: "A “screwdriver” drink consists of what?",
        choices: ["a. Orange Juice and Gin", "b. Orange juice and vodka", "c. Pineapple and Vodka", "d. Pineapple and Gin"],
        answer: "b. Orange juice and vodka"
    },
    {
        // Question 6 //
        question: "Traditionally, what kind of icing frosts a carrot cake?",
        choices: ["a. Buttercream", "b. Swiss Meringue", "c. Cream Cheese", "d. Whipped Cream"],
        answer: "c. Cream Cheese"
    },
    {
        // Question 7 //
        question: "What was the profession of William Morrison, the man who invented machine-spun cotton candy?",
        choices: ["a. Machinist", "b. Dentist", "c. Carnival Clown", "d. Surgeon"],
        answer: "b. Dentist"
    },
    {
        // Question 8 //
        question: "What is meant to be the main flavor in a traditional tiramisu?",
        choices: ["a. Coffee", "b. Marzipan Cheese", "c. Lady Fingers", "d. Cocoa"],
        answer: "a. Coffee"
    },
    {
        // Question 9 //
        question: "A Scoville scale is used to measure what",
        choices: ["a. The Color of a Pepper", "b. The Number of Seeds in a Pepper", "c. The Spicy Heat of Peppers", "d. The Shape of a Pepper"],
        answer: "c. The Spicy Heat of Peppers"
    },
    {
        // Question 10 //
        question: "Which is the only edible food that never expires?",
        choices: ["a. Crackers", "b. Syrup", "c. Honey", "d. Mustard"],
        answer: "c. Honey"
    },
    {
        // Question 11 //
        question: "What amount comes in a baker’s dozen?",
        choices: ["a. 13", "b. 12", "c. 11", "d. 6"],
        answer: "a. 13"
    },
    {
        // Question 12 //
        question: "Scurvy is caused by a lack of this vitamin",
        choices: ["a. Vitamin C", "b. Vitamin D", "c. Vitamin B", "d. Vitamin A"],
        answer: "a. Vitamin C"
    }
];

var startButton = document.querySelector("#startButton")
var timer = 300
var timeRemaining = document.querySelector("#timeRemaining")
var currentQuestion;
var rightWrong = document.querySelector("#rightWrong")
var highscoreEntry = document.querySelector("#highscoreEntry")

function startQuiz() {
    // display questions //
    document.querySelector("#main").setAttribute("class", "hidden")
    document.querySelector("#quizArea").setAttribute("class", "")
    currentQuestion=0
    // timer starts //
    displayQuestions() 
    startTimer()
}

function startTimer() {
    var quizInterval = setInterval(function() {
        timer--
        timeRemaining.textContent= timer
        console.log(timer)
    if (timer <= 0 || currentQuestion >=questions.length) {
        clearInterval(quizInterval);
        document.querySelector("#quizArea").setAttribute("class", "hidden")
        document.querySelector("#finalScoreShown").setAttribute("class", "")
        console.log("time expired")
        document.querySelector("#playerHighscore").textContent = timer
    }
    }, 1000)

}

// function stopTimer() {
//     if (timer <=0) {
//         alert("Times Up!Thank you for playing!")
//         confirm("would you like to play again?")

//     } startQuiz ()
// }
function displayQuestions() {
    var questionBlock = document.querySelector("#questionBlock")
    questionBlock.textContent=questions[currentQuestion].question
    var choiceHTML = document.querySelectorAll(".choice")
    for(i=0; i<choiceHTML.length; i++) {
        choiceHTML[i].textContent=questions[currentQuestion].choices[i]
        choiceHTML[i].addEventListener("click", checkAnswer)
    }
}

function checkAnswer() {
    console.log(this.textContent)
    if (this.textContent === questions[currentQuestion].answer) {
        rightWrong.textContent= "Yo Ho Ho you got the last one right!"
        // console.log("Yo ho ho you got it right!")
    }
    else {
        rightWrong.textContent= "Thats a miss!  Keep it up and you'll find yourself walking the plank"
        timer = timer -15
        // console.log("Wrong, miss anymore and you'll find yourself walking the plank")
    }
    currentQuestion++ 
    if (currentQuestion < questions.length) {
        displayQuestions()
    }
}

function highscoreSubmit() {
    var playerInitials= document.querySelector("#playerInitials").value

    console.log(playerInitials)
}

highscoreEntry.addEventListener("click", highscoreSubmit)
startButton.addEventListener("click", startQuiz)

// Event listener to clear the scores 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

// Event listener to move to index page
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});