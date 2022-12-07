import { Modal } from "./modal.js"
import { alertError } from "./alert-error.js"
import { calculateIMC, notANumber } from "./utils.js"
// quando for importar uma const
// usar as chaves {}

// variaveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputWeight.oninput = () => alertError.close()
inputHeight.oninput = () => alertError.close()

form.onsubmit = function(event) {
    event.preventDefault() // serve para a pagina nao recarregar quando clicar no submit
    
    const weight = inputWeight.value // pegar o valor digitado pelo usuario
    const height = inputHeight.value 

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

    if(weightOrHeightIsNotANumber) {
        alertError.open()
        return;
    }

    alertError.close()

    const result = calculateIMC(weight, height) // calcula o IMC
    displayResultMessage(result)
}

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`
    
    Modal.message.innerText = message
    Modal.open() // exibe o popup
}


