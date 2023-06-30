// cria referencia ao form e ao elemento h3
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// cria um ouvinte de evento para o submit
frm.addEventListener("submit", (e) => {
    const quilo = Number(frm.inQuilo.value) // obtem conteudo dos campos
    const consumo = Number(frm.idConsumo.value)

    const valor = (quilo / 1000) * consumo // calcular valor a ser pago
    resp.innerText = `Valor a pagar R$: ${valor.toFixed(2)}` // exibe resposta

    e.preventDefault()
})