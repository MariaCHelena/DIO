console.log('Hello World!');

//  teste

/* teste */

var preco = 2;
var desconto = 0.2;
var valor = preco - preco * desconto;

console.log (valor);

function soma(a, b) {;
    return a + b;
}

console.log(soma(3, 5));

let i = 0;


function ReturnEvenValues(array) {
    let evenNums = [];
    for (let i = 0; i < array.length; i++);
        if (array[i] % 2 == 0) {
            evenNums.push(array[i]);
        }
    console.log(evenNums)
}

let array = [1, 2, 3, 4, 8];

ReturnEvenValues(array);

/* Não funciona do jeito que deveria funcionar :p 
Eventualmente vou descobrir o porquê. */