let itens = []

for(item = 0; item < 10; item++) {
    let itemName = prompt("Digite o item " + (item +1))

    itens[item] = itemName
}

alert(itens)