//Javascript for Code Quiz//

var questionNumber = [0,1,2,3,4,5,6,7,8,9]
var question = ["Question 1","Question 2", "Question 3","Question 4", "Question 5","Question 6", "Question 7", "Question 8", "Question 9", "Question 10"];
var answerA = ["Answer 1","Answer 2", "Answer 3","Answer 4", "Answer 5","Answer 6", "Answer 7", "Answer 8", "Answer 9", "Answer 10"];
var answerB = ["Answer 1","Answer 2", "Answer 3","Answer 4", "Answer 5","Answer 6", "Answer 7", "Answer 8", "Answer 9", "Answer 10"];
var answerC = ["Answer 1","Answer 2", "Answer 3","Answer 4", "Answer 5","Answer 6", "Answer 7", "Answer 8", "Answer 9", "Answer 10"];
var answerD = ["Answer 1","Answer 2", "Answer 3","Answer 4", "Answer 5","Answer 6", "Answer 7", "Answer 8", "Answer 9", "Answer 10"];
var randomChoice = "";

function randomNumber () {
    var randomChoice = questionNumber[Math.floor(Math.random ()*questionNumber.length)];
    index = questionNumber.indexOf(randomChoice)
    if (index > -1) {
        questionNumber.splice(index,1);
    }

    // Remove these before submission//
    console.log(randomChoice);
    console.log(questionNumber);
}

function questionPicker() {
    if (questionNumber.length===0) {
        return; //Link this to highscore page//
    }

    else {
        randomNumber();
    }

}

questionPicker ();
