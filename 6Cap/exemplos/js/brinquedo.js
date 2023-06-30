const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const criancas = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    const idade = Number(frm.inIdade.value)
    criancas.push({ nome, idade })
    frm.reset()
    frm.inNome.focus()
    frm.btListar.dispatchEvent(new Event("click")) // disparar click em btListar
})

frm.btListar.addEventListener("click", () => {
    if (criancas.length == 0) {
        alert("Não há crianças na lista")
        return
    }
    let lista = "" //concatenar a lista de criancas
    for (const crianca of criancas) {
        const { nome, idade } = crianca // desestrutura o objeto
        lista += nome + " - " + idade + " anos\n"
    }
    resp.innerText = lista // exibe a lista
})

frm.btResumir.addEventListener("click", () => {
    if (criancas.length == 0) {
        alert("Não há crianças na lista")
        return
    }
    const copia = [...criancas] //cria uma copia do vetor de criança
    copia.sort((a, b) => a.idade - b.idade) // ordena pela idade
    let resumo = ""
    let aux = copia[0].idade // menor idade do vetor
    let nomes = [] // para inserir nome de cada idade
    for (const crianca of copia) {
        const { nome, idade } = crianca
        if (idade == aux) { //se a idade for a mesma
            nomes.push(nome) // adiciona ao vetor
        }
            else { //se não monta o resumo para cada idade
                resumo += aux + " ano(s): " + nomes.length + " crianças(s) - "
                resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
                resumo += "(" + nomes.join(",") + ")\n\n"
                aux = idade //nova idade na ordem
                nomes = [] // limpar vetor
                nomes.push(nome) //adiciona o primeiro nome
            }
        }
        // adiciona a ultima criança
        resumo += aux + " anos(s): " + nomes.length + " crianças(s) - "
        resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
        resumo += "(" + nomes.join(",") + ")\n\n"
        resp.innerText = resumo
})