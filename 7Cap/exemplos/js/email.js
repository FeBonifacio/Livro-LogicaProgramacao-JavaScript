const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const funcionario = frm.inFuncionario.value

    //dividir o nome em itens de vetor, criados a cada ocorrencia do espaço
    const partes = funcionario.split(" ")
    let email = ""
    const tam = partes.length // obtem n de itens do vetor em partes

    for (let i = 0; i< tam - 1; i++) { //percorre itens do vetor exceto o ultimo
        email += partes[i].charAt(0)
    }

    //concatena as letras inicias com a ultima e empresa
    email += partes[tam - 1] + "@empresa.com.br"

    resp.innerText = `E-mail: ${email.toLowerCase()}`
})