const firebaseConfig = {
  apiKey: "AIzaSyBEBpyzYafwoRXW0IPo1gnBUOv2OBjXZ5A",
  authDomain: "quizapp-b0161.firebaseapp.com",
  projectId: "quizapp-b0161",
  storageBucket: "quizapp-b0161.appspot.com",
  messagingSenderId: "694383467875",
  appId: "1:694383467875:web:41dd0bffde134726984756",
};
const app = firebase.initializeApp(firebaseConfig);

questionsArray = [
  {
    question: "Why do JavaScript and Java have similar names?",
    answer: "JavaScript's syntax is loosely based on Java's",
    options: [
      "JavaScript is a stripped-down version of Java",
      "JavaScript's syntax is loosely based on Java's",
      "They both originated on the island of Java",
      "None of the above",
    ],
  },
  {
    question:
      "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    answer: "The User's machine running a Web browser",
    options: [
      "The User's machine running a Web browser",
      "The Web server",
      "A central machine deep within Netscape's corporate offices",
      "None of the above",
    ],
  },
  {
    question: "______ JavaScript is also called client-side JavaScript.",
    answer: "Navigator",
    options: ["Microsoft", "Navigator", "LiveWire", "Native"],
  },
  {
    question: "__________ JavaScript is also called server-side JavaScript.",
    answer: "LiveWire",
    options: ["Microsoft", "Navigator", "LiveWire", "Native"],
  },
  {
    question: "What are variables used for in JavaScript Programs?",
    answer: "Storing numbers, dates, or other values",
    options: [
      "Storing numbers, dates, or other values",
      "Varying randomly",
      "Causing high-school algebra flashbacks",
      "None of the above",
    ],
  },
  {
    question:
      "_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
    answer: "Client-side",
    options: ["Client-side", "Server-side", "Local", "Native"],
  },
  {
    question:
      "Which of the following can't be done with client-side JavaScript?",
    answer: "Storing the form's contents to a database file on the server",
    options: [
      "Validating a form",
      "Sending a form's contents by email",
      "Storing the form's contents to a database file on the server",
      "None of the above",
    ],
  },
  {
    question:
      "Which of the following are capabilities of functions in JavaScript?",
    answer: "Accept parameters",
    options: [
      "Return a value",
      "Accept parameters and Return a value",
      "Accept parameters",
      "None of the above",
    ],
  },
  {
    question: "Which of the following is not a valid JavaScript variable name?",
    answer: "2names",
    options: [
      "2names",
      "_first_and_last_names",
      "FirstAndLast",
      "None of the above",
    ],
  },
  {
    question:
      "Which of the following attribute can hold the JavaScript version?",
    answer: "LANGUAGE",
    options: ["LANGUAGE", "SCRIPT", "VERSION", "None of the above"],
  },
];

firebase.database().ref("questions").push(questionsArray);

alert(
  "NOTE : You have 5 minutes to complete the quiz. You time starts now. Good Luck !"
);

// ------------------//////////--------------//////////--------------------/////////////////-------------------//////////////////-------------//
// SHOWING THE QUESTION

function showQues(e) {
  var ques = document.getElementById("ques");
  ques = ques.innerHTML = "Q" + (e + 1) + ")" + questionsArray[e].question;
  var options = document.getElementsByClassName("label");
  for (var i = 0; i < options.length; i++) {
    options[i].innerHTML = questionsArray[e].options[i];
  }
}

// ------------------//////////--------------//////////--------------------/////////////////-------------------//////////////////------------//
// FOR THE INCREMENTATION OF COUNT ANS

count = 0;
score = 0;

// ------------------//////////--------------//////////--------------------/////////////////-------------------//////////////////-------------//
// CHECKING IF ANSWER IS CORRECT OR NOT

function calc() {
  var radios = document.getElementsByClassName("radiobtn");
  var option = document.getElementsByClassName("label");
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked == true) {
      if (option[i].innerHTML == questionsArray[count].answer) {
        score++;
      }
    }
  }
}

// ------------------//////////--------------//////////--------------------/////////////////-------------------//////////////////-------------//
// SHOWING NEXT QUESTION TO USER

function nextQues() {
  calc();
  var radios = document.getElementsByClassName("radiobtn");
  if (count < questionsArray.length - 1) {
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked == true) {
        count++;
        showQues(count);
        radios[i].checked = false;
      }
    }
  } else {
    alert("your score is " + score + "/10");
    var main = document.getElementsByClassName("main");
    main[0].innerHTML = "";
  }
}
// firebase.database().ref("User Score").child("/userScore").push(score);

// ------------------//////////--------------//////////--------------------/////////////////-------------------//////////////////-------------//
// COUNTER UPADATION

// Set the duration of the countdown in minutes
const durationInMinutes = 5;

// Calculate the total number of seconds for the countdown
const durationInSeconds = durationInMinutes * 60;

// Get the DOM element that will display the countdown
const countdownDisplay = document.getElementById("f1");

// Start the countdown
let secondsRemaining = durationInSeconds;
const countdownInterval = setInterval(() => {
  // Calculate the minutes and seconds remaining
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  // Display the remaining time in the countdown element
  countdownDisplay.textContent = `${minutes}:${seconds
    .toString()
    .padStart(2, "0")}`;

  // Decrement the remaining time by 1 second
  secondsRemaining--;

  // If the countdown is finished, stop the interval
  if (secondsRemaining < 0) {
    clearInterval(countdownInterval);
    // countdownDisplay.textContent = "0:00";
    var body = document.getElementById("quiz").innerHTML = "Thank you for your response.";
  }
}, 1000);
