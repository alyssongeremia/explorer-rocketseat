let result = prompt("Advinhe o número que estou pensando? Está entre 0 e 10")
const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1 // n° de tentativas

while(randomNumber != result) {
    result = prompt(`Errou! Tente novamente`)
    xAttempts++ 
}

let attempts = "tentativas" // corrigir a palavra tentativa quando o usuario acertar
if(xAttempts == 1){
    attempts = "tentativa"
}

alert(`Parabéns! O número que eu pensei foi ${randomNumber} e você advinhou o número em ${xAttempts} ${attempts}`)