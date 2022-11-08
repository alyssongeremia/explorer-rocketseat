let numberOne = Number(prompt("Digite o primeiro número"))
let numberTwo = Number(prompt("Digite o segundo número"))

let soma = numberOne + numberTwo
let sub = numberOne - numberTwo
let mult = numberOne * numberTwo
let div = numberOne / numberTwo
let restDiv = numberOne % numberTwo

alert(`A soma dos dois números é: ${soma}`)
alert(`A subtração dos dois números é: ${sub}`)
alert(`A multiplicação dos dois números é: ${mult}`)
alert(`A divisão dos dois números é: ${div}`)
alert(`O resto da divisão dos dois números é: ${restDiv}`)

if(soma % 2 == 0) {
    alert(`A soma dos dois números é par: ${soma}`)
} else {
    alert(`A soma dos dois números é ímpar: ${soma}`)
}

if(numberOne == numberTwo) {
    alert("Os números inseridos são iguais")
} else {
    alert("Os números inseridos são diferentes")
}