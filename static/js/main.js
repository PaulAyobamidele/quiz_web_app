const quizData = [
    {
        question: "A stick 60cm long is cut at 40cm mark, what is the ratio of the length of the two pieces?",
        a: "2:3",
        b: "1:3",
        c: "1:2",
        d: "2:5",
        e: "1:4",
        correct: "a",
    },
    {
        question: "If x = 2*2*2*2*3*3, the square root of x is?",
        a: "2*2*2*3",
        b: "2*2*3",
        c: "2*3",
        d: "2*2*2*3*3",
        e: "2*3*3",
        correct: "b",
    },
    {
        question: "Convert 13.7806 to two significant figures",
        a: "13.79",
        b: "13.77",
        c: "14.78",
        d: "14.79",
        e: "14.00",
        correct: "a",
    },
    {
        question: "What is the place value of 1 in the number 1989",
        a: "10,000",
        b: "1,000",
        c: "100",
        d: "10",
        e: "1",
        correct: "b",
    },
    {
        question: "What is the missing number from the operation 2835 - 17?6 = 1049",
        a: "9",
        b: "8",
        c: "7",
        d: "4",
        e: "1",
        correct: "b",
    },
    {
        question: "A student doing 100m race fell down at 80m mark. What percentage of the distance was not completed",
        a: "80%",
        b: "75%",
        c: "25%",
        d: "20%",
        e: "10%",
        correct: "d",
    },
    {
        question: "Express 378/10000 as a decimal fraction was not completed",
        a: "3750",
        b: "37.80",
        c: "3.78",
        d: "0.378",
        e: "0.0378",
        correct: "d",
    },
    {
        question: "By how much is 183.78 greater than 18.99",
        a: "202.77",
        b: "164.89",
        c: "164.79",
        d: "163.89",
        e: "20",
        correct: "c",
    },
    {
        question: "An Isosceles triangle has how many equal sides?",
        a: "2",
        b: "4",
        c: "3",
        d: "5",
        e: "1",
        correct: "c",
    },
    {
        question: "What is the area of a rectangle",
        a: "l*b",
        b: "b*h*b",
        c: "b2*l3",
        d: "l+b",
        e: "1/2 + l",
        correct: "a",
    },
    {
        question: "I will visit you _______ you insist",
        a: "and",
        b: "that",
        c: "but",
        d: "so",
        e: "if",
        correct: "e",
    },
    {
        question: "I was reading an interesting story when the bell _______",
        a: "was ring",
        b: "ring",
        c: "ringing",
        d: "rang",
        e: "rings",
        correct: "d",
    },
    {
        question: "We were having a good time at the zoo when it _______ to rain ",
        a: "was begining",
        b: "beginning",
        c: "began",
        d: "begins",
        e: "begin",
        correct: "c",
    },
    {
        question: "Your book is different _______ ours",
        a: "by",
        b: "with",
        c: "to",
        d: "for",
        e: "from",
        correct: "e",
    },
    {
        question: "The girl is pretty _______? ",
        a: "does she",
        b: "mightn't she",
        c: "is she",
        d: "oughtn't she",
        e: "isn't she",
        correct: "e",
    },
    {
        question: "The sound in the forest FRIGHTENED me",
        a: "scared me",
        b: "tamed me",
        c: "relieved me",
        d: "made me sick",
        e: "killed me",
        correct: "a",
    },
    {
        question: "Building a modern house is very DIFFICULT",
        a: "expensive",
        b: "hard",
        c: "disturbing",
        d: "unrealistic",
        e: "easy",
        correct: "b",
    },
    {
        question: "Mr. Mohammed is a POPULAR teacher",
        a: "humble",
        b: "proud",
        c: "easy",
        d: "well known",
        e: "great",
        correct: "d",
    },
    {
        question: "Our captain was noted for his BRAVERY ",
        a: "cowardice",
        b: "loyalty",
        c: "galantry",
        d: "uprightness",
        e: "wickedness",
        correct: "c",
    },
    {
        question: "The villagers moved GRADUALLY to the advancing troop",
        a: "movingly",
        b: "angrily",
        c: "carefully",
        d: "quickly",
        e: "slowly",
        correct: "e",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    e_text.innerText = currentQuizData.e;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();
    var myVar = document.getElementById("myVar").value;

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <p> ${myVar}, you answered ${score} out of ${quizData.length} questions correctly. Please logout</p>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});

// Set the timer for 20 minutes
let countDownDate = new Date().getTime() + (20 * 60 * 1000);
var myVar = document.getElementById("myVar").value;
// Update the count down every second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the countdown date
  let distance = countDownDate - now;
  // Time calculations for minutes and seconds
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown timer in a HTML element
  document.getElementById("countdown").innerHTML = minutes + ":" + seconds;

  
  // If the countdown is finished, redirect the page to another URL
  if (distance <= 0) {
    clearInterval(x);
    document.getElementById("submit").disabled = true; 
    document.getElementById("a").disabled = true;
    document.getElementById("b").disabled = true;
    document.getElementById("c").disabled = true;
    document.getElementById("d").disabled = true;
    document.getElementById("e").disabled = true;
    document.getElementById("countdown").innerHTML = "STOP";
    document.getElementById("score").innerHTML = `<p> ${myVar}, you answered ${score} out of ${quizData.length} questions correctly. Please logout</p>`

  }
}, 1000); // Update the countdown every second (1000 ms)


