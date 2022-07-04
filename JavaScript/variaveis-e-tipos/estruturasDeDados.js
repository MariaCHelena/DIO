//método typeof = fala o tipo da variável. O JavaScript possui uma tipagem dinâmica, ou seja, sempre que reatribuimos um valor a variável o tipo dela pode mudar de acordo com o seu conteúdo

//STRINGS

//Comumente utilizada para textos, são declaradas entre aspas ou crases.

let nome = "João"
let sobrenome = "Pedro"

let concatenado = nome.concat(sobrenome)
console.log(typeof concatenado)
console.log(concatenado.length)

let exemplo = new String("blablabla")

console.log(typeof exemplo)

let vazio = ""
console.log(typeof vazio)

console.log(nome[1])//o índice sempre começa do zero
console.log(nome.length)//o tamanho sempre começa do um

concatenado = nome + " " + sobrenome
console.log(concatenado)

concatenado = nome + "\n" + sobrenome
console.log(concatenado)

concatenado = `${nome} ${sobrenome}`
console.log(concatenado)

let aspas = "\""
console.log(aspas)

let frase = "Olá, tudo bem?"
console.log(frase.split(" "))
console.log(frase.includes("tudo"))
console.log(frase.startsWith("O"))
console.log(frase.endsWith("m"))

//NUMBERS
//Números inteiros ou decimais

let num = 100

let soma = num + 3
let subtração = num - 70

console.log(num, soma, subtração)

let div = num % 2

console.log(div)

console.log(Math.PI)

let fiveByThree = 5/3
console.log(fiveByThree)

console.log(Math.floor(fiveByThree))
console.log(Math.ceil(fiveByThree))

percent = "10%"
//ou
percent = 10
console.log(percent + "%")
console.log(typeof percent) 
//fazer a declaração de porcentagem como percent = 10% vai mostrar erro, porque o sinal "%" é visto como sinal de módulo*/

//BOOLEANOS
//O valor booleano ou é verdadeiro, ou é falso. Irá retornar valores condicionais

let validation = 3 === 0
console.log(validation)

validation = 3 === 3
console.log(validation)

validation = 3 > 4
console.log(validation)

validation = 3 >= 2
console.log(validation)

console.log(!validation)

console.log(typeof validation)

//ARRAYS
//Listas iteráveis de elementos

let array = []

array.push(3)
console.log(array)

array.push(2) //push() adiciona um elemento ao final da lista
console.log(array)

array.pop() //pop() retira o elemento do final do array
console.log(array)

array.push(2)
array.push(5)
console.log(array)

array.shift() //shift() retira o primeiro elemento o array
console.log(array)

array.unshift(1) //unshify() adiciona um elemento ao começo da lista
console.log(array)

for(i = 0; i < array.length; i++){
    console.log(array[i])
}

console.log(array.includes(3))

//OBJETOS
//Estrutura do tipo "chave" e "valor"

let obj = {}
console.log(typeof obj)

obj.name = "Maria"
obj.age = 18
console.log(obj)

console.log(Object.values(obj))
console.log(Object.keys(obj))

let person = {
    name: "maria",
    age: 18,
    adress: "Rua 1"
}

console.log(person)
console.log(Object.values(person))
console.log(Object.keys(person))
console.log(person.name)

person["numberOfSiblings"] = 1
console.log(person)

let mom = "nameOfMom"

person.mom = "Viviane"
person[mom] = "Viviane"
console.log(Object.keys(person))

//EMPTY, NULL E UNDEFINED
//Todos eles irão retornar o valor "falso" em boolean, porém eles são diferentes
//Empty = a variável foi declarada com nenhum valor dentro, como 0, "", [] ou {}
//Null = o valor não foi inicializado
//Undefined = o valor não existe, não foi declarado

console.log(typeof banana)

let abacaxi = null

console.log(typeof abacaxi)
console.log(abacaxi)

console.log(abacaxi == false)
console.log(abacaxi == true)
console.log(!abacaxi) //null seria um valor "falsy", que não é falso mas se comporta como se fosse

let maca

console.log(!maca)

let pera = 0 //o valor esta vazio, mas é definido

console.log(typeof pera)