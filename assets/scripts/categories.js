//nível de dificuldade
let levels = document.querySelectorAll(".levelItem");

let difficulty = "";

const selectLevel = () => {
    for (level of levels) {
        if (level.selected) {
            difficulty = level.value;
        }
    }

    console.log(difficulty);
};

//categorias
let categories = document.querySelectorAll(".categorieItem");

let theme = "";

const selectCategory = (event) => {
    for (category of categories) {
        if (category.checked) {
            theme = category.value;
        }
    }

    console.log(theme);
};

const play = () => {
    selectLevel();
    selectCategory();
};
