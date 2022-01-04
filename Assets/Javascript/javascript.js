//Javascript for Code Quiz//

var questionNumber = [0,1,2,3,4,5,6,7,8,9]
var question = ["Question 1","Question 2", "Question 3","Question 4", "Question 5","Question 6", "Question 7", "Question 8", "Question 9", "Question 10"];
var answerA = ["Answer 1","Answer 1", "Answer 1","Answer 1", "Answer 1","Answer 1", "Answer 1", "Answer 1", "Answer 1", "Answer 1"];
var answerB = ["Answer 2","Answer 2", "Answer 2","Answer 2", "Answer 2","Answer 2", "Answer 2", "Answer 2", "Answer 2", "Answer 2"];
var answerC = ["Answer 3","Answer 3", "Answer 3","Answer 3", "Answer 3","Answer 3", "Answer 3", "Answer 3", "Answer 3", "Answer 3"];
var answerD = ["Answer 4","Answer 4", "Answer 4","Answer 4", "Answer 4","Answer 4", "Answer 4", "Answer 4", "Answer 4", "Answer 4"];
var randomChoice = "";
var timerEl = document.getElementById('timer');
var answerKey =["Answer 4","Answer 3", "Answer 2","Answer 4", "Answer 1","Answer 2", "Answer 4", "Answer 1", "Answer 2", "Answer 3"]
var buttl = document.getElementById('button1');
var butt2 = document.getElementById('button2');
var butt3 = document.getElementById('button3');
var butt4 = document.getElementById('button4');
var questionText = document.getElementById('questions')

if (confirm("Would you like to play the Coding Quiz?") == true) {
    countdown();
}

function loadQuestions () {
   
    questionText.textContent = question[randomChoice]; 
    buttl.innerHTML = answerA[randomChoice];
    butt2.textContent = answerB[randomChoice];
    butt3.textContent = answerC[randomChoice];
    butt4.textContent = answerD[randomChoice]; 
}

function randomNumber () {
    var randomChoice = questionNumber[Math.floor(Math.random ()*questionNumber.length)];
    index = questionNumber.indexOf(randomChoice)
    if (index > -1) {
        questionNumber.splice(index,1);
    }

    // Remove these before submission//
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

loadQuestions ();

function countdown() {
    var timeLeft = 100;
   
    var timeInterval = setInterval(function () {
      timeLeft--;
      timerEl.textContent = "Time Remaining: " + timeLeft;
  
      if(timeLeft === 0) {      
        clearInterval(timeInterval);      
        displayMessage(); //link to highscores page//
      }
         
    },1000);
}

// const button = document.querySelector('button');
// addEventListener('click', () => {
//     var clickedAnswer = 'button'.textContent 

//     console.log (clickedAnswer);
// })


// passwordBtnEl.on('click', function () {
//     var newPassword = passwordGenerator(15);
//     passwordBtnEl.text(newPassword);
//   });
  
  
//   var passwordBtnEl = $('#password-btn');
//   var passwordDisplayEl = $('#password-display');
  
  
//  HTML <main>
//   <h1>Password Generator</h1>
//   <h2>Click on the button to get started!</h2>
//   <hr/>
  
//   <pre class="text-dark bg-light p-5" id="password-display">Password will go here...</pre>
//   <button id="password-btn" class="btn btn-block btn-info ">Generate Password</button>
//   </main>