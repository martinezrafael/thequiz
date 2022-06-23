"use strict"; 

//questions
const questions = [
    {
        title: "Pergunta 1",
        description: "Descrição da pergunta 1",
        answers: ["opção 1", "opção 2", "opção 3"],
        theme: "music",
        dificultty: "easy",
    },
    {
        title: "Pergunta 2",
        description: "Descrição da pergunta 2",
        answers: ["opção 1", "opção 2", "opção 3"],
        theme: "music",
        dificultty: "medium",
    },
    {
        title: "Pergunta 3",
        description: "Descrição da pergunta 3",
        answers: ["opção 1", "opção 2", "opção 3"],
        theme: "music",
        dificultty: "hard",
    },
    {
        title: "Pergunta 4",
        description: "Descrição da pergunta 4",
        answers: ["opção 1", "opção 2", "opção 3"],
        theme: "movie",
        dificultty: "easy",
    },
    {
        title: "Pergunta 5",
        description: "Descrição da pergunta 5",
        answers: ["opção 1", "opção 2", "opção 3"],
        theme: "movie",
        dificultty: "medium",
    },
    {
        title: "Pergunta 6",
        description: "Descrição da pergunta 6",
        answers: ["opção 1", "opção 2", "opção 3"],
        theme: "movie",
        dificultty: "hard",
    },
    {
        title: "Pergunta 7",
        description: "Descrição da pergunta 7",
        answers: ["opção 1", "opção 2", "opção 3"],
        theme: "knowledge",
        dificultty: "easy",
    },
    {
        title: "Pergunta 8",
        description: "Descrição da pergunta 8",
        answers: ["opção 1", "opção 2", "opção 3"],
        theme: "knowledge",
        dificultty: "medium",
    },
    {
        title: "Pergunta 9",
        description: "Descrição da pergunta 9",
        answers: ["opção 1", "opção 2", "opção 3"],
        theme: "knowledge",
        dificultty: "hard",
    },
    {
        title: "Pergunta 10",
        description: "Descrição da pergunta 10",
        answers: ["opção 1", "opção 2", "opção 3"],
        theme: "knowledge",
        dificultty: "hard",
    },
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
                        return`<li class='question__answer'><a href='#'>${answer}</a></li>`
                    })}
                </ul>
                <div class='question__footer'>
                    <span class='question__tag'>${element.theme}</span>
                    <span class='question__tag'>${element.dificultty}</span>
                </div>
            </div>
        `
    })
       
}


const play = document.getElementById("btn__play");

play.addEventListener("click", (e) => {
    e.preventDefault();
    renderArr();
});