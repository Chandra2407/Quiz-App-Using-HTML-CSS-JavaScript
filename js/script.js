const questions = [{
        num: 1,
        question: "Levi wants ?",
        answer: "Cleanliness",
        options: [
            "Captain Erwin",
            "Hange San",
            "Cleanliness",
            "Eren"
        ]
    },
    {
        num: 2,
        question: "Eren wants ?",
        answer: "Freedom",
        options: [
            "Mikasa",
            "Historia",
            "Jean",
            "Freedom"
        ]
    },
    {
        num: 3,
        question: "Erwin wants ?",
        answer: "Truth",
        options: [
            "Levi",
            "Commander Pixie",
            "Truth",
            "Hange San"
        ]
    },
    {
        num: 4,
        question: "Jean  wants ?",
        answer: "Mikasa",
        options: [
            "Mikasa",
            "Ymir",
            "Sasha",
            "Eren"
        ]
    },
    {
        num: 5,
        question: "Sasha wants ?",
        answer: "Food",
        options: [
            "Connie",
            "Reiner",
            "Food",
            "Truth"
        ]
    },

];

let questionCount = 0;
const ques = document.getElementById("ques");
let correct = 0;
let wrong = 0;

let op1 = document.getElementById("op1");
let op2 = document.getElementById("op2");
let op3 = document.getElementById("op3");
let op4 = document.getElementById("op4");

let cNo = document.getElementById("correct");
let wNo = document.getElementById("wrong");

let qBox = document.getElementById("mid");
let rBox = document.getElementById("items");

let scoreBox = document.getElementById("result");

let score = document.getElementById("score");

function getQuestions(i) {
    let quesText = questions[i].question;
    ques.innerHTML = quesText;

    op1.innerHTML = questions[i].options[0];
    op2.innerHTML = questions[i].options[1];
    op3.innerHTML = questions[i].options[2];
    op4.innerHTML = questions[i].options[3];

   
    const qNo = document.getElementById("qNo");

    qNo.innerHTML = questions[i].num;

    const optList = document.querySelectorAll(".option");

    for (let index = 0; index < optList.length; index++) {
        optList[index].onclick = function () {
            let userAns = questions[i].options[index];
            let correctAns = questions[i].answer;
            if (userAns == correctAns) {
                correct++;
                if (questionCount < questions.length - 1) {

                    questionCount++;
                    getQuestions(questionCount);
                } else {
                    qBox.style.display = "none";
                    rBox.style.display = "none";
                    scoreBox.style.display="flex"
                    scoreBox.style.justifyContent="center"
                    nextBtn.innerHTML = "Reload";
                    score.innerHTML = correct;
                }

            } else {
                wrong++;
                if (questionCount < questions.length - 1) {

                    questionCount++;
                    getQuestions(questionCount);
                } else {
                    qBox.style.display = "none";
                    rBox.style.display = "none";
                    scoreBox.style.display="flex"
                    scoreBox.style.justifyContent="center"
                    nextBtn.innerHTML = "Reload";
                    score.innerHTML = correct;
                    
                }

            }
        }

    }

    if (questionCount == questions.length - 1) {
        nextBtn.innerHTML = "Submit";
    }
    cNo.innerHTML = correct;
    wNo.innerHTML = wrong;
}

let nextBtn = document.getElementById("submit");

nextBtn.onclick = function () {
    if (questionCount < questions.length - 1) {

        questionCount++;
        getQuestions(questionCount);
    } else {
        questionCount=0;
        getQuestions(questionCount);

        qBox.style.display = "flex";
        rBox.style.display = "flex";
        scoreBox.style.display="none"
        nextBtn.innerHTML = "Next";
        correct=0;
        wrong=0;
        cNo.innerHTML = correct;
        wNo.innerHTML = wrong;
    }
}

getQuestions(0);