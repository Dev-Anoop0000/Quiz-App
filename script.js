const quizData = [{
    question: 'Who is the father of HTML ?',
    a: 'Rasmus Lerdorf',
    b: 'Tim Berners-Lee',
    c: 'Brendan Eich',
    d: 'Sergey Brin',
    correct: "b"
}, {
    question: 'HTML stands for __________ .',
    a: 'HyperText Markup Language',
    b: 'HyperText Machine Language',
    c: 'HyperText Marking Language',
    d: 'HighText Marking Language',
    correct: "a"
}, {
    question: 'Which of the following is not a HTML5 tag ?',
    a: '<track>',
    b: '<video>',
    c: '<slider>',
    d: '<source>',
    correct: "c"
}, {
    question: 'Which works similar to <b> element ?',
    a: '<blockquote>',
    b: '<strong>',
    c: '<em>',
    d: '<i>',
    correct: "b"
}, {
    question: 'Which of the following is an Internet Protocol ?',
    a: 'FTP',
    b: 'TCP/IP',
    c: 'EFT',
    d: 'EDI',
    correct: "b"
}, {
    question: 'Whats so great about XML?',
    a: 'Easy data exchange',
    b: 'High speed on network',
    c: 'Only B.is correct',
    d: 'Both A & B',
    correct: "d"
}]

const questionEL = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');


let currentQuestion = 0;
let currentQuiz = 0;
let answer = undefined;
let score = 0;
loadQuiz();

function loadQuiz() {

    deselectAnswer();

    const currentQuizData = quizData[currentQuiz];

    questionEL.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    // currentQuestion++;
}

function getselected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswer() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });

}


submitBtn.addEventListener("click", () => {

    // check to see answer//
    const answer = getselected();
    console.log(answer);
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }


        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at  ${score}/${quizData.length} questions.</h2> <button onclick="location.reload()">Reload</button>`;
        }
    }
});