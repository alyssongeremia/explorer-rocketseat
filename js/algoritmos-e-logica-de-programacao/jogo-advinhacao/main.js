// variaveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1 // n° de tentativas

// eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', clickEnterReset)

// funções callback
function handleTryClick(event) {
    event.preventDefault() // serve para que o forms não seja enviado toda vez

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas`
    }

    inputNumber.value = "" // limpar o campo que o número é digitado
    xAttempts++
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1 // reinicia a contagem de tentativas
    randomNumber = Math.round(Math.random() * 10) // cria um novo número
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function clickEnterReset(e) {
    if(e.key == 'Enter' && screen1.classList.contains("hide")){
        handleResetClick()
    }
}