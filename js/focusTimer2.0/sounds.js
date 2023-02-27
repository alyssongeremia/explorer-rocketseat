const buttonSoundForest = document.querySelector('.forest')
const buttonSoundForestActive = document.querySelector('.forest-active')
const buttonSoundRain = document.querySelector('.rain')
const buttonSoundRainActive = document.querySelector('.rain-active')
const buttonSoundCoffee = document.querySelector('.coffeeShop')
const buttonSoundCoffeeActive = document.querySelector('.coffeeShop-active')
const buttonSoundFireplace = document.querySelector('.fireplace')
const buttonSoundFireplaceActive = document.querySelector('.fireplace-active')

// buttons songs
buttonSoundForest.addEventListener('click', function() {
    buttonSoundForest.classList.add('hide')
    buttonSoundForestActive.classList.remove('hide')

    soundForest.play()
})

buttonSoundForestActive.addEventListener('click', function() {
    buttonSoundForest.classList.remove('hide')
    buttonSoundForestActive.classList.add('hide')

    soundForest.pause()
})

buttonSoundRain.addEventListener('click', function() {
    buttonSoundRain.classList.add('hide')
    buttonSoundRainActive.classList.remove('hide')

    soundRain.play()
})

buttonSoundRainActive.addEventListener('click', function() {
    buttonSoundRain.classList.remove('hide')
    buttonSoundRainActive.classList.add('hide')

    soundRain.pause()
})

buttonSoundCoffee.addEventListener('click', function() {
    buttonSoundCoffee.classList.add('hide')
    buttonSoundCoffeeActive.classList.remove('hide')

    soundCoffee.play()
})

buttonSoundCoffeeActive.addEventListener('click', function() {
    buttonSoundCoffee.classList.remove('hide')
    buttonSoundCoffeeActive.classList.add('hide')

    soundCoffee.pause()
})

buttonSoundFireplace.addEventListener('click', function() {
    buttonSoundFireplace.classList.add('hide')
    buttonSoundFireplaceActive.classList.remove('hide')

    soundFireplace.play()
})

buttonSoundFireplaceActive.addEventListener('click', function() {
    buttonSoundFireplace.classList.remove('hide')
    buttonSoundFireplaceActive.classList.add('hide')

    soundFireplace.pause()
})

// audios

const soundForest = new Audio("https://github.com/alyssongeremia/explorer-rocketseat/blob/main/js/focusTimer2.0/sounds/Floresta.wav?raw=true")

const soundRain = new Audio("https://github.com/alyssongeremia/explorer-rocketseat/blob/main/js/focusTimer2.0/sounds/Chuva.wav?raw=true")

const soundCoffee = new Audio("https://github.com/alyssongeremia/explorer-rocketseat/blob/main/js/focusTimer2.0/sounds/Cafeteria.wav?raw=true")

const soundFireplace = new Audio("https://github.com/alyssongeremia/explorer-rocketseat/blob/main/js/focusTimer2.0/sounds/Lareira.wav?raw=true")

soundForest.loop = true
soundRain.loop = true
soundCoffee.loop = true
soundFireplace.loop = true

const volumeForest = document.querySelector('#volForest')

volumeForest.addEventListener('input', function() {
    soundForest.volume = volumeForest.value
})