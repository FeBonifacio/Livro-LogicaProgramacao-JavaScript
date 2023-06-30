// cria referencia ao form e aos elementos h3 e h4
const frm = document.querySelector("form")
const temp = document.querySelector("h3")

// cria um ouvinte de evento acionado quando o botao submit for clicado
frm.addEventListener("submit", (e) => {
    const valor = frm.inValor.value // obtém conteúdo dos campos
    const tempo = Number(frm.inTempo.value)

    // calcula valor a pagar (arredonda para cima)
    const ValorApagar = Math.ceil(tempo / 15) * valor


    temp.innerText = `Valor a pagar R$ ${ValorApagar.toFixed(2)}` // exibe as respostas

    e.preventDefault()  // evita envio do form
})