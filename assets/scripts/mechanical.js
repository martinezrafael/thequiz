"use strict";
//eu tenho um array de perguntas

//as perguntas são classificadas por genero e nível de dificuldade

//para filtrar as perguntas, o usuário deve selecionar no campo de level e categrias a sua escolha

//as perguntas serão renderizadas de acordo com a escolha
//por exemplo
//se usuário escolhe level fácil e categoria cinema, as pergunbtas renderizadas devem seguir esse critério nos seus atributos correspondentes

//aqui eu tenho o meu array de perguntas
const questions = [
    {
        title: "Pergunta 1",
        description: "Descrição da pergunta 1",
        answers: ["opção 1", "opção 2", "opção 3"],
        genre: "music",
        dificultty: "easy",
    },
    {
        title: "Pergunta 2",
        description: "Descrição da pergunta 2",
        answers: ["opção 1", "opção 2", "opção 3"],
        genre: "movie",
        dificultty: "medium",
    },
    {
        title: "Pergunta 3",
        description: "Descrição da pergunta 3",
        answers: ["opção 1", "opção 2", "opção 3"],
        genre: "music",
        dificultty: "medium",
    },
    {
        title: "Pergunta 4",
        description: "Descrição da pergunta 4",
        answers: ["opção 1", "opção 2", "opção 3"],
        genre: "movie",
        dificultty: "easy",
    },
];

//opções de level que o usuário pode selecionar
const difficulties = document.querySelectorAll(".dificultty__item");

//opção de dificuldade que o usuário selecionou
let dificultty = '';

/*funcão que identifica a opção que o usuario selecionou
e coloca o valor na variavel dificultty*/
const selectDificultty = () => {
    for (let difficultyOption of difficulties) {
        if (difficultyOption.selected) {
            dificultty = difficultyOption.value;
        }
    }

    console.log(dificultty);
};

//opções de categorias que o usuário pode selecionar
const themes = document.querySelectorAll('.theme__item');

//opção de tema que o usuário selecionou
let theme = '';

/*funcão que identifica o tema que o usuario selecionou
e coloca o valor na variavel theme*/
const selectTheme = () => {
    for (let themeOption of themes) {
        if(themeOption.checked) {
            theme = themeOption.value;
        }
    }

    console.log(theme)
}



const play = () => {
    selectDificultty();
    selectTheme();
}