let option;
let itens = [];

while(option != 3) {
    option = Number(prompt(`
    Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa`))

    switch(option) {
        case 1:
            let item = prompt("Digite o nome do item")
            itens.push(item)
            break

        case 2:
            if(itens.length == 0) {
                alert("Não exitem itens cadastrados")
            } else{
                alert(itens)
            }
            break
        
        case 3:
            alert("Tchau")
            break
        
        default:
            alert("Opção inválida. Tente novamente.")
    }

    /* 
    if(option == 1) {
        let item = prompt("Digite o nome do item")
        itens.push(item)
    } else if(option == 2) {

        if(itens.length == 0) {
            alert("Não exitem itens cadastrados")
        } else{
            alert(itens)
        }

    } else {
        alert("Tchau")
    }
    */
}