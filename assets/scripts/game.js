"use strict";

const questions = [
    // MUSICA FACIL
    {
        description: 'No início da carrreira, a cantora Beyoncé fazia parte de um grupo musical. Qual o nome do grupo?',
        answers:['Destiny Child','Pussycat Dolls','Fifth Harmony'],
        theme: 'music',
        dificultty: 'easy',
        correctAnswer: 'alternative-0',
    },
    {
        description: 'As canções do Zeca Pagodinho pertencem a qual gênero?',
        answers:['Mistura Samba e Pagode','Pagode, óbvio!','Samba! Sim, uma grande ironia'],
        theme: 'music',
        dificultty: 'easy',
        correctAnswer: 'alternative-2',
    },
    {
        description: 'Como são chamados os artistas de K-pop?',
        answers:['Idols','Cantores','Dolls'],
        theme: 'music',
        dificultty: 'easy',
        correctAnswer: 'alternative-0',
    },
    {
        description: 'Qual o nome da irmã do Caetano Veloso?',
        answers:['Maria Bethânia','Gal Costa','Elba Ramalho'],
        theme: 'music',
        dificultty: 'easy',
        correctAnswer: 'alternative-0',
    },
    {
        description: 'Descrição da Pergunta 5 sobre música',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'music',
        dificultty: 'easy',
        correctAnswer: 'alternative-0',
    },
    // MUSICA MEDIO
    {
        description: 'Quantos álbuns foram gravados pelo cantor Roberto Carlos?',
        answers:['41 álbuns','23 álbuns','Mais de 100 álbuns'],
        theme: 'music',
        dificultty: 'medium',
        correctAnswer: 'alternative-0',
    },
    {
        description: 'Qual a música mais tocada no mundo?',
        answers:['Yesterday','Garota de Ipanema','Thriller'],
        theme: 'music',
        dificultty: 'medium',
        correctAnswer: 'alternative-0',
    },
    {
        description: 'Qual o verdadeiro nome do Fred Mercury da banda Queen?',
        answers:['Farrokh Bulsara','Dembe Zuma','Frederick Taylor'],
        theme: 'music',
        dificultty: 'medium',
        correctAnswer: 'alternative-0',
    },
    {
        description: 'De quem era o apartamento onde aconteciam os encontros que deram origem a MPB?',
        answers:['Nara Leão','João Gilberto','Vinicius de Moraes'],
        theme: 'music',
        dificultty: 'medium',
        correctAnswer: 'alternative-0',
    },
    {
        description: 'Descrição da Pergunta 5 sobre música',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'music',
        dificultty: 'medium',
        correctAnswer: 'alternative-0',
    },
    // MUSICA DIFICIL
    {
        description: 'Qual o maior ídolo musical da Anitta?',
        answers:['Mariah Carey','Rihanna','Beyoncé'],
        theme: 'music',
        dificultty: 'hard',
        correctAnswer: 'alternative-0',
    },
    {
        description: 'Com qual hit a cantora Carmen Miranda estorou no início da sua Carreira?',
        answers:['Tai','Camisa Listada','O que é que a Baiana Tem?'],
        theme: 'music',
        dificultty: 'hard',
        correctAnswer: 'alternative-0',
    },
    {
        description: 'Qual o nome do primeiro baixista da banda Beatles?',
        answers:['Stuart Sutcliffe','Pete Best','Brian Epstein'],
        theme: 'music',
        dificultty: 'hard',
        correctAnswer: 'alternative-0',
    },
    {
        description: 'Sabe quando uma música não sai da sua cabeça? Qual o nome desse efeito?',
        answers:['Coceira Cerebral','Efeito Chiclete','Vício Sonoro'],
        theme: 'music',
        dificultty: 'hard',
        correctAnswer: 'alternative-0',
    },
    {
        description: 'Descrição da Pergunta 5 sobre música',
        answers:['Primeira opção','Segunda opção','Terceira opção'],
        theme: 'music',
        dificultty: 'hard',
        correctAnswer: 'alternative-0',
    },
    // CINEMA FÁCIL
    {
        description: 'No filme Procurando Nemo 1, como acontece a morte da mãe do Nemo no início do filme?',
        answers:['Comida por um peixe com dentes afiados','Com um choque de água viva','Bala perdida'],
        theme: 'movies',
        dificultty: 'easy',
        correctAnswer: 'alternative-0',
    },
    {
        description: 'Qual era a doença de Dori em procurando Nemo 1?',
        answers:['Perda de memória recente','Perda de memória Involuntária','Perda de memória temporária'],
        theme: 'movies',
        dificultty: 'easy',
        correctAnswer: 'alternative-0',
    },
    {
        description: 'No filme O Rei Leão, qual era o nome do filho do rei?',
        answers:['Simba','Mufasa','Scar'],
        theme: 'movies',
        dificultty: 'easy',
        correctAnswer: 'alternative-0',
    },
    {
        description: 'Qual é o nome do gato que aparece no filme Shrek?',
        answers:['Gato de calças','Gato de botas','Gato feliz'],
        theme: 'movies',
        dificultty: 'easy',
        correctAnswer: 'alternative-1',
    },
    {
        description: 'No filme o poderoso chefão, qual é o nome completo de Don Corleone?',
        answers:['Vito Antonio Andolini','Vito Andolini','Vito Antonio Corleone'],
        theme: 'movies',
        dificultty: 'easy',
        correctAnswer: 'alternative-0',
    },
    // FILMES MEDIO
    {
        description: 'No filme Resident Evil: O Hóspede Maldito, Qual o nome verdadeiro da Alice na vida real?',
        answers:['Michaela Dicker','Liz May Brice','Michele Rodriguez'],
        theme: 'movies',
        dificultty: 'medium',
        correctAnswer: 'alternative-2',
    },
    {
        description: 'Em Pânico 2, onde Randy Meeks é atacado e morto?',
        answers:['Na casa de Sidney','Na van de emissora de TV','Em sua casa'],
        theme: 'movies',
        dificultty: 'medium',
        correctAnswer: 'alternative-1',
    },
    {
        description: 'Quem interpreta Peter Parker respectivamente em "Homem Aranha" e "O Espetacular Homem Aranha"?',
        answers:['Tobey Maguire e Andrew Garfield','Tobey Maguire e Anton Yelchin','Aaron Johnson e Andrew Garfield'],
        theme: 'movies',
        dificultty: 'medium',
        correctAnswer: 'alternative-0',
    },
    {
        description: 'Em que país o Titanic foi construído?',
        answers:['Estados Unidos','Irlanda','Inglaterra'],
        theme: 'movies',
        dificultty: 'medium',
        correctAnswer: 'alternative-1',
    },
    {
        description: 'Em Alice no País das Maravilhas I, Como Alice pode acordar de um pesadelo?',
        answers:['Puxando os cabelos','Dando se um Tapa','Dando se um Beliscão'],
        theme: 'movies',
        dificultty: 'medium',
        correctAnswer: 'alternative-2',
    },
    // FILME DIFICIL
    {
        description: 'Em Transformers: O Último Cavaleiro I, Como se chama o novo Autobot que possui um sotaque francês?',
        answers:['Hot Rod','Hurricane-Bot','Bulldog'],
        theme: 'movies',
        dificultty: 'hard',
        correctAnswer: 'alternative-0',
    },
    {
        description: 'Qual o nome do protagonista de Atividade Paranormal: Marcados pelo Mal?',
        answers:['Hector','Juan','Jesse'],
        theme: 'movies',
        dificultty: 'hard',
        correctAnswer: 'alternative-2',
    },
    {
        description: 'Em Lilo & Stitc I, Por que Lilo chega atrasada na aula de hula-hula?',
        answers:['Porque ela foi na vendinha.','Porque ela não queria ir pra aula.','Porque ela estava surfando.'],
        theme: 'movies',
        dificultty: 'hard',
        correctAnswer: 'alternative-0',
    },
    {
        description: 'Como se chama o primeiro filme da saga "O Senhor Dos Anéis" (The Lord of the Rings)?',
        answers:['A Sociedade Hobbit','A Sociedade do Anel','A Extinção'],
        theme: 'movies',
        dificultty: 'hard',
        correctAnswer: 'alternative-1',
    },
    {
        description: 'Quem dirigiu o filme "Avatar"?',
        answers:['Steven Spielberg','Ridley Scott','James Cameron'],
        theme: 'movies',
        dificultty: 'hard',
        correctAnswer: 'alternative-2',
    },
    // CONHECIMENTOS GERAIS FACIL
    {
        description: 'Quem escreveu a famosa frase "Penso, logo existo" ?',
        answers:['Platão','Descartes','Sócrates'],
        theme: 'general_knowledge',
        dificultty: 'easy',
        correctAnswer: 'alternative-1',
    },
    {
        description: 'Em qual pais foi inventado o chuveiro elétrico?',
        answers:['França','Brasil','Inglaterra'],
        theme: 'general_knowledge',
        dificultty: 'easy',
        correctAnswer: 'alternative-1',
    },
    {
        description: 'Qual o menor país do mundo?',
        answers:['Vaticano','Malta','São Marino'],
        theme: 'general_knowledge',
        dificultty: 'easy',
        correctAnswer: 'alternative-0',
    },
    {
        description: 'Quem foi o presidente do Brasil que ficou conhecido como Jango?',
        answers:['Getúlio Vargas','Jânio Quadros','João Goulart'],
        theme: 'general_knowledge',
        dificultty: 'easy',
        correctAnswer: 'alternative-2',
    },
    {
        description: 'Depois da Bíblia, qual é o livro mais vendido no mundo?',
        answers:['Dom Quixote','Harry Potter','O Pequeno Prícipe'],
        theme: 'general_knowledge',
        dificultty: 'easy',
        correctAnswer: 'alternative-0',
    },
    // CONHECIMENTOS GERAIS MÉDIO
    {
        description: 'Quantas casas decimais possui o número pi?',
        answers:['Vinte','Infinitas','Milhares'],
        theme: 'general_knowledge',
        dificultty: 'medium',
        correctAnswer: 'alternative-1',
    },
    {
        description: 'A tabela periódica é formada por quantos elementos?',
        answers:['118','100','76'],
        theme: 'general_knowledge',
        dificultty: 'medium',
        correctAnswer: 'alternative-0',
    },
    {
        description: 'Qual o país que possui a maior expectativa de vida do mundo?',
        answers:['Itália','Japão','Austrália'],
        theme: 'general_knowledge',
        dificultty: 'medium',
        correctAnswer: 'alternative-1',
    },
    {
        description: 'Qual a tradução da palavra legend em portugês?',
        answers:['Lenda','Legenda','História'],
        theme: 'general_knowledge',
        dificultty: 'medium',
        correctAnswer: 'alternative-0',
    },
    {
        description: 'Qual é o mínimo de jogadores de futebol que é necessário em uma partida?',
        answers:['10','7','9'],
        theme: 'general_knowledge',
        dificultty: 'medium',
        correctAnswer: 'alternative-1',
    },
    // CONHECIMENTOS GERAIS DIFICIL
    {
        description: 'Quem foram os principais autores do Barroco no Brasil?',
        answers:['Gregório de Matos, Bento Teixeira e Manuel Botelho de Oliveira',' Castro Alves, Bento Teixeira e Manuel Botelho de Oliveira','Álvares de Azevedo, Gregório de Matos e Bento Teixeira'],
        theme: 'general_knowledge',
        dificultty: 'hard',
        correctAnswer: 'alternative-0',
    },
    {
        description: 'Quem pintou Guernica?',
        answers:['Cléber Bambam','Pablo Picasso','Salvador Dalí'],
        theme: 'general_knowledge',
        dificultty: 'hard',
        correctAnswer: 'alternative-1',
    },
    {
        description: 'Em quanto tempo a luz do sol chega na terra?',
        answers:['12 minutos','8 minutos','3 minutos'],
        theme: 'general_knowledge',
        dificultty: 'hard',
        correctAnswer: 'alternative-1',
    },
    {
        description: 'Qual a nacionalidade de Che Guevara?',
        answers:['Cubana','Argentina','Boliviana'],
        theme: 'general_knowledge',
        dificultty: 'hard',
        correctAnswer: 'alternative-1',
    },
    {
        description: 'Qual personagem folclórico costuma ser agradado pelos caçadores com a oferta de fumo?',
        answers:['Saci','Caipora','Boitatá'],
        theme: 'general_knowledge',
        dificultty: 'hard',
        correctAnswer: 'alternative-1',
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

