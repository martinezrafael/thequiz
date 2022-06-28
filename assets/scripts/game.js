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
        correctAnswer: 'alternative-2'

    },
    {
        title: 'Pergunta 3 - Música',
        description: 'Descrição da Pergunta 3',
        answers:['opcao 7','opcao 8','opcao 9'],
        theme: 'music',
        dificultty: 'default',
        correctAnswer: 'alternative-3'

    },
    {
        title: 'Pergunta 3',
        description: 'Descrição da Pergunta 3',
        answers:['opcao 10','opcao 11','opcao 12'],
        theme: 'music',
        dificultty: 'default',
        correctAnswer: 'alternative-1'

    },
    {
        title: 'Pergunta 4',
        description: 'Descrição da Pergunta 3',
        answers:['opcao 10','opcao 11','opcao 12'],
        theme: 'music',
        dificultty: 'default',
        correctAnswer: 'alternative-1'

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


const checkAnswer = (event) => {

    let targetClass = event.target.className;

    let targetQuestionClass = Number(targetClass.split(' ')[1].split('-')[1]);
    let targetAnswerClass = targetClass.split(' ')[2];

    questions.forEach((question, index) => {
        question.index = index;
        
        if (question.index === targetQuestionClass && question.correctAnswer === targetAnswerClass) {
            return true;
        } else {
            return false;
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

