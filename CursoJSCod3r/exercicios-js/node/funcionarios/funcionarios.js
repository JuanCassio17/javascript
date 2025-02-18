const axios = require('axios')
const url = 'https://jsonplaceholder.typicode.com/todos/1' // o json do professor não rodou

// desafio

const chineses = f => f.pais === "China"
const mulheres = f => f.genero === "F"
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

// o módulo "axios" permite fazer requisições http

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios);

    const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)

    console.log(func);
})