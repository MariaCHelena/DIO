let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let object = { propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'}

// for - executa uma instrução até que ela seja falsa

/* for (let indice = 0; indice <= array.length; indice++){
    console.log(indice);
} */

// for/in - executa repetição a partir de uma propriedade
/*for (let i in array){
    console.log(i);
}

for (i in object){
    console.log(i)
}*/

// for/of - executa repetição a partir de valor

/*for (i of array){
    console.log(i);
}*/

// while - executa uma ação enquanto determinada instrução for verdadeira (a verificação é feita -antes- da execução)

/*a = 0;
while (a < 10){
    a++;
    console.log(a);
}*/

// do/while  - executa uma ação enquanto determinada instrução for verdadeira (a verificação é feita -depois- da execução)

/*a = 0;
do {
    a++;
    console.log(a);
} while(a < 10);*/