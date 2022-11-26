// variaveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal .title span')
const modalBtnClose = document.querySelector('.modal button.close')



form.onsubmit = function(event) {
    event.preventDefault() // serve para a pagina nao recarregar quando clicar no submit
    
    const weight = inputWeight.value // pegar o valor digitado pelo usuario
    const height = inputHeight.value 

    const result = IMC(weight, height) // calcula o IMC

    const message = `Seu IMC é de ${result}`
    
    modalMessage.innerText = message
    modalWrapper.classList.add('open') // exibe o popup
}

// fechar o popup
modalBtnClose.onclick = function() {
    modalWrapper.classList.remove('open')
}

function IMC(weight, height) {
    return(weight / ((height / 100) ** 2)).toFixed(2)
}

