// cria referencia ao form e aos elementos h3 e h4
const frm = document.querySelector("form")
const med = document.querySelector("h3")
const prom = document.querySelector("h3")

// cria um ouvinte de evento acionado quando o botao submit for clicado
frm.addEventListener("submit", (e) => {
    const medicamento = frm.inMedicamento.value // obtém conteúdo dos campos
    const preco = Number(frm.idPreco.value)

    const promocao = Math.floor(preco * 2) // arredonda para baixo resultado
    

    med.innerText = medicamento // exibe as respostas
    prom.innerText = `Leve 2 por apenas R$ ${promocao.toFixed(2)}`

    e.preventDefault()  // evita envio do form
})