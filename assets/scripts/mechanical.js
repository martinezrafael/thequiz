"use strict";

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
];

const createAnArray = (className) => {
    return document.querySelectorAll(className);
}

// const traverseTheArray = (arr, value) => {
//     for (element of arr) {
//         if (element.selected) {
//             value = element.value;
//         }
//     }
// }

const difficulties = createAnArray(".dificultty__item")
let dificultty = "";



const selectDificultty = () => {
    for (let difficultyOption of difficulties) {
        if (difficultyOption.selected) {
            dificultty = difficultyOption.value;
        }
    }
};

const themes = createAnArray(".theme__item");
let theme = "";


const selectTheme = () => {
    for (let themeOption of themes) {
        if (themeOption.checked) {
            theme = themeOption.value;
        }
    }
};


const getDificulttyAndTheme = (question) => {
    selectDificultty();
    selectTheme();
    return (
        question.dificultty === `${dificultty}` && question.theme === `${theme}`
    );
};

const filterQuestions = (filter) => {
    let filteredQuestions = [];

    for (let question of questions) {
        if (filter(question)) {
            filteredQuestions.push(question);
        }
    }

    return filteredQuestions;
};


const renderQuestions = () => {
    let error = dificultty !== "default" ? null : "Algo de errado não está certo";

    let checkedDificultty = dificultty === 'easy' || dificultty === 'medium' || dificultty === 'hard' ? true : false;
    
    let checkedTheme = theme === 'music' || theme === 'movie' || theme === 'knowledge' ? true : false;

    let returnFiltered = console.log(filterQuestions(getDificulttyAndTheme));

    checkedDificultty && checkedTheme ? returnFiltered : error;
};


const btnPlay = document.getElementById("btn__play");


btnPlay.addEventListener("click", (e) => {
    e.preventDefault();
    renderQuestions();
});