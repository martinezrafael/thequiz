"use strict";

//nível de dificuldade
let difficulties = document.querySelectorAll(".levelItem");

let difficulty = "";

const selectLevel = () => {
    for (let difficultyOption of difficulties) {
        if (difficultyOption.selected) {
            difficulty = difficultyOption.value;
        }
    }

    console.log(difficulty);
};

//categorias
let themes = document.querySelectorAll(".categorieItem");

let theme = "";

const selectCategory = () => {
    for (let themeOption of themes) {
        if (themeOption.checked) {
            theme = themeOption.value;
        }
    }

    console.log(theme);
};

const play = () => {
    selectLevel();
    selectCategory();
};
