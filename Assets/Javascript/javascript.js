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
var clickMe = document.querySelectorAll(".buttonOne")[0]
var clickMe2 = document.querySelectorAll(".buttonOne")[1]
var clickMe3 = document.querySelectorAll(".buttonOne")[2]
var clickMe4 = document.querySelectorAll(".buttonOne")[3]
var h3;
var score = [];
var gameStart = document.getElementById("#startGame")
var lander = document.querySelector(".lander")
var quiz = document.querySelector(".quiz")
var scoreboard = document.querySelectorAll("h4")
const scores = ""

//Button that starts the game 
gameStart.addEventListener("click", function () {
hide(lander)
show(quiz)
countdown ();
questionPicker ();
});

//loads the questions based on array text and prints them to buttons 
function loadQuestions () {  
   document.getElementById("#answer-display-1").innerHTML = answerA[globalThis.randomChoice];
   document.getElementById("#answer-display-2").innerHTML = answerB[globalThis.randomChoice]; 
   document.getElementById("#answer-display-3").innerHTML = answerC[globalThis.randomChoice]; 
   document.getElementById("#answer-display-4").innerHTML = answerD[globalThis.randomChoice]; 
   document.getElementById("questions").textContent = question[globalThis.randomChoice]; 
}

//Picks random number for questions
function randomNumber () {
    var randomChoice = "";
    var randomChoice = questionNumber[Math.floor(Math.random ()*questionNumber.length)];
    globalThis.randomChoice = randomChoice;
    index = questionNumber.indexOf(randomChoice)
    if (index > -1) {
        questionNumber.splice(index,1);        
    }
    loadQuestions ();    
}

//Determines if there's more questions to be picked
function questionPicker() {
    if (questionNumber.length===0) {        
        saveHighscores();        
    }

    else {
        randomNumber();        
    }
}

//Hide funstion
function hide(element) {
    element.setAttribute("style", "display:none")
}

//Show function
function show(element) {
    element.setAttribute("style", "display:block")
}

//Countdown function
//BUG On page reload Countdown will go down at twice the speed, on second reload 3 times the speed
function countdown() {
    
    var timeLeft = 150;
    globalThis.timeLeft = timeLeft
   
    var timeInterval = setInterval(function () {
      globalThis.timeLeft--;
      timerEl.textContent = "Time Remaining: " + globalThis.timeLeft;
  
      if(globalThis.timeLeft === 0) {      
        saveHighscores();
      }
         
    },1000);
}

//Buttons for answers
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
function saveHighscores () {
    var timeScore = globalThis.timeLeft;
        hide(quiz);
        var initials = prompt("Please enter your initials");
        if (initials === null){
        resetty();
        return;
        }
        var result = {
            correctAnswers: correct,
            timeRemaining: timeScore,
            name: initials,
        }
        score.push(result);
        initials = "";        
        storage ();    
        globalThis.timeLeft === -1;
loadHighscores();   
}

//Loads highscores in the order they are made, was unable to sort them.
//BUG h4's get printed on the 3rd refresh onwards and I do not know why or how.
//BUG local storage is wiped on page refresh. unable to figure out.
function loadHighscores() {
    
    const scoreBox = document.createElement("h3");
    scoreBox.textContent = "HIGHSCORES";
    document.body.appendChild(scoreBox);
    globalThis.scoreBox = scoreBox
    loadScores(); 
    for (var i = 0; i < score.length; i++) {
        if (i< 6){          
        const scores = document.createElement("h4");
        globalThis.scores = scores;     
        globalThis.scores.textContent = "HIGHSCORE "+[i+1]+": "+ score[i].name + ", " + score[i].correctAnswers + " Correct Answers, " + score[i].timeRemaining + " seconds left." ;
        document.body.appendChild(globalThis.scores);
        
    }
    }
    replay();
    return;
}


//Starts the game again via replay button
function replay () {
    var reset2 = document.createElement("Button");
    reset2.textContent = "REPLAY GAME"
    document.body.appendChild(reset2);
    reset2.setAttribute("style", "display: block; margin-right:auto; margin-left:auto; background-color: inherit; border-radius: 5px; color: white; cursor: pointer; font-size: 35px; padding: 10px;");
    reset2.addEventListener('click', function () {  
        globalThis.scores.setAttribute("style", "display: none")
        globalThis.scores.remove();    
        globalThis.scoreBox.remove();
        reset2.remove();        
        var questionNumber = [0,1,2,3,4,5,6,7,8,9];
        globalThis.questionNumber = questionNumber
        show(lander); 
        globalThis.timeLeft === -1;       
      });
}

//Stores Scores to local storage
function storage (){
    localStorage.setItem("scores", JSON.stringify(score))
}

//Loads scores from local storage
function loadScores (){
    const storageScores = JSON.parse(localStorage.getItem("scores"))
    if (storageScores.length > 0) {
        score = storageScores
    }
}

//Resets the game
function resetty () {
    if (globalThis.scores=0){
        globalThis.scores.remove();  
    }     
    if (globalThis.scoreBox=0){ 
        globalThis.scoreBox.remove();   
    } 
        var questionNumber = [0,1,2,3,4,5,6,7,8,9];
        globalThis.questionNumber = questionNumber
        show(lander);
        hide(quiz);
        globalThis.timeLeft = -1;

}

// Reset Button//
reset.addEventListener('click', resetty);

