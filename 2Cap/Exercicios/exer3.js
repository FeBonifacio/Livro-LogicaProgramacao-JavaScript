// cria referencia ao form e aos elementos h3 e h4
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outPromocao")
const resp2 = document.querySelector("#outPrecoTerceiro")

// cria um ouvinte de evento acionado quando o botao submit for clicado
frm.addEventListener("submit", (e) => {

    const produto = frm.inProduto.value // obtém conteúdo dos campos
    const preco = Number(frm.inPreco.value)

    // calcular valores
    const terceiro = preco / 2;
    const total = (preco * 2) + terceiro;

    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${total.toFixed(2)}`;
    resp2.innerText = `O 3º produto custa apenas R$: ${terceiro.toFixed(2)}`;

    e.preventDefault()  // evita envio do form
})