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