const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const aluno = frm.inAluno.value

    if(!validarNome(aluno)) {
        alert("Infomr o nome completo do aluno")
        frm.inAluno.focus()
        return
    }

    resp.innerText = "Senha Inicial: " + obterSobrenome(aluno) + contarVogais(aluno)
})

const validarNome = nome => nome.includes(" ")

const obterSobrenome  = nome => {
    const ultimoEspaco = nome.lastIndexOf(" ")
    return nome.substr(ultimoEspaco + 1).toLowerCase()
}

const contarVogais = nome => {
    let num = 0
    for (const letra of nome) {
        const letraUC = letra.toUpperCase()
        if (letraUC == "A" || letraUC == "E" || letraUC == "I" || letraUC == "O" || letraUC == "U") {
            num++
        }
    }
    return num < 10 ? "o" + num : num
}

