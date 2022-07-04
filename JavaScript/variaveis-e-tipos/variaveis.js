var a = 1
var b = 3


b = 2

var c = a + b
console.log(a)
console.log(b)
console.log(c)
teste() //roda a função atribuindo os novos valores às variáveis
var c = a + b //precisamos declarar essa variável novamente para que ela atribua os novos valores de 'a' na soma
console.log(a)
console.log(b)
console.log(c)


function teste(){
    a = 11; //o escopo é global
    let b = 33; // o escopo é local
    console.log(a, b)
} 


//Escopos diferentes
//var e let possuem diferentes escopos, enquanto var é global, let é local
var a = 1
var b = 2
var c = a + b
console.log(`A variável a é igual a ${a}, a variável b é igual a ${b} e a variável c é a soma das variáveis a e b, ou seja, é igual a ${c}`)

for (i = 0; i < 2; i++){

    if (a == 1){
        a = 11
        let b = 22
        console.log(`A variável a passou a ser ${a} e a variável b passou a ser ${b}`)
    } else {
        a = 1
        console.log(`A variável a passou a ser ${a} e a variável b passou a ser ${b}`)
    }
    var c = a + b
    console.log(`Os valores das variáveis fora do escopo agora são: a = ${a}, b = ${b} e c = ${c}`)
}

//Hoisting
//se for let, a variável tem que ser declarada antes de receber uma atribuição, se for var não tem a necessidade de declara-la primeiro
numberOne = 1 //podemos atribuir um valor a uma variável sem declara-la antes

console.log(numberOne)

//let numberOne -> NÃO VAI DAR CERTO, vai apresentar um erro
//var numberOne -> DARÁ CERTO, não irá apresentar nenhum erro