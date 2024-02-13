const perguntas = [
    {
      pergunta: "O que significa a sigla 'DOM' em JavaScript?",
      respostas: [
        "Document Object Model",
        "Data Output Mechanism",
        "Digital Object Management",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Comparação de valores apenas",
        "Comparação de tipos apenas",
        "Comparação de valores e tipos",
      ],
      correta: 2
    },
    {
      pergunta: "Como você declara uma variável constante em JavaScript?",
      respostas: [
        "const x = 10;",
        "let y = 5;",
        "var z = 'constante';",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o evento 'onmouseover'?",
      respostas: [
        "Um evento que ocorre quando o mouse é pressionado",
        "Um evento que ocorre quando o mouse sai de um elemento",
        "Um evento que ocorre quando o mouse passa sobre um elemento",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a finalidade do método 'charAt()' em JavaScript?",
      respostas: [
        "Retornar o primeiro caractere de uma string",
        "Inserir um caractere em uma posição específica de uma string",
        "Contar o número de caracteres em uma string",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o conceito de 'hoisting' em JavaScript?",
      respostas: [
        "Uma técnica para manipular elementos HTML",
        "O ato de mover declarações para o topo de um escopo",
        "Um método para ocultar variáveis em funções",
      ],
      correta: 1
    },
    {
      pergunta: "Como você converte uma string para um número inteiro em JavaScript?",
      respostas: [
        "parseInt('42')",
        "parseFloat('42')",
        "Number('42')",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
      respostas: [
        "'null' representa a ausência de valor, enquanto 'undefined' representa uma variável não inicializada",
        "'undefined' representa a ausência de valor, enquanto 'null' representa uma variável não inicializada",
        "Ambos representam a ausência de valor, mas são usados em contextos diferentes",
      ],
      correta: 0
    },
    {
      pergunta: "O que faz o operador '&&' em JavaScript?",
      respostas: [
        "Realiza a adição de dois valores",
        "Realiza a concatenação de duas strings",
        "Realiza a operação lógica 'E' entre dois valores",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'slice()' em JavaScript?",
      respostas: [
        "Remover elementos do início de um array",
        "Criar uma cópia de parte de uma string ou array",
        "Adicionar elementos ao final de um array",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
      //arrow function (tomar cuidado com as chaves, que aqui representam o escopo de uma função e não atraleado a um objeto)
      dt.querySelector('input').onchange = (event) => {
       const estaCorreta = event.target.value == item.correta
  
       corretas.delete(item)
       if(estaCorreta) {
         corretas.add(item)
       }
  
       mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
    
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  
  
