//trocar todos os elementos pares e diferentes de 0 de um array por 0, se o valor for 0, null ou undefined substituir por -1

function substituirPares(array){
    if(!array) return -1
    if(!array.length) return -1


    for(let i = 0; i < array.length; i++){
        if(array[i] === 0){
            console.log("Você já é zero!!")
        } else if (array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0....`)
            array[i] = 0;
        } else {

        }
    }

    return array
}

let numeros = [1, 2, 5, 9, 25, 42, 56]
let exp = []

console.log(substituirPares(numeros))
console.log(substituirPares(null))
console.log(substituirPares(exp))