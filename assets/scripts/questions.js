"use strict";

const questions = [
    {
        title: "pergunta 1",
        description: "descrição da pergunta 1",
        answers: ["opção 1", "opção 2", "opção 3"],
        genre: "music",
        dificultty: "easy",
    },
    {
        title: "pergunta 2",
        description: "descrição da pergunta 2",
        answers: ["opção 1", "opção 2", "opção 3"],
        genre: "music",
        dificultty: "medium",
    },
];

questions.forEach(question => {
    let title = document.createElement('h2');
    title.innerText = question.title;
    console.log(title)
})

