"use strict";

const questions = [
    // MUSICA FACIL
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 1 sobre música',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'music',
        dificultty: 'easy',
        correctAnswer: 'alternative-0',
    },
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 2 sobre música',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'music',
        dificultty: 'easy',
        correctAnswer: 'alternative-0',
    },
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 3 sobre música',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'music',
        dificultty: 'easy',
        correctAnswer: 'alternative-0',
    },
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 4 sobre música',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'music',
        dificultty: 'easy',
        correctAnswer: 'alternative-0',
    },
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 5 sobre música',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'music',
        dificultty: 'easy',
        correctAnswer: 'alternative-0',
    },
    // MUSICA MEDIO
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 1 sobre música',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'music',
        dificultty: 'medium',
        correctAnswer: 'alternative-0',
    },
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 2 sobre música',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'music',
        dificultty: 'medium',
        correctAnswer: 'alternative-0',
    },
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 3 sobre música',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'music',
        dificultty: 'medium',
        correctAnswer: 'alternative-0',
    },
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 4 sobre música',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'music',
        dificultty: 'medium',
        correctAnswer: 'alternative-0',
    },
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 5 sobre música',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'music',
        dificultty: 'medium',
        correctAnswer: 'alternative-0',
    },
    // MUSICA DIFICIL
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 1 sobre música',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'music',
        dificultty: 'hard',
        correctAnswer: 'alternative-0',
    },
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 2 sobre música',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'music',
        dificultty: 'hard',
        correctAnswer: 'alternative-0',
    },
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 3 sobre música',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'music',
        dificultty: 'hard',
        correctAnswer: 'alternative-0',
    },
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 4 sobre música',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'music',
        dificultty: 'hard',
        correctAnswer: 'alternative-0',
    },
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 5 sobre música',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'music',
        dificultty: 'hard',
        correctAnswer: 'alternative-0',
    },
    // CINEMA FÁCIL
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 1 sobre filmes',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'movies',
        dificultty: 'easy',
        correctAnswer: 'alternative-0',
    },
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 2 sobre filmes',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'movies',
        dificultty: 'easy',
        correctAnswer: 'alternative-0',
    },
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 3 sobre filmes',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'movies',
        dificultty: 'easy',
        correctAnswer: 'alternative-0',
    },
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 4 sobre filmes',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'movies',
        dificultty: 'easy',
        correctAnswer: 'alternative-0',
    },
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 5 sobre filmes',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'movies',
        dificultty: 'easy',
        correctAnswer: 'alternative-0',
    },
    // FILMES MEDIO
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 1 sobre filmes',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'movies',
        dificultty: 'medium',
        correctAnswer: 'alternative-0',
    },
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 2 sobre filmes',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'movies',
        dificultty: 'medium',
        correctAnswer: 'alternative-0',
    },
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 3 sobre filmes',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'movies',
        dificultty: 'medium',
        correctAnswer: 'alternative-0',
    },
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 4 sobre filmes',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'movies',
        dificultty: 'medium',
        correctAnswer: 'alternative-0',
    },
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 5 sobre filmes',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'movies',
        dificultty: 'medium',
        correctAnswer: 'alternative-0',
    },
    // FILME DIFICIL
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 1 sobre filmes',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'movies',
        dificultty: 'hard',
        correctAnswer: 'alternative-0',
    },
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 2 sobre filmes',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'movies',
        dificultty: 'hard',
        correctAnswer: 'alternative-0',
    },
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 3 sobre filmes',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'movies',
        dificultty: 'hard',
        correctAnswer: 'alternative-0',
    },
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 4 sobre filmes',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'movies',
        dificultty: 'hard',
        correctAnswer: 'alternative-0',
    },
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 5 sobre filmes',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'movies',
        dificultty: 'hard',
        correctAnswer: 'alternative-0',
    },
    // CONHECIMENTOS GERAIS FACIL
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 1 sobre conhecimentos gerais',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'general_knowledge',
        dificultty: 'easy',
        correctAnswer: 'alternative-0',
    },
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 2 sobre conhecimentos gerais',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'general_knowledge',
        dificultty: 'easy',
        correctAnswer: 'alternative-0',
    },
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 3 sobre conhecimentos gerais',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'general_knowledge',
        dificultty: 'easy',
        correctAnswer: 'alternative-0',
    },
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 4 sobre conhecimentos gerais',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'general_knowledge',
        dificultty: 'easy',
        correctAnswer: 'alternative-0',
    },
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 5 sobre conhecimentos gerais',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'general_knowledge',
        dificultty: 'easy',
        correctAnswer: 'alternative-0',
    },
    // CONHECIMENTOS GERAIS MÉDIO
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 1 sobre conhecimentos gerais',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'general_knowledge',
        dificultty: 'medium',
        correctAnswer: 'alternative-0',
    },
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 2 sobre conhecimentos gerais',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'general_knowledge',
        dificultty: 'medium',
        correctAnswer: 'alternative-0',
    },
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 3 sobre conhecimentos gerais',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'general_knowledge',
        dificultty: 'medium',
        correctAnswer: 'alternative-0',
    },
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 4 sobre conhecimentos gerais',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'general_knowledge',
        dificultty: 'medium',
        correctAnswer: 'alternative-0',
    },
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 5 sobre conhecimentos gerais',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'general_knowledge',
        dificultty: 'medium',
        correctAnswer: 'alternative-0',
    },
    // CONHECIMENTOS GERAIS DIFICIL
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 1 sobre conhecimentos gerais',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'general_knowledge',
        dificultty: 'hard',
        correctAnswer: 'alternative-0',
    },
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 2 sobre conhecimentos gerais',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'general_knowledge',
        dificultty: 'hard',
        correctAnswer: 'alternative-0',
    },
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 3 sobre conhecimentos gerais',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'general_knowledge',
        dificultty: 'hard',
        correctAnswer: 'alternative-0',
    },
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 4 sobre conhecimentos gerais',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'general_knowledge',
        dificultty: 'hard',
        correctAnswer: 'alternative-0',
    },
    {
        title: 'Pergunta',
        description: 'Descrição da Pergunta 5 sobre conhecimentos gerais',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'general_knowledge',
        dificultty: 'hard',
        correctAnswer: 'alternative-0',
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
            <h2 class='question__title'>${question.title} ${questionIndex + 1} - ${question.theme}</h2>
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

    if (clickCount >= 5) {
        if (score >= 0 && score < 60) {
           container.innerHTML = `
            <div class='gameOver'>
                <h2>Não foi dessa vez :(</h2>
                <p>Você precisava fazer no mínimo 60 pontos e sua pontuação foi de ${score}.</p>
                <button onClick='reset()' class='btn__reset'>Jogar novamente</button>
            </div>
           `
        } else if (score >= 60) {
            container.innerHTML = `
            <div class='gameOver'>
                <h2>Uhuul, você é um sucesso!</h2>
                <p>Você precisava fazer no mínimo 60 pontos e sua pontuação foi de ${score}.</p>
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
          score += 20;
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

