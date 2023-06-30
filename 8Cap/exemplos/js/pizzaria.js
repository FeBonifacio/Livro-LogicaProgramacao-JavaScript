const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const itens = [] // vetor global para armanezar itens do pedido

frm.rbPizza.addEventListener("click", () => {
    frm.inBebida.className = "oculta"
    frm.inPizza.className = "exibe"
})

frm.rbBebida.addEventListener("click", () => {
    frm.inPizza.className = "oculta"
    frm.inBebida.className = "exibe"
})

frm.inDetalhes.addEventListener("focus", () => { //quando o campo receber foco
    if (frm.rbPizza.checked) {
        const pizza = frm.inPizza.value
        //uso de operador ternario para indicar numero de sabores
        const num = pizza == "media" ? 2 : pizza == "grande" ? 3 : 4
        frm.inDetalhes.placeholder = `Até ${num} sabores`
    }
})

frm.inDetalhes.addEventListener("blur", () => {
    frm.inDetalhes.placeholder = ""
})

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    let produto
    if (frm.rbPizza.checked) {
        const num = frm.inPizza.selectedIndex //Obtem n do intem selecionado
        produto = frm.inPizza.options[num].text //texto do item selecionado
    } else {
        const num = frm.inBebida.selectedIndex
        produto = frm.inBebida.options[num].text
    }

    const detalhes = frm.inDetalhes.value // conteúdo do inDetalhes
    itens.push(produto + " (" + detalhes + ")") //adiciona ao vetor
    resp.innerText = itens.join("\n") // exibe os itens do pedido

    frm.reset()
    frm.rbPizza.dispatchEvent(new Event("click")) // dispara click em rbPizza
})