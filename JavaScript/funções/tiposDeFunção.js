/*function nome(parametros){
    //instruções
    return //valor de retorno
}

//função anônima
const somas = function (a, b) { 
    return a + b;
} //a função não possui nome, foi armazenada em uma variável

somas(1, 2) //3
somas(5, 4)

//função auto invocável - IIFE

(
    function(){
        let name = "Digital Innovation One"
        return name
    }
)() //assim que o código for executado a função será executada também

(
    function(a, b){
        return a + b
    }
)(1, 2) //ela também pode receber parâmetros

const soma3 = (
    function(){
        return a + b
    }
)(1, 2) //do mesmo modo, pode ser armazenada em uma variável

console.log(soma3)
*/

//Callbacks
//função passada como argumento para outra função
const calc = function(operacao, num1, num2){
    return operacao(num1, num2)
}

const soma = function(num1, num2){
    return num1 + num2
}

const sub = function(num1, num2){
    return num1 - num2
}

console.log(calc(sub, 1, 2)) // -1
console.log(calc(soma, 1, 2)) // 3