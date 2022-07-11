"use strict";

const questions = [
    {
        title: 'Pergunta 1 - Música',
        description: 'Descrição da Pergunta 1',
        answers:['opcao 1','opcao 2','opcao 3'],
        theme: 'music',
        dificultty: 'default',
        correctAnswer: 'alternative-0',
    },
    {
        title: 'Pergunta 2 - Música',
        description: 'Descrição da Pergunta 2',
        answers:['opcao 4','opcao 5','opcao 6'],
        theme: 'music',
        dificultty: 'default',
        correctAnswer: 'alternative-0'

    },
    {
        title: 'Pergunta 3 - Música',
        description: 'Descrição da Pergunta 3',
        answers:['opcao 7','opcao 8','opcao 9'],
        theme: 'music',
        dificultty: 'default',
        correctAnswer: 'alternative-0'

    },
    {
        title: 'Pergunta 4',
        description: 'Descrição da Pergunta 4',
        answers:['opcao 10','opcao 11','opcao 12'],
        theme: 'music',
        dificultty: 'default',
        correctAnswer: 'alternative-0'

    },
    {
        title: 'Pergunta 5',
        description: 'Descrição da Pergunta 5',
        answers:['opcao 10','opcao 11','opcao 12'],
        theme: 'music',
        dificultty: 'default',
        correctAnswer: 'alternative-0'

    },
    {
        title: 'Pergunta 6',
        description: 'Descrição da Pergunta 6',
        answers:['opcao 10','opcao 11','opcao 12'],
        theme: 'music',
        dificultty: 'default',
        correctAnswer: 'alternative-0'

    },
    {
        title: 'Pergunta 7',
        description: 'Descrição da Pergunta 7',
        answers:['opcao 10','opcao 11','opcao 12'],
        theme: 'music',
        dificultty: 'default',
        correctAnswer: 'alternative-0'

    },
    {
        title: 'Pergunta 8',
        description: 'Descrição da Pergunta 8',
        answers:['opcao 10','opcao 11','opcao 12'],
        theme: 'music',
        dificultty: 'default',
        correctAnswer: 'alternative-0'

    },
    {
        title: 'Pergunta 9',
        description: 'Descrição da Pergunta 9',
        answers:['opcao 10','opcao 11','opcao 12'],
        theme: 'music',
        dificultty: 'default',
        correctAnswer: 'alternative-0'

    },
    {
        title: 'Pergunta 10',
        description: 'Descrição da Pergunta 10',
        answers:['opcao 10','opcao 11','opcao 12'],
        theme: 'music',
        dificultty: 'default',
        correctAnswer: 'alternative-0'

    },
]

//conta quantas vezes o usuário clicou nas perguntas
let clickCount = 0;

//recebe a soma das pontuações a cada acerto
let score = 0;

//cria um array com os itens trazidos na manipulação do DOM através da classe
const createArrayDOM = (className) => {
    return document.querySelectorAll(className);
}

//cria dois arrays, utilizando a função anterior
//os dados trazidos nesses arrays são os níveis de dificuldade e os temas
const difficulties = createArrayDOM(".dificultty__item");
const themes = createArrayDOM(".theme__item");

//função que identifica qual item dos arrays anteriores foi selecionado
const getItemArrDOM = (arr) => {
    let itemSelected = '';

    arr.forEach(item => {
        if (item.selected) {
            itemSelected = item.value;
        }

    })

    return itemSelected;
}

//função que filtra as perguntas de acordo com o nivel de dificuldade e tema selecionados
const filterQuestions = (arr) => {

    let newArr = [];

    for (let indexElement of arr) {
        if (indexElement.dificultty === getItemArrDOM(difficulties) && indexElement.theme === getItemArrDOM(themes)) {
            newArr.push(indexElement)
        } 
    }

   return newArr;
}

//função que recebe o resultado da função filterQuestions e monta as perguntas no HTML
const createQuestion = (callback) => {

    let container = document.getElementById('questions__container');

    container.innerHTML = callback.map((question, questionIndex) => {
       return `
        <div class='question'>
            <h2 class='question__title'>${question.title}</h2>
            <p class='question__description'>${question.description}</p>
            <ul>
                ${question.answers.map((answer, index) => {
                    return `<li class='question__answer question-${questionIndex} alternative-${index}' onClick='checkAnswer(event)'>${answer}</li>`
                })}
            </ul>
        </div>
       `
    })
}


//funcão que desabilita a pergunta quando uma das respostas é clicada
const disabledQuestion = (event) => {
    let clickedAnswer = event.target;

    if (clickedAnswer) {
        let getQuestion = event.target.parentNode;
        getQuestion.style.pointerEvents = 'none';
        getQuestion.style.opacity = '0.4';
    }

    
}

const hiddenFields = () => {
    let difficultyField = document.getElementById('options');
    difficultyField.style.display = 'none';
}

const showScore = () => {

    let container = document.getElementById('questions__container');

    if (clickCount >= 10) {
        if (score >= 0 && score < 70) {
           container.innerHTML = `
            <div class='gameOver'>
                <h2>Não foi dessa vez :(</h2>
                <p>Você precisava fazer no mínimo 70 pontos e sua pontuação foi de ${score}.</p>
                <button onClick='reset()' class='btn__reset'>Jogar novamente</button>
            </div>
           `
        } else if (score >= 70) {
            container.innerHTML = `
            <div class='gameOver'>
                <h2>Uhuul, você é um sucesso!</h2>
                <p>Você precisava fazer no mínimo 70 pontos e sua pontuação foi de ${score}.</p>
                <button onClick='reset()' class='btn__reset'>Jogar novamente</button>
            </div>
            `
            
            
        }
        hiddenFields();
        play.style.display = 'none';
    }
};


const reset = () => {
    location.reload();
}

const checkClicked = (target) => {
    if (target) {
        clickCount++;
    }
}

const checkAnswer = (event) => {

    let targetClass = event.target.className;

    let targetQuestionClass = Number(targetClass.split(' ')[1].split('-')[1]);
    let targetAnswerClass = targetClass.split(' ')[2];

   checkClicked(targetAnswerClass);
   disabledQuestion(event);

    questions.forEach((question, index) => {

        question.index = index;
        
        if (question.index === targetQuestionClass && question.correctAnswer === targetAnswerClass) {
          score += 10;
        }
    })

    showScore(score);
}

const renderQuestionElement = (callback) => {
    setTimeout(() => {
        createQuestion(filterQuestions(questions))
    }, 600);
   
}

const play = document.getElementById("btn__play")

play.addEventListener("click", (e) => {
    e.preventDefault();
    renderQuestionElement();
});

