function principal(){
    let n1 = Number(prompt('Digite o primeiro número:'))
    let n2 = Number(prompt('Digite o segundo número:'))
    if (!n1 || !n2){
        alert('Erro - Parâmentros inválidos!')
        principal()
    } else {
        var soma = n1 + n2
        var mensagem = (n1 !== n2)? `não`: ''
        var maior = ''
        if (n1 !== n2){
            maior = (n1 > n2)? `, e ${n1} é maior que ${n2}`:`, e ${n2} é maior que ${n1}`
        }
        alert(`Os números ${n1} e ${n2} ${mensagem} são iguais, sua soma é ${soma}${maior}`)
    }
}
principal()