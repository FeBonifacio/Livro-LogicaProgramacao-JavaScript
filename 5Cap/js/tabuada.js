const frm = document.querySelector("form") //obtém o elemento
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => { // "escuta" evento submit do form
    e.preventDefault()
    const numero = Number(frm.inNumero.value) //obtém o numero informado
    let resposta = "" // variavel do tipo String, para concatenar a resposta

    // criar um laço de repetição (i começa em 1 e é incrementado até 10)
    for (let i = 1; i <= 10; i++) {
        resposta = resposta + numero + " X " + i + " = " + (numero * i) + "\n"
    }
    // conteúdo da tag pre é alterado para exibir a tabuda do número
    resp.innerText = resposta
})