"use strict";

const questions = [
    {
        title: 'Pergunta 1',
        description: 'Descrição da Pergunta 1',
        answers:['opcao 1','opcao 2','opcao 3'],
        theme: 'music',
        dificultty: 'easy',
        correctAnswer: 'alternative-0'

    },
    {
        title: 'Pergunta 2',
        description: 'Descrição da Pergunta 2',
        answers:['opcao 1','opcao 2','opcao 3'],
        theme: 'music',
        dificultty: 'medium',
        correctAnswer: 'alternative-1'

    },
    {
        title: 'Pergunta 3',
        description: 'Descrição da Pergunta 3',
        answers:['opcao 1','opcao 2','opcao 3'],
        theme: 'music',
        dificultty: 'hard',
        correctAnswer: 'alternative-2'

    }
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



const createQuestionElement = (callback) => {
    let receivedCallback = callback
    let container = document.getElementById('questions__container');

    container.innerHTML = receivedCallback.map((element) => {
        return `
            <div class='question'>
                <h2 class='question__title'>${element.title}</h2>
                <p class='question__description'>${element.description}</p>
                <ul class='question__answers'>
                    ${callback.map(answer => {
                        return `<li>${answer}</li>`
                    })}
                </ul>
            </div>
        
        `
    });
    
}


const renderQuestionElement = (callback) => {
    setTimeout(() => {
        createQuestionElement(filterQuestions(questions))
    }, 600);
   
}

const play = document.getElementById("btn__play")

play.addEventListener("click", (e) => {
    e.preventDefault();
    renderQuestionElement();
});



//verificando as respostas selecionadas e atribuindo a pontruação

//perguntas renderizadas

//pegar o value do target e verificar se é igual ao answerCorrect

//mas precisa pegar tamb´´em o index do target e o index da pergunta

