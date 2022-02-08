//tipos primitivos

//boolean
var x = false;
console.log(x);
console.log(typeof(x));

//number
var y = 25;
console.log(y);
console.log(typeof(y));

//string
var z = "JavaScript";
console.log(z);
console.log(typeof(z)); 

//como declarar
var variavel = "Helena";
variavel = "Maria";
console.log(variavel);

let variavel2 = "Helena";
console.log(variavel2);
variavel2 = "Maria";
console.log(variavel2);

CONSTANTE = 23;
console.log(CONSTANTE); //precisa de um valor inicial e não pode ser alterada 

//escopo global e local
var escopoGlobal = 1;

function escopoLocal(){
    let escopoLocalInterno = 'local';
    return escopoLocalInterno
}
//a variavel "escopoLocalInterno" não pode ser chamada fora da função

console.log(escopoGlobal);
console.log(escopoLocal()); 

//atribuição
//usamos o símbolo (=) para atribuir valores
var atribuição = "Ana";

//comparação
var comparacao = 1;
console.log(comparacao == 1);

//comparaçao idêntica
var identico = "1";
console.log(identico === 1);

//adicao +
var adicao = 2 + 2;
console.log(adicao);

//subtração -
var subtracao = 2 - 1;
console.log(subtracao);

//multiplicação *
var multiplicacao = 2 * 3;
console.log(multiplicacao);

//divisão real /
var divisao = 4 / 2;
console.log(divisao);

//divisao inteira %
var modulo = 5 % 2;
console.log(modulo);
//retorna o resto da divisão entre o primeiro e o segundo número

//potenciação **
var potenciacao = 2 ** 3;
console.log(potenciacao);

//maior que >
var maiorque = 5 > 2;
console.log(maiorque);

//menor que <
var menorque = 3 < 6;
console.log(menorque);


//maior ou igual a >=
var maiorouiguala = 5 >= 5
console.log(maiorouiguala);

//menor ou igual a <=
var menorouiguala = 4 <= 8;
console.log(menorouiguala);
//se não for verdadeiro, o console mostrará o valor "falso"

//e &&
var e = true && false;
console.log(e);

//ou ||
var ou = true || false;
console.log(ou);

//não !
var nao = !false;
console.log(nao);