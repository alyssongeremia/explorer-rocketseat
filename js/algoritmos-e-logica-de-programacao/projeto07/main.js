const routes = {
    "/": "./js/algoritmos-e-logica-de-programacao/projeto07/pages/home.html",
    "/universe": "/js/algoritmos-e-logica-de-programacao/projeto07/pages/universe.html",
    "/exploration": "js/algoritmos-e-logica-de-programacao/projeto07/pages/exploration.html",
    404: "./pages/404.html",
}

function route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    handle()
}

function handle() {
    const { pathname } = window.location
    const route = routes[pathname] || routes[404]
    fetch(route).then(data => data.text()).then(html => {
            document.querySelector('#app').innerHTML = html
        })
}

handle()

const btnHome = document.querySelector('.btn-home')
const btnUniverse = document.querySelector('.btn-universe')
const btnExploration = document.querySelector('.btn-exploration')
const bgPage = document.querySelector('.page')

btnHome.addEventListener('click', function() {
    bgPage.classList.add('bg-home')
    bgPage.classList.remove('bg-universe')
    bgPage.classList.remove('bg-exploration')
})

btnUniverse.addEventListener('click', function() {
    bgPage.classList.add('bg-universe')
    bgPage.classList.remove('bg-home')
    bgPage.classList.remove('bg-exploration')
})

btnExploration.addEventListener('click', function() {
    bgPage.classList.add('bg-exploration')
    bgPage.classList.remove('bg-home')
    bgPage.classList.remove('bg-universe')
})