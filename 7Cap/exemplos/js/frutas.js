const frm = document.querySelector("form")
const resp = document.querySelector("span")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const fruta = frm.inFruta.value.toUpperCase()
    let resposta = ""

    for (const letra of fruta) {
        if (letra == fruta.charAt(0)) { // se letra igual a letra inicial da string
            resposta += fruta.charAt(0)
        } else {
            resposta += "_"
        }
    }

    resp.innerText = resposta
    frm.inFruta.value = "*".repeat(fruta.length) //preenche com "*", conforme tamanho
})