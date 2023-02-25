export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
    }

    load() {
        this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
    }

    // verificar qual usuário deletar
    delete(user) {
        const filteredEntries = this.entries
            .filter(entry => entry.login !== user.login) // esta retornando true ou false

        this.entries = filteredEntries
        this.update()
    }
}

// classe que vai criar a visualização e eventos do HTML
export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.tBody = this.root.querySelector('table tbody')
        this.update()
    }

    update() {
        this.removeAllTr()
        this.entries.forEach(user => {
            const row = this.createRow()
            
            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user img').alt = `Imagem de ${user.name}`
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.repositories').textContent = user.public_repos
            row.querySelector('.followers').textContent = user.followers

            // deletar o usuário
            row.querySelector('.remove').onclick = () => {
               const isOk = confirm('Tem certeza que deseja deletar essa linha?')
               if(isOk) {
                this.delete(user)
               }
            }


            this.tBody.append(row)
        })
    }

    createRow() {
        const tr = document.createElement('tr')

        tr.innerHTML = `
                <td class="user">
                    <img src="https://github.com/alyssongeremia.png" alt="Imagem do perfil do Github">
                    <a href="https://github.com/alyssongeremia" target="_blank">
                        <p>Alysson Geremia</p>
                        <span>alyssongeremia</span>
                    </a>
                </td>
                <td class="repositories">
                    06
                </td>
                <td class="followers">
                    40
                </td>
                <td>
                    <button class="remove">&times;</button>
                </td>
        `

        return tr
    }

    removeAllTr() {
        this.tBody.querySelectorAll('tr').forEach((tr) => {
            tr.remove()
        })
    }
}