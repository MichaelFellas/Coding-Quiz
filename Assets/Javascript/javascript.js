//Javascript for Code Quiz//

//Variables // 
var questionNumber = [0,1,2,3,4,5,6,7,8,9]
var question = ["Which direction does a CSS cascade?","Which CSS selector is global?", "Which language allows you to build a webpage layout?","How do you attach a child to a parent in Javascript?", "Which language is used to make a website with a timer","What does js mean?", "Which display element is variable?", "What data type is 7?", "Where is padding located?", "Which coding language shares a name with a superhero?"];
var answerA = ["Up","//", "CSS","stopPropogation", "HTML","Java", "Div", "Number", "Between the border of an element and other elements", "Groot"];
var answerB = ["Left",".", "HTML","textContent", "Javascript","Javascript", "Inline", "Boolean", "Between the elements content and its border", "Fast API"];
var answerC = ["Right","*", "Python","getElementById", "CSS","jQuery", "Block", "Character", "It's another name for Border", "Flash"];
var answerD = ["Down","#", "Javascript","append", "All of the above","JavaQueryScript", "FLexbox", "Undefined", "Outside of the margin", "Python"];
var timerEl = document.getElementById('timer');
var answerKey =["Answer 4","Answer 3", "Answer 2","Answer 4", "Answer 4","Answer 2", "Answer 4", "Answer 1", "Answer 2", "Answer 3"]
var reset = document.querySelector(".buttonTwo")
var correct = '0'
var timeRemaining = '';

//Confirm prompt to start the game//
if (confirm("Would you like to play the Coding Quiz?") == true) {
    countdown();
}

//loads the questions based on array text and prints them to buttons //
function loadQuestions () {  
   document.getElementById("#answer-display-1").innerHTML = answerA[globalThis.randomChoice];
   document.getElementById("#answer-display-2").innerHTML = answerB[globalThis.randomChoice]; 
   document.getElementById("#answer-display-3").innerHTML = answerC[globalThis.randomChoice]; 
   document.getElementById("#answer-display-4").innerHTML = answerD[globalThis.randomChoice]; 
   document.getElementById("questions").textContent = question[globalThis.randomChoice]; 
}

//Picks random number for questions//
function randomNumber () {
    var randomChoice = "";
    var randomChoice = questionNumber[Math.floor(Math.random ()*questionNumber.length)];
    globalThis.randomChoice = randomChoice;
    index = questionNumber.indexOf(randomChoice)
    if (index > -1) {
        questionNumber.splice(index,1);        
    }
    
    // Remove these before submission//
}

//determines if there's more questions to be picked//
function questionPicker() {
    if (questionNumber.length===0) {
        return; //Link this to highscore page//
    }

    else {
        randomNumber();
    }

}

questionPicker ();

loadQuestions ();

//Countdown function//

function countdown() {
    var timeLeft = 150;
   
    var timeInterval = setInterval(function () {
      timeLeft--;
      timerEl.textContent = "Time Remaining: " + timeLeft;
  
      if(timeLeft === 0) {      
        clearInterval(timeInterval);      
        displayMessage(); //link to highscores page//
      }
         
    },1000);
}

//".button".addEventListener('click,')





































// Reset Button//
reset.addEventListener('click', function () {
    window.location.reload();
  });