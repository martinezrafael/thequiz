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



let container = document.getElementById('questions__container');
let clickCount = 0;
let score = 0;


const createArrayDOM = (className) => {
    return document.querySelectorAll(className);
}

const difficulties = createArrayDOM(".dificultty__item");
const themes = createArrayDOM(".theme__item");

const getItemArrDOM = (arr) => {
    let itemSelected = '';

    arr.forEach(item => {
        if (item.selected) {
            itemSelected = item.value;
        }

    })

    return itemSelected;
}

const filterQuestions = (arr) => {

    let newArr = [];

    for (let indexElement of arr) {
        if (indexElement.dificultty === getItemArrDOM(difficulties) && indexElement.theme === getItemArrDOM(themes)) {
            newArr.push(indexElement)
        } 
    }

   return newArr;
}

const createQuestion = (callback) => {

    let container = document.getElementById('questions__container');

    container.innerHTML = callback.map((question, questionIndex) => {
       return `
        <div class='question'>
            <h2 class='questions__title'>${question.title}</h2>
            <p class='questions__description'>${question.description}</p>
            <ul>
                ${question.answers.map((answer, index) => {
                    return `<li class='question__answer question-${questionIndex} alternative-${index}' onClick='checkAnswer(event)'>${answer}</li>`
                })}
            </ul>
        </div>
       `
    })
}

const disabledQuestion = (event) => {
    let clickedAnswer = event.target;

    if (clickedAnswer) {
        let getQuestion = event.target.parentNode;
        getQuestion.style.pointerEvents = 'none';
        getQuestion.style.opacity = '0.4';
    }

    
}



const reset = () => {
    btnReset.addEventListener('click', () => {
        location.reload();
    })
}

const showScore = () => {
    if (clickCount >= 10) {
        if (score >= 0 && score < 100) {
           container.innerHTML = `
            <div>
                <h2>Não foi desta vez, você fez apenas ${score} pontos!</h2>

                <div>
                    <div style="width:100%;height:0;padding-bottom:83%;position:relative;"><iframe src="https://giphy.com/embed/lWPpTGShahMiGD58Sx" width="80%" height="500" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/theoffice-lWPpTGShahMiGD58Sx">via GIPHY</a></p>
                    </div>
            </div>
           `
        } else if (score >= 100) {
            container.innerHTML = `
            <div>
                <h2>Uhull que sucesso, você fez ${score} pontos!</h2>

                <div>
                    <div style="width:100%;height:0;padding-bottom:83%;position:relative;"><iframe src="https://giphy.com/embed/o75ajIFH0QnQC3nCeD" width="80%" height="500" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/theoffice-o75ajIFH0QnQC3nCeD">via GIPHY</a></p>
                </div>
           `
        }
    }

    
};



const checkClicked = (target) => {
    if (target) {
        clickCount++;
        console.log(clickCount);
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

