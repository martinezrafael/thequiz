"use strict"; 

const createQuestion = (title, description, answers, theme, dificultty) => {
    return {
        title: title,
        description: description,
        answers: answers,
        theme: theme,
        dificultty: dificultty
    }
}

const questions = [
    createQuestion(
        "Pergunta 1",
        "Descrição da pergunta 1",
        ["opção 1", "opção 2", "opção 3"],
        "Música",
        "Fácil"
    ),
    createQuestion(
        "Pergunta 2",
        "Descrição da pergunta 2",
        ["opção 1", "opção 2", "opção 3"],
        "Música",
        "Médio"
    ),
    createQuestion(
        "Pergunta 3",
        "Descrição da pergunta 3",
        ["opção 1", "opção 2", "opção 3"],
        "Música",
        "Difícil"
    ),
    createQuestion(
        "Pergunta 4",
        "Descrição da pergunta 4",
        ["opção 1", "opção 2", "opção 3"],
        "Filmes",
        "Fácil"
    ),
    createQuestion(
        "Pergunta 5",
        "Descrição da pergunta 5",
        ["opção 1", "opção 2", "opção 3"],
        "Filmes",
        "Médio"
    ),
    createQuestion(
        "Pergunta 6",
        "Descrição da pergunta 6",
        ["opção 1", "opção 2", "opção 3"],
        "Filmes",
        "Difícil"
    ),
    createQuestion(
        "Pergunta 7",
        "Descrição da pergunta 7",
        ["opção 1", "opção 2", "opção 3"],
        "Conhecimentos Gerais",
        "Fácil"
    ),
    createQuestion(
        "Pergunta 8",
        "Descrição da pergunta 8",
        ["opção 1", "opção 2", "opção 3"],
        "Conhecimentos Gerais",
        "Médio"
    ),
    createQuestion(
        "Pergunta 9",
        "Descrição da pergunta 9",
        ["opção 1", "opção 2", "opção 3"],
        "Conhecimentos Gerais",
        "Difícil"
    ),
    createQuestion(
        "Pergunta 10",
        "Descrição da pergunta 10",
        ["opção 1", "opção 2", "opção 3"],
        "Conhecimentos Gerais",
        "Difícil"
    ),
    createQuestion(
        "Pergunta 11",
        "Descrição da pergunta 11",
        ["opção 1", "opção 2", "opção 3"],
        "Conhecimentos Gerais",
        "Fácil"
    ),
    createQuestion(
        "Pergunta 12",
        "Descrição da pergunta 12",
        ["opção 1", "opção 2", "opção 3"],
        "Conhecimentos Gerais",
        "Fácil"
    ),
];



const upper = (str) => {
    return str.toUpperCase();
}

const createArrayDOM = (className) => {
    return document.querySelectorAll(className);
}

const difficulties = createArrayDOM(".dificultty__item")
const themes = createArrayDOM(".theme__item");

const getItemArrDOM = (arr) => {
    let itemSelected = ''

    arr.forEach(item => {
        if (item.selected) {
            itemSelected = item.value;
        }

    })

    return itemSelected;
}

const filterArr = (arr) => {

    let newArr = [];

    for (let indexElement of arr) {
        if (indexElement.dificultty === getItemArrDOM(difficulties) && indexElement.theme === getItemArrDOM(themes)) {
            newArr.push(indexElement)
        }
    }

    return newArr;
}

const renderArr = () => {
    let newArr = filterArr(questions);
    let container = document.getElementById('questions__container')

    container.innerHTML = newArr.map(element => {
         return  `
            <div>
                <h2 class='question__title'>${element.title}</h2>
                <p class='question__description'>${element.description}</p>
                <ul class='question__answers'>
                    ${element.answers.map(answer => {
                        return `<li class='question__answer'><a href='#'>${answer}</a></li>`
                    })}
                </ul>
                <div class='question__footer'>
                    <span class='question__tag'>${upper(element.theme)}</span> |
                    <span class='question__tag'>${upper(element.dificultty)}</span>
                </div>
            </div>
        `
    })
       
}

// questions.forEach(question => {
//     question.dificultty = 'default';
//     console.log(question);
// })


const play = document.getElementById("btn__play");

play.addEventListener("click", (e) => {
    e.preventDefault();
    renderArr();
});