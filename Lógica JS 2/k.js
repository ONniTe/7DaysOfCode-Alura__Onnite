function imprimeName() {
    const nome = document.querySelector("input[name='Nome']").value
    const idade = document.querySelector("input[name='Idade']").value
    const linguagem = document.querySelectorAll("input[type='checkbox']:checked")
    const imprime = document.querySelector("ul")



    let linguagemValues = []
    linguagem.forEach(element => linguagemValues.push(element.value.toUpperCase()))
    let optionsChecked = linguagemValues.join(", ")
    const list = document.createElement('li')
    list.innerHTML = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${optionsChecked}!`
    imprime.appendChild(list)

    setTimeout(() => {
        let lovePrograming = prompt(`Você gosta de estudar C++? Responda com o número 1 para SIM ou 2 para NÃO.`)
        switch (lovePrograming) {
            case "1":
                alert('> Muito bom! Continue estudando e você terá muito sucesso.')
                break;
            case "2":
                alert('> Ahh que pena... Já tentou aprender outras linguagens?')
                break
            default:
                break;
        }

    }, 1000)
}