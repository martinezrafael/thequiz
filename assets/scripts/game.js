"use strict";

//funcao que retorna uma pergunta
const createQuestion = (title, description, answers, theme, dificultty, correctAnswer) => {
    return {
        title: title,
        description: description,
        answers: answers,
        theme: theme,
        dificultty: dificultty,
        correctAnswer: correctAnswer
    }
}

//array de perguntas criadas com a funcao createQuestion
const questions = [
    createQuestion(
        "Baby One More Time",
        "Quantos anos tinha Britney Spears quando seu hit 'Baby One More Time' foi lançado em 1998?",
        ["17", "16", "20"],
        "music",
        "easy",
        "alternative-1"
    ),
    createQuestion(
        "Celine Dion",
        "Qual é a outra língua que Celine Dion cantou regularmente ao longo dos anos 90?",
        ["Francês", "Espanhol", "Português"],
        "music",
        "easy",
        "Francês"
    ),
    createQuestion(
        "Música Latina",
        "Jennifer Lopez, Ricky Martin e outros contribuíram para qual movimento musical no final dos anos 90?",
        ["A Explosão Latina", "Latin Music", "Mambo Dance Music"],
        "music",
        "easy"
    ),
    createQuestion(
        "Pergunta sdfsd",
        "Descrição da pergunta 4",
        ["opção 1", "opção 2", "opção 3"],
        "music",
        "easy"
    ),
    createQuestion(
        "Pergunta sdffds",
        "Descrição da pergunta 5",
        ["opção 1", "opção 2", "opção 3"],
        "movies",
        "medium"
    ),
    createQuestion(
        "Pergunta desfdd",
        "Descrição da pergunta 6",
        ["opção 1", "opção 2", "opção 3"],
        "movies",
        "hard"
    ),
    createQuestion(
        "Pergunta dfsf",
        "Descrição da pergunta 7",
        ["opção 1", "opção 2", "opção 3"],
        "general_knowledge",
        "easy"
    ),
    createQuestion(
        "Pergunta dfsfs",
        "Descrição da pergunta 8",
        ["opção 1", "opção 2", "opção 3"],
        "general_knowledge",
        "medium"
    ),
    createQuestion(
        "Pergunta fsdf",
        "Descrição da pergunta 9",
        ["opção 1", "opção 2", "opção 3"],
        "general_knowledge",
        "hard"
    ),
    createQuestion(
        "Pergunta 1dsf",
        "Descrição da pergunta 10",
        ["opção 1", "opção 2", "opção 3"],
        "general_knowledge",
        "hard"
    ),
    createQuestion(
        "Pergunta sdfsf",
        "Descrição da pergunta 11",
        ["opção 1", "opção 2", "opção 3"],
        "general_knowledge",
        "easy"
    ),
    createQuestion(
        "Pergunta dfggdf",
        "Descrição da pergunta 12",
        ["opção 1", "opção 2", "opção 3"],
        "general_knowledge",
        "easy"
    ),
];

//funcao que cria um arrai com o que retorna da manipulação DOM com querySelectorAll através da classe do elemento
const createArrayDOM = (className) => {
    return document.querySelectorAll(className);
}

//instancias da função createArrayDOM, criando arrays com os níveis de dificuldade e temas que o usuário pode escolher
const difficulties = createArrayDOM(".dificultty__item");
const themes = createArrayDOM(".theme__item");

//funcao que identifica quais items o usuário selecionou dentro de um array criado com a funcao createArrayDOM
const getItemArrDOM = (arr) => {
    let itemSelected = '';

    arr.forEach(item => {
        if (item.selected) {
            itemSelected = item.value;
        }

    })

    return itemSelected;
}

//funcao que filtra as perguntas no array de perguntas de acordo com o tema e o nível de dificuldade que o usuário escolheu
const filterQuestions = (arr) => {

    let newArr = [];

    for (let indexElement of arr) {
        if (indexElement.dificultty === getItemArrDOM(difficulties) && indexElement.theme === getItemArrDOM(themes)) {
            newArr.push(indexElement)
        } 
    }

   return newArr;
}


const createAnswersElement = (arr, questionIndex) => {
    let answer = '';

    arr.forEach((element, index) => {
        answer += `<li class='question__answer answer-${index} question-${questionIndex}'>${element.answers}</li>`
    })

    return answer;
}


const createQuestionElement = (callback) => {
    let receivedCallback = callback
    let container = document.getElementById('questions__container');

    container.innerHTML = receivedCallback.map(element => {
        return `
            <div class='question'>
                <h2 class='question__title'>${element.title}</h2>
                <p class='question__description'>${element.description}</p>
                <ul class='question__answers'>${element.answers.map(answer => `<li class='question__answer' onClick='checkAnswer(event)'>${answer}</li>`)}</ul>
            </div>
        
        `
    });
    
}


const renderQuestionElement = (callback) => {
    setTimeout(() => {
        createQuestionElement(filterQuestions(questions))
    }, 600);
}


const play = document.getElementById("btn__play");

play.addEventListener("click", (e) => {
    e.preventDefault();
    renderQuestionElement();
});



//verificando as respostas selecionadas e atribuindo a pontruação

//perguntas renderizadas




