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
})

buttonSoundRainActive.addEventListener('click', function() {
    buttonSoundRain.classList.remove('hide')
    buttonSoundRainActive.classList.add('hide')
})

buttonSoundCoffee.addEventListener('click', function() {
    buttonSoundCoffee.classList.add('hide')
    buttonSoundCoffeeActive.classList.remove('hide')
})

buttonSoundCoffeeActive.addEventListener('click', function() {
    buttonSoundCoffee.classList.remove('hide')
    buttonSoundCoffeeActive.classList.add('hide')
})

buttonSoundFireplace.addEventListener('click', function() {
    buttonSoundFireplace.classList.add('hide')
    buttonSoundFireplaceActive.classList.remove('hide')
})

buttonSoundFireplaceActive.addEventListener('click', function() {
    buttonSoundFireplace.classList.remove('hide')
    buttonSoundFireplaceActive.classList.add('hide')
})

// audios

const soundForest = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")

soundForrest.loop = true