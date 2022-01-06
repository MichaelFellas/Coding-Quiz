//Javascript for Code Quiz//

//Variables // 
var questionNumber = [0,1,2,3,4,5,6,7,8,9]
var question = ["Which direction does a CSS cascade?","Which CSS selector is global?", "Which language allows you to build a webpage layout?","How do you attach a child to a parent in Javascript?", "Which language is used to make a website with a timer","What does js mean?", "Which display element is variable?", "What data type is 7?", "Where is padding located?", "Which coding language shares a name with a superhero?"];
var answerA = ["Up","//", "CSS","stopPropogation", "HTML","Java", "Div", "Number", "Between the border of an element and other elements", "Groot"];
var answerB = ["Left",".", "HTML","textContent", "Javascript","Javascript", "Inline", "Boolean", "Between the elements content and its border", "MODOK"];
var answerC = ["Right","*", "Python","getElementById", "CSS","jQuery", "Block", "Character", "It's another name for Border", "Flash"];
var answerD = ["Down","#", "Javascript","append", "All of the above","JavaQueryScript", "Flexbox", "Undefined", "Outside of the margin", "Python"];
var timerEl = document.getElementById('timer');
var answerKey =["Down","*", "HTML","append", "All of the above","Javascript", "Flexbox", "Number", "Between the elements content and its border", "Flash"]
var reset = document.querySelector(".buttonTwo")
var correct = '0'
var timeRemaining = '';
var clickMe = document.querySelectorAll(".button")[0]
var clickMe2 = document.querySelectorAll(".button")[1]
var clickMe3 = document.querySelectorAll(".button")[2]
var clickMe4 = document.querySelectorAll(".button")[3]
var h3;
var highScores = [];

//Confirm prompt to start the game//
if (confirm("Would you like to play the Coding Quiz?") == true) {
    countdown();
}
else {
    document.body.innerHTML = ("");
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
    loadQuestions ();
    // Remove these before submission//
}

//determines if there's more questions to be picked//
function questionPicker() {
    if (questionNumber.length===0) {        
        highscores();
        
    }

    else {
        randomNumber();
        
    }

}

questionPicker ();



//Countdown function//

function countdown() {
    var timeLeft = 150;
    globalThis.timeLeft = timeLeft
   
    var timeInterval = setInterval(function () {
      globalThis.timeLeft--;
      timerEl.textContent = "Time Remaining: " + globalThis.timeLeft;
  
      if(globalThis.timeLeft === 0) {      
        highscores();
      }
         
    },1000);
}

clickMe.addEventListener("click", function () {
     
    if (answerA[globalThis.randomChoice] === answerKey[globalThis.randomChoice]) {
        correct++;
        questionPicker ()
        
    }
    else {
        globalThis.timeLeft = globalThis.timeLeft - 10;
        questionPicker ()
        
    }
    
});

clickMe2.addEventListener("click", function () {
      
    if (answerB[globalThis.randomChoice] === answerKey[globalThis.randomChoice]) {
        correct++;
        questionPicker ()
    }
    else {
        globalThis.timeLeft = globalThis.timeLeft - 10;
        questionPicker ()
        
    }
    
});

clickMe3.addEventListener("click", function () {
    
    if (answerC[globalThis.randomChoice] === answerKey[globalThis.randomChoice]) {
        correct++;
        questionPicker ()
        
    }
    else {
        globalThis.timeLeft = globalThis.timeLeft - 10;
        questionPicker ()
        
    }
});

clickMe4.addEventListener("click", function () {
        
    if (answerD[globalThis.randomChoice] === answerKey[globalThis.randomChoice]) {
        correct++;
        questionPicker ()
        
    }
    else {
        globalThis.timeLeft = globalThis.timeLeft - 10;
        questionPicker ()
        
    }
    
});


// Highscores Function
function highscores () {
    var timeScore = globalThis.timeLeft;
        document.body.innerHTML = "";
        var initials = prompt("Please enter your initials");
        var score = {
            correctAnswers: correct,
            timeRemaining: timeScore,
            name: initials,
        }
        highScores.push(score);
        var score = "";
    globalThis.timeLeft = -1;
    var scoreBox = document.createElement("h3");
    scoreBox.textContent = "HIGHSCORES";
    document.body.appendChild(scoreBox);
    highScores.sort(function(a, b){return b-a});

    for (var i = 0; i < 7; i++) {
    var score = document.createElement("h4");
    score.textContent = "HIGHSCORE "+[i+1]+": "+ highScores[i].name + ", " + highScores[i].correctAnswers + " Correct Answers, " + highScores[i].timeRemaining + " seconds left." ;
    document.body.appendChild(score);
    }

    console.log(highScores);

    var reset2 = document.createElement("Button");
    reset2.textContent = "REPLAY GAME"
    document.body.appendChild(reset2);
    reset2.setAttribute("style", "display: block; margin-right:auto; margin-left:auto; background-color: inherit; border-radius: 5px; color: white; cursor: pointer; font-size: 35px; padding: 10px;");
    reset2.addEventListener('click', function () {
        document.location.reload();
      });
}

































// Reset Button//
reset.addEventListener('click', function () {
    document.location.reload();
  });