//Verificar de duas maneiras diferentes se uma string é um palíndromo


//Solução 1, que não conta que a string tem espaços
function verificaPalindromo(string) {
    if(!string) return "string inexistente"
    
    return string.split("").reverse().join("") === string
}

//Solução 2, também não verifica se tem espaços ou caracteres especiais
function verificaPalindromo2(string){
    if(!string) return "string inexistente"
    
    for(i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i]){
            return false
        }
    }

    return true
}

console.log(verificaPalindromo2("123321"))