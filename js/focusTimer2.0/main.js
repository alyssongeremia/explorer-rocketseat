const buttonPlayTimer = document.querySelector('.play')
const buttonStopTimer = document.querySelector('.stop')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const addMinutes = document.querySelector('.addMinutes')
const removeMinutes = document.querySelector('.removeMinutes')
let minutes = minutesDisplay.textContent

let stop = false

buttonStopTimer.addEventListener('click', function() {
    stop = true
})

function countdown() {
    setTimeout( function() {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)

        if(seconds <= 0) {
            seconds = 60

            minutesDisplay.textContent = String(minutes -1).padStart(2, "0")
        }

        if(minutes <= 0 && seconds == 0) {
            console.log(seconds)
            return
        }

        if(stop == true) {
            window.location.reload()
        }
        
        secondsDisplay.textContent = String(seconds -1).padStart(2, "0")
        countdown()
    }, 1000)
}

addMinutes.addEventListener('click', function() {
    addFiveMinutes()
})

removeMinutes.addEventListener('click', function() {
    removeFiveMinutes()
})

function addFiveMinutes() {
    minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5
}

function removeFiveMinutes() {
    minutesDisplay.textContent = Number(minutesDisplay.textContent) - 5
}

buttonPlayTimer.addEventListener('click', function() {
    countdown()
})

const btnNightMode = document.querySelector('.btn-day')
const btnLightMode = document.querySelector('.btn-night')
const body = document.querySelector('body')

btnNightMode.addEventListener('click', function() {
    btnNightMode.classList.add('hide')
    btnLightMode.classList.remove('hide')
    body.classList.toggle('dark-display')
})

btnLightMode.addEventListener('click', function() {
    btnLightMode.classList.add('hide')
    btnNightMode.classList.remove('hide')
    body.classList.toggle('dark-display')
})
