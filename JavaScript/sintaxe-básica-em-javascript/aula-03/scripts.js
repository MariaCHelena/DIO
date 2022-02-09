/*// o que são vetores ou arrays

//como declarar um array
let array = [string, 1, true];
console.log(array);

//pode guardar vários tipos de dados
let array = ['string', 1, true, ['array1'], ['array2'], ['array3']];
console.log(array[3]);

// forEach
array.forEach(function(item, index){console.log(item, index)}); 

//push
array.push('novo item');
console.log(array); //adiciona um novo intem no final do array 

//pop
array.pop();
console.log(array); //remove o último item do array 

//shift
array.shift();
console.log(array); //remove o primeiro item do array 

//unshift
array.unshift('novo item');
console.log(array); //adiciona um novo item no início do array 

//indexOf
console.log(array.indexOf(true)); //retorna o índice do valor inserido 

//splice
array.splice(0, 3);
console.log(array); //remove itens do array por meio do seu índice

//slice
let novoArray = array.slice(0, 3);
console.log(novoArray); //retorna uma parte de um array já existente */

//objetos

var object = {string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: {objectInterno: 'objeto interno'}}

console.log(object.objectInterno);

var string = object.string;
console.log(string);
