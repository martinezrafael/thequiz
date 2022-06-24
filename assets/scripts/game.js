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
        "Baby One More Time",
        "Quantos anos tinha Britney Spears quando seu hit 'Baby One More Time' foi lançado em 1998?",
        ["17", "16", "20"],
        "Música",
        "Fácil"
    ),
    createQuestion(
        "Celine Dion",
        "Qual é a outra língua que Celine Dion cantou regularmente ao longo dos anos 90?",
        ["Francês", "Espanhol", "Português"],
        "Música",
        "Fácil"
    ),
    createQuestion(
        "Música Latina",
        "Jennifer Lopez, Ricky Martin e outros contribuíram para qual movimento musical no final dos anos 90?",
        ["A Explosão Latina", "Latin Music", "Mambo Dance Music"],
        "Música",
        "Fácil"
    ),
    createQuestion(
        "Pergunta sdfsd",
        "Descrição da pergunta 4",
        ["opção 1", "opção 2", "opção 3"],
        "Filmes",
        "Fácil"
    ),
    createQuestion(
        "Pergunta sdffds",
        "Descrição da pergunta 5",
        ["opção 1", "opção 2", "opção 3"],
        "Filmes",
        "Médio"
    ),
    createQuestion(
        "Pergunta desfdd",
        "Descrição da pergunta 6",
        ["opção 1", "opção 2", "opção 3"],
        "Filmes",
        "Difícil"
    ),
    createQuestion(
        "Pergunta dfsf",
        "Descrição da pergunta 7",
        ["opção 1", "opção 2", "opção 3"],
        "Conhecimentos Gerais",
        "Fácil"
    ),
    createQuestion(
        "Pergunta dfsfs",
        "Descrição da pergunta 8",
        ["opção 1", "opção 2", "opção 3"],
        "Conhecimentos Gerais",
        "Médio"
    ),
    createQuestion(
        "Pergunta fsdf",
        "Descrição da pergunta 9",
        ["opção 1", "opção 2", "opção 3"],
        "Conhecimentos Gerais",
        "Difícil"
    ),
    createQuestion(
        "Pergunta 1dsf",
        "Descrição da pergunta 10",
        ["opção 1", "opção 2", "opção 3"],
        "Conhecimentos Gerais",
        "Difícil"
    ),
    createQuestion(
        "Pergunta sdfsf",
        "Descrição da pergunta 11",
        ["opção 1", "opção 2", "opção 3"],
        "Conhecimentos Gerais",
        "Fácil"
    ),
    createQuestion(
        "Pergunta dfggdf",
        "Descrição da pergunta 12",
        ["opção 1", "opção 2", "opção 3"],
        "Conhecimentos Gerais",
        "Fácil"
    ),
];


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
                        return `<li class='question__answer'>${answer}</li>`
                    })}
                </ul>
            </div>
        `
    })
       
}

const getAnswers = (event) => {
    let answers = createArrayDOM('.question__answer');

    answers.forEach(answer => {
        console.log(answer);
    })

}



const play = document.getElementById("btn__play");

play.addEventListener("click", (e) => {
    e.preventDefault();
    renderArr();
    getAnswers();
});