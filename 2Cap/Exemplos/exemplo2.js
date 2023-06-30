// cria referencia ao form e aos elementos de resposta pelo seu id
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

// cria um ouvinte de evento acinado quando o botao submit for clicado
frm.addEventListener("submit", (e) => {
    const veiculo = frm.inVeiculo.value // obtem o conteudo dos campos
    const preco = Number(frm.inPreco.value)

    const entrada = preco * 0.50 // calcula a entrada
    const parcela = (preco * 0.50) / 12 // calcula valor das parcelas

    resp1.innerText = `Promoção: ${veiculo}` /// exive as resposta
    resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`
    resp3.innerText = `+12x de R$ ${parcela.toFixed(2)}`

    e.preventDefault() //evita envio do form
})