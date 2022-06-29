"use strict";

const questions = [
    {
        title: 'Pergunta 1 - Música',
        description: 'Descrição da Pergunta 1',
        answers:['opcao 1','opcao 2','opcao 3'],
        theme: 'music',
        dificultty: 'default',
        correctAnswer: 'alternative-0',
    },
    {
        title: 'Pergunta 2 - Música',
        description: 'Descrição da Pergunta 2',
        answers:['opcao 4','opcao 5','opcao 6'],
        theme: 'music',
        dificultty: 'default',
        correctAnswer: 'alternative-0'

    },
    {
        title: 'Pergunta 3 - Música',
        description: 'Descrição da Pergunta 3',
        answers:['opcao 7','opcao 8','opcao 9'],
        theme: 'music',
        dificultty: 'default',
        correctAnswer: 'alternative-0'

    },
    {
        title: 'Pergunta 4',
        description: 'Descrição da Pergunta 4',
        answers:['opcao 10','opcao 11','opcao 12'],
        theme: 'music',
        dificultty: 'default',
        correctAnswer: 'alternative-0'

    },
    {
        title: 'Pergunta 5',
        description: 'Descrição da Pergunta 5',
        answers:['opcao 10','opcao 11','opcao 12'],
        theme: 'music',
        dificultty: 'default',
        correctAnswer: 'alternative-0'

    },
    {
        title: 'Pergunta 6',
        description: 'Descrição da Pergunta 6',
        answers:['opcao 10','opcao 11','opcao 12'],
        theme: 'music',
        dificultty: 'default',
        correctAnswer: 'alternative-0'

    },
    {
        title: 'Pergunta 7',
        description: 'Descrição da Pergunta 7',
        answers:['opcao 10','opcao 11','opcao 12'],
        theme: 'music',
        dificultty: 'default',
        correctAnswer: 'alternative-0'

    },
    {
        title: 'Pergunta 8',
        description: 'Descrição da Pergunta 8',
        answers:['opcao 10','opcao 11','opcao 12'],
        theme: 'music',
        dificultty: 'default',
        correctAnswer: 'alternative-0'

    },
    {
        title: 'Pergunta 9',
        description: 'Descrição da Pergunta 9',
        answers:['opcao 10','opcao 11','opcao 12'],
        theme: 'music',
        dificultty: 'default',
        correctAnswer: 'alternative-0'

    },
    {
        title: 'Pergunta 10',
        description: 'Descrição da Pergunta 10',
        answers:['opcao 10','opcao 11','opcao 12'],
        theme: 'music',
        dificultty: 'default',
        correctAnswer: 'alternative-0'

    },
]



const createArrayDOM = (className) => {
    return document.querySelectorAll(className);
}

const difficulties = createArrayDOM(".dificultty__item");
const themes = createArrayDOM(".theme__item");

const getItemArrDOM = (arr) => {
    let itemSelected = '';

    arr.forEach(item => {
        if (item.selected) {
            itemSelected = item.value;
        }

    })

    return itemSelected;
}

const filterQuestions = (arr) => {

    let newArr = [];

    for (let indexElement of arr) {
        if (indexElement.dificultty === getItemArrDOM(difficulties) && indexElement.theme === getItemArrDOM(themes)) {
            newArr.push(indexElement)
        } 
    }

   return newArr;
}

const createQuestion = (callback) => {

    let container = document.getElementById('questions__container');

    container.innerHTML = callback.map((question, questionIndex) => {
       return `
        <div class='question'>
            <h2 class='questions__title'>${question.title}</h2>
            <p class='questions__description'>${question.description}</p>
            <ul>
                ${question.answers.map((answer, index) => {
                    return `<li class='question__answer question-${questionIndex} alternative-${index}' onClick='checkAnswer(event)'>${answer}</li>`
                })}
            </ul>
        </div>
       `
    })
}

const disabledQuestion = (event) => {
    let clickedAnswer = event.target;

    if (clickedAnswer) {
        let getQuestion = event.target.parentNode;
        getQuestion.style.pointerEvents = 'none';
        getQuestion.style.opacity = '0.4';
        getQuestion.style.cursor = 'none';
    }
    
}

let score = 0;

const showScore = () => {
    let initialScore = document.getElementById('score__container');
    initialScore.innerHTML = `<span>Você já fez ${score} pontos!</span>`;

    let container = document.getElementById('questions__container');

    if (score === 100) {
        container.innerHTML = `<div>
            <h2>Uau! você fez ${score} pontos! Você é um vencedor!</h2>
            <div style="width:100%;height:0;padding-bottom:100%;position:relative;">
                <iframe src="https://giphy.com/embed/lnyPptAfGwHeTdoQDk" width="60%" height="400" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </div>
        </div>`;

        initialScore.style.display = 'none';
    }
    
}

const checkAnswer = (event) => {

    let targetClass = event.target.className;

    let targetQuestionClass = Number(targetClass.split(' ')[1].split('-')[1]);
    let targetAnswerClass = targetClass.split(' ')[2];
  
   disabledQuestion(event);

    questions.forEach((question, index) => {

        question.index = index;
        
        if (question.index === targetQuestionClass && question.correctAnswer === targetAnswerClass) {
          score += 10;
          showScore(score);
        } 
    })

   

}

const renderQuestionElement = (callback) => {
    setTimeout(() => {
        createQuestion(filterQuestions(questions))
    }, 600);
   
}

const play = document.getElementById("btn__play")

play.addEventListener("click", (e) => {
    e.preventDefault();
    renderQuestionElement();
});

