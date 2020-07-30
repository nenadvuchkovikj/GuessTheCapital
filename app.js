const playBtn = document.querySelector('#play-btn');
const IntroContainer = document.querySelector('.intro-container');
const QuestionContainer = document.querySelector('.question-container');
const Container = document.querySelector('.container');
const questionEl = document.querySelector('#question');
const AnswerBtns = document.querySelector('#answer-buttons');
const nextBtn = document.querySelector('#next');
const header = document.getElementById('header');
const scoreBoard = document.querySelector('.scoreboard');

const showScore = document.querySelector('.the-score');
const correctAns = document.querySelector('.correct-answers');


let counter = 0;
let shuffledQuestions;
let currentQuestion;
let questionsNum = 0;


window.addEventListener('load', () =>{
    Container.style.transform += 'scale(1)';
})

playBtn.addEventListener('click', () => {
    IntroContainer.classList.add('hide');
    QuestionContainer.classList.remove('hide');
    Container.style.transform += 'rotateY(360deg)';
    currentQuestion = 0;
    counter = 0;
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    questionNum = shuffledQuestions.length;
    showScore.textContent = `Question: ${currentQuestion +1} / ${questionNum}`;
    correctAns.textContent = `Correct Answers: ${counter}`;
    nextQuestion();
});
nextBtn.addEventListener('click',() =>{
    nextBtn.disabled = true;
    setTimeout(()=>{
        currentQuestion++;
        showScore.textContent = `Question: ${currentQuestion +1} / ${questionNum}`;
        correctAns.textContent = `Correct Answers: ${counter}`;
        nextQuestion();
        nextBtn.disabled = false;
    },700);
    Container.style.transform += 'rotateY(360deg)';
   
})

function nextQuestion(){
    nextBtn.classList.add('hide');
    while(AnswerBtns.firstChild){
        AnswerBtns.removeChild(AnswerBtns.firstChild);
    }
    showQuestion(shuffledQuestions[currentQuestion])
}

function showQuestion(question){
    console.log
    questionEl.innerText = question.question;
    const shuffledAnswers = question.answers.sort(() => Math.random() - 0.5);
    shuffledAnswers.forEach(answer =>{
      
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer)
        AnswerBtns.appendChild(button);
    })
}

function selectAnswer(element){
    const selected = element.target;
    const correct = selected.dataset.correct;
    selected.style.backgroundColor = '#d4d453';
    if(correct){
        counter ++;
    } 
    Array.from(AnswerBtns.children).forEach(button =>{
        button.disabled = true;
    })
    setTimeout(()=>{
        if(correct){
            selected.style.backgroundColor = 'rgb(34, 114, 34)';
        } else{
            selected.style.backgroundColor = 'rgb(209, 65, 65)';
            Array.from(AnswerBtns.children).forEach(button =>{
                if(button.dataset.correct){
                    button.style.backgroundColor = 'rgb(34, 114, 34)';
                }
            })
        }
    if(shuffledQuestions.length > currentQuestion + 1){
        nextBtn.classList.remove('hide');
    } else{
        setTimeout(()=>{
            setTimeout(()=>{
                IntroContainer.classList.remove('hide');
            },1000)
            QuestionContainer.classList.add('hide');
            Container.style.transform += 'rotateY(360deg)';

            if(scoreBoard.firstChild){
                scoreBoard.removeChild(scoreBoard.firstChild);
            }
            const score = document.createElement('p');
            score.textContent = `${counter} / ${questionNum}`;
            scoreBoard.appendChild(score);

            playBtn.innerText = 'Restart';
            header.textContent = 'Game Over';
        },1000);
    }
    }, 1000);
}





