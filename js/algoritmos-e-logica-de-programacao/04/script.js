let student = prompt("Digite o seu nome")
let noteOne = prompt("Quanto você tirou na primeira prova?")
let noteTwo = prompt("Quanto você tirou na segunda prova?")
let noteTree = prompt("Quanto você tirou na terceira prova?")

noteOne = Number(noteOne)
noteTwo = Number(noteTwo)
noteTree = Number(noteTree)

let result = (noteOne + noteTwo + noteTree) / 3
result = result.toFixed(2) // arredondar as casas decimais

if(result >= 7) {
    alert("Parabéns " + student + "!" + " Você foi aprovado(a) ! " + "Sua média final foi " + result)
} else {
    alert("Poxa " + student + "." + " Infelizmente você não foi aprovado(a). " + " Sua média final foi " + result + "." + " Mas, não desista, no próximo bimestre você vai recuperar!")
}