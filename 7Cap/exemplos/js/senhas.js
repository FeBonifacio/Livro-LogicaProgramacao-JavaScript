const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const senha = frm.inSenha.value
    const erros = []

    //verificar se o tamanho é valido
    if (senha.length < 8 || senha.length > 15) {
        erros.push("possuir entre 8 e 15 caracteres")
    }

    // vefiricar se nao possui números
    if (senha.match(/[0-9]/g) == null) {
        erros.push("Possuir números (no mínimo, 1")
    }

    //verificar se nao possui letras minusculas
    if (!senha.match(/[a-z]/g)){
        erros.push("possuir letras minúsculas (no mínimo, 1)")
    }

    //verificar maiúsculas
    if (!senha.match(/[A-Z]/g)) {
        erros.push("possuir letras maiúsculas (no mínimo, 2)")
    } 

    //simbolos
    if (!senha.match(/[\W|_]/g)) {
        erros.push("possuir simbolos (no mínimo, 2)")
    }

    // se o vetor estiver vazio nao foi encontrado erros
    if (erros.length == 0) {
        resp.innerText = "Ok! Senha Válida"
    } else {
        resp.innerText = `Erro... a senha deve ${erros.join(", ")}`
    }
})